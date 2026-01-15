// --- START OF FILE content.js ---

// --- 多语言支持配置 ---
let curLang = "zh";

const i18n = {
  zh: {
    title: "LC Snippets",
    toggleBtn: "模板助手",
    addBtn: "+ 添加",
    collapseBtn: "收起",
    placeholderTitle: "模板标题 (如: Union Find)",
    placeholderCode: "在此输入代码...",
    save: "保存模板",
    update: "确认修改",
    copy: "复制",
    copied: "已复制",
    edit: "编辑",
    del: "删除",
    confirmDel: "确定删除此模板吗？",
    promptLang: "请输入语言名称 (如: Java, Python3):",
    rename: "重命名语言类型:",
    exists: "该语言已存在！",
    emptyTitle: "请输入标题",
    emptyCode: "请至少为一个语言输入代码",
  },
  en: {
    title: "LC Snippets",
    toggleBtn: "Snippets",
    addBtn: "+ Add",
    collapseBtn: "Collapse",
    placeholderTitle: "Snippet Title (e.g. Union Find)",
    placeholderCode: "Paste code here...",
    save: "Save",
    update: "Update",
    copy: "Copy",
    copied: "Copied",
    edit: "Edit",
    del: "Del",
    confirmDel: "Delete this snippet?",
    promptLang: "Language Name (e.g. Java):",
    rename: "Rename Language:",
    exists: "Language already exists!",
    emptyTitle: "Please enter a title",
    emptyCode: "Code cannot be empty",
  },
};

const t = (key) => i18n[curLang][key];

function getLangClass(langName) {
  const map = {
    "c++": "language-cpp",
    cpp: "language-cpp",
    java: "language-java",
    python: "language-python",
    py: "language-python",
    javascript: "language-javascript",
    js: "language-javascript",
    go: "language-go",
    golang: "language-go",
    sql: "language-sql",
  };
  return map[langName.toLowerCase()] || "language-clike";
}

// --- 1. 创建 DOM ---
const sidebar = document.createElement("div");
sidebar.id = "lc-snippet-sidebar";

chrome.storage.local.get(
  { theme: "light", sidebarWidth: "400px", lang: "zh" },
  (res) => {
    sidebar.setAttribute("data-theme", res.theme);
    sidebar.style.width = res.sidebarWidth;
    curLang = res.lang;
    updateInterfaceText(); // 初始加载语言
  }
);

sidebar.innerHTML = `
    <div class="resize-handle"></div>
    <div class="lc-header">
        <div style="display:flex; align-items:center;">
            <span id="ui-title" style="font-weight:bold; color:#ffa116; font-size:16px; margin-right:10px;">${t(
              "title"
            )}</span>
            <button id="toggle-editor-btn" style="background:none; border:1px solid var(--lc-border); border-radius:4px; cursor:pointer; color:var(--lc-text); font-size:12px; padding:2px 8px;">
                ${t("addBtn")}
            </button>
        </div>
        <div style="display:flex; align-items:center;">
            <button id="lang-toggle" style="background:none; border:none; cursor:pointer; color:var(--lc-text); font-size:14px; margin-right:8px; font-weight:bold;">EN/中</button>
            <button id="theme-toggle" style="background:none; border:none; cursor:pointer; font-size:18px;">🌓</button>
            <button id="close-sidebar" style="background:none; border:none; cursor:pointer; color:#999; margin-left:12px; font-size:18px;">✕</button>
        </div>
    </div>

    <div class="editor-container closed" id="main-editor-area">
        <input type="text" id="editor-title" class="lc-input" placeholder="${t(
          "placeholderTitle"
        )}">
        <div class="lc-tabs" id="editor-tabs"></div>
        <div class="lc-editor-wrapper">
            <div style="position:relative; width:100%; height:100%;">
                <pre id="editor-highlight-layer" class="language-clike editor-common"><code id="editor-highlight-code"></code></pre>
                <textarea id="editor-code" class="lc-code-editor editor-common" spellcheck="false" placeholder="${t(
                  "placeholderCode"
                )}"></textarea>
            </div>
        </div>
        <button id="save-btn" style="width:100%; background:#2db55d; color:white; border:none; padding:10px; border-radius:4px; cursor:pointer; margin-top:8px; font-weight:bold;">${t(
          "save"
        )}</button>
    </div>
    <div id="lc-list" class="lc-list"></div>
`;

// 获取元素引用
const editorContainer = sidebar.querySelector("#main-editor-area");
const toggleEditorBtn = sidebar.querySelector("#toggle-editor-btn");
const listContainer = sidebar.querySelector("#lc-list"); // 注意这里也要用 sidebar.querySelector
const editorArea = sidebar.querySelector("#editor-code");
const highlightCode = sidebar.querySelector("#editor-highlight-code");
const highlightPre = sidebar.querySelector("#editor-highlight-layer");
const editorTabs = sidebar.querySelector("#editor-tabs");
const langBtn = sidebar.querySelector("#lang-toggle");

// 悬浮按钮
const toggleBtn = document.createElement("div");
toggleBtn.id = "lc-sidebar-toggle";
toggleBtn.innerText = "模板助手";
document.body.appendChild(sidebar);
document.body.appendChild(toggleBtn);

// --- 状态管理 ---
let editingIdx = null;
let currentDraft = {
  title: "",
  data: { Python: "" },
  activeLang: "Python",
};

// --- 2. 界面更新与交互 ---

function updateInterfaceText() {
  sidebar.querySelector("#ui-title").innerText = t("title");
  toggleBtn.innerText = t("toggleBtn");

  const isClosed = editorContainer.classList.contains("closed");
  toggleEditorBtn.innerText = isClosed ? t("addBtn") : t("collapseBtn");

  sidebar.querySelector("#editor-title").placeholder = t("placeholderTitle");
  sidebar.querySelector("#editor-code").placeholder = t("placeholderCode");

  const saveBtn = sidebar.querySelector("#save-btn");
  saveBtn.innerText = editingIdx !== null ? t("update") : t("save");

  render(); // 重新渲染列表以更新按钮文字
}

langBtn.onclick = () => {
  curLang = curLang === "zh" ? "en" : "zh";
  chrome.storage.local.set({ lang: curLang });
  updateInterfaceText();
};

toggleEditorBtn.onclick = () => {
  const isClosed = editorContainer.classList.toggle("closed");
  toggleEditorBtn.innerText = isClosed ? "+ 添加" : "收起";
  if (!isClosed && editingIdx === null) {
    document.getElementById("editor-title").focus();
  }
};

// --- 3. 编辑器逻辑 ---

function renderEditorTabs() {
  editorTabs.innerHTML = "";
  const languages = Object.keys(currentDraft.data);

  languages.forEach((lang) => {
    const tab = document.createElement("div");
    tab.className = `lc-tab-item ${
      lang === currentDraft.activeLang ? "active" : ""
    }`;

    const nameSpan = document.createElement("span");
    nameSpan.innerText = lang;
    nameSpan.title = t("rename");
    nameSpan.style.cursor = "text";

    // 双击重命名
    nameSpan.ondblclick = (e) => {
      e.stopPropagation();
      const newName = prompt(t("rename"), lang);
      const cleanName = newName ? newName.trim() : null;

      if (cleanName && cleanName !== lang) {
        if (currentDraft.data[cleanName]) {
          alert(t("exists"));
          return;
        }
        currentDraft.data[cleanName] = currentDraft.data[lang];
        delete currentDraft.data[lang];
        if (currentDraft.activeLang === lang)
          currentDraft.activeLang = cleanName;

        renderEditorTabs();
        if (currentDraft.activeLang === cleanName) switchEditorLang(cleanName);
      }
    };
    tab.appendChild(nameSpan);

    // 删除语言
    const closeBtn = document.createElement("span");
    closeBtn.className = "lc-tab-close";
    closeBtn.innerText = "×";
    closeBtn.onclick = (e) => {
      e.stopPropagation();
      if (confirm(`Delete ${lang}?`)) {
        delete currentDraft.data[lang];
        const remaining = Object.keys(currentDraft.data);
        if (remaining.length === 0) {
          currentDraft.data = { "C++": "" };
          currentDraft.activeLang = "C++";
        } else if (lang === currentDraft.activeLang) {
          currentDraft.activeLang = remaining[0];
        }
        editorArea.value = currentDraft.data[currentDraft.activeLang] || "";
        renderEditorTabs();
        syncEditor();
      }
    };
    tab.appendChild(closeBtn);

    tab.onclick = () => switchEditorLang(lang);
    editorTabs.appendChild(tab);
  });

  // 添加语言按钮
  const addBtn = document.createElement("div");
  addBtn.className = "lc-add-lang-btn";
  addBtn.innerText = "+";
  addBtn.onclick = () => {
    const newLang = prompt(t("promptLang"));
    if (newLang) {
      const cleanLang = newLang.trim();
      if (!cleanLang) return;
      if (!currentDraft.data[cleanLang]) currentDraft.data[cleanLang] = "";
      switchEditorLang(cleanLang);
    }
  };
  editorTabs.appendChild(addBtn);
}

function switchEditorLang(newLang) {
  currentDraft.data[currentDraft.activeLang] = editorArea.value;
  currentDraft.activeLang = newLang;
  editorArea.value = currentDraft.data[newLang] || "";

  const cls = getLangClass(newLang);
  highlightPre.className = `${cls} editor-common`;

  renderEditorTabs();
  syncEditor();
}

function syncEditor() {
  const text = editorArea.value;
  highlightCode.textContent = text + (text.endsWith("\n") ? " " : "");
  if (window.Prism) Prism.highlightElement(highlightCode);
}

editorArea.addEventListener("input", syncEditor);
editorArea.addEventListener("scroll", () => {
  highlightPre.scrollTop = editorArea.scrollTop;
  highlightPre.scrollLeft = editorArea.scrollLeft;
});

// Tab 键支持
editorArea.onkeydown = function (e) {
  const start = this.selectionStart;
  const end = this.selectionEnd;
  if (e.key === "Tab") {
    e.preventDefault();
    this.value =
      this.value.substring(0, start) + "    " + this.value.substring(end);
    this.selectionStart = this.selectionEnd = start + 4;
    syncEditor();
  }
  // 括号补全可按需开启
};

// --- 4. 列表渲染与操作 ---

function escapeHTML(str) {
  if (!str) return "";
  return str.replace(
    /[&<>"']/g,
    (m) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        m
      ])
  );
}

function render() {
  chrome.storage.local.get({ snippets: [] }, (data) => {
    listContainer.innerHTML = "";
    const displayList = [...data.snippets].reverse();

    displayList.forEach((item, index) => {
      const realIdx = data.snippets.length - 1 - index;
      if (!item.data && item.code) item.data = { Default: item.code };

      const languages = Object.keys(item.data);
      const initialLang = languages[0];
      const langClass = getLangClass(initialLang);
      const codeContent = escapeHTML(item.data[initialLang] || "");

      const card = document.createElement("div");
      card.className = "snippet-card collapsed";
      card.dataset.activeLang = initialLang;

      const tabsHtml = languages
        .map(
          (lang) =>
            `<div class="lc-tab-item ${
              lang === initialLang ? "active" : ""
            }" data-lang="${lang}">${lang}</div>`
        )
        .join("");

      card.innerHTML = `
        <div class="card-header">
            <div class="card-header-left" data-action="toggle">
                <span class="fold-arrow">▲</span>
                <span style="font-weight:bold; font-size:14px;">${
                  item.title
                }</span>
            </div>
            <div>
                <button class="op-btn copy" data-idx="${realIdx}" style="color:#007bff; border:none; background:none; cursor:pointer; font-size:12px;">${t(
        "copy"
      )}</button>
                <button class="op-btn edit" data-idx="${realIdx}" style="color:#666; border:none; background:none; cursor:pointer; font-size:12px; margin-left:8px;">${t(
        "edit"
      )}</button>
                <button class="op-btn del" data-idx="${realIdx}" style="color:#ff4d4f; border:none; background:none; cursor:pointer; font-size:12px; margin-left:8px;">${t(
        "del"
      )}</button>
            </div>
        </div>
        <div class="lc-tabs card-tabs" data-real-idx="${realIdx}">${tabsHtml}</div>
        <pre class="${langClass}"><code id="code-display-${realIdx}">${codeContent}</code></pre>
      `;
      listContainer.appendChild(card);
    });
    if (window.Prism) Prism.highlightAllUnder(listContainer);
  });
}

// 列表点击代理
listContainer.onclick = (e) => {
  // 折叠
  const toggleArea = e.target.closest('[data-action="toggle"]');
  if (toggleArea) {
    toggleArea.closest(".snippet-card").classList.toggle("collapsed");
    return;
  }

  // 卡片内 Tab 切换
  if (
    e.target.classList.contains("lc-tab-item") &&
    e.target.closest(".card-tabs")
  ) {
    const lang = e.target.dataset.lang;
    const tabContainer = e.target.closest(".card-tabs");
    const card = tabContainer.closest(".snippet-card");
    const realIdx = tabContainer.dataset.realIdx;

    Array.from(tabContainer.children).forEach((child) =>
      child.classList.remove("active")
    );
    e.target.classList.add("active");
    card.dataset.activeLang = lang;

    chrome.storage.local.get({ snippets: [] }, (data) => {
      const item = data.snippets[realIdx];
      const codeData = item.data || { Default: item.code };
      const codeBlock = document.getElementById(`code-display-${realIdx}`);

      // 使用 textContent 修复换行问题
      codeBlock.textContent = codeData[lang] || "";
      codeBlock.parentElement.className = getLangClass(lang);
      if (window.Prism) Prism.highlightElement(codeBlock);
    });
    return;
  }

  // 操作按钮
  const idx = e.target.dataset.idx;
  if (idx === undefined) return;
  const realIdx = parseInt(idx);

  chrome.storage.local.get({ snippets: [] }, (data) => {
    const item = data.snippets[realIdx];
    const itemData = item.data || { Default: item.code };

    if (e.target.classList.contains("copy")) {
      const card = e.target.closest(".snippet-card");
      const activeLang = card.dataset.activeLang || Object.keys(itemData)[0];
      const codeToCopy = itemData[activeLang];
      navigator.clipboard.writeText(codeToCopy).then(() => {
        const originalText = e.target.innerText;
        e.target.innerText = t("copied");
        setTimeout(() => (e.target.innerText = originalText), 1000);
      });
    } else if (e.target.classList.contains("edit")) {
      const card = e.target.closest(".snippet-card");
      const visibleLang = card.dataset.activeLang || Object.keys(itemData)[0];

      // 填充数据
      document.getElementById("editor-title").value = item.title;
      currentDraft = {
        title: item.title,
        data: JSON.parse(JSON.stringify(itemData)),
        activeLang: visibleLang,
      };
      // 手动填充避免 switchEditorLang 覆盖
      editorArea.value = currentDraft.data[visibleLang] || "";

      // UI 更新
      const cls = getLangClass(visibleLang);
      highlightPre.className = `${cls} editor-common`;

      editorContainer.classList.remove("closed");
      toggleEditorBtn.innerText = t("collapseBtn");

      editingIdx = realIdx;
      renderEditorTabs();
      syncEditor();

      document.getElementById("save-btn").innerText = t("update");
      document.getElementById("editor-title").focus();
      sidebar.classList.add("open");
    } else if (e.target.classList.contains("del")) {
      if (confirm(t("confirmDel"))) {
        data.snippets.splice(realIdx, 1);
        chrome.storage.local.set({ snippets: data.snippets }, render);
      }
    }
  });
};

// 保存按钮
document.getElementById("save-btn").onclick = () => {
  const title = document.getElementById("editor-title").value.trim();
  currentDraft.data[currentDraft.activeLang] = editorArea.value;

  if (!title) {
    alert(t("emptyTitle"));
    return;
  }
  if (!Object.values(currentDraft.data).some((c) => c.trim().length > 0)) {
    alert(t("emptyCode"));
    return;
  }

  chrome.storage.local.get({ snippets: [] }, (data) => {
    const newItem = { title, data: currentDraft.data };
    if (editingIdx !== null) data.snippets[editingIdx] = newItem;
    else data.snippets.push(newItem);

    chrome.storage.local.set({ snippets: data.snippets }, () => {
      // 重置并收起
      document.getElementById("editor-title").value = "";
      editorArea.value = "";
      currentDraft = { title: "", data: { Python: "" }, activeLang: "Python" };
      renderEditorTabs();
      syncEditor();
      render();

      editorContainer.classList.add("closed");
      toggleEditorBtn.innerText = t("addBtn");
      editingIdx = null;
      document.getElementById("save-btn").innerText = t("save");
    });
  });
};

// --- 5. 侧边栏与悬浮球交互 ---

// 悬浮球拖动
let isDraggingBtn = false,
  hasMovedBtn = false,
  btnOffsetY = 0;
toggleBtn.addEventListener("mousedown", (e) => {
  isDraggingBtn = true;
  hasMovedBtn = false;
  btnOffsetY = e.clientY - toggleBtn.getBoundingClientRect().top;
  toggleBtn.style.transition = "none";
  e.preventDefault();
});
document.addEventListener("mousemove", (e) => {
  if (!isDraggingBtn) return;
  hasMovedBtn = true;
  let newTop = e.clientY - btnOffsetY;
  const maxTop = window.innerHeight - toggleBtn.offsetHeight;
  if (newTop < 0) newTop = 0;
  if (newTop > maxTop) newTop = maxTop;
  toggleBtn.style.top = newTop + "px";
  toggleBtn.style.bottom = "auto";
});
document.addEventListener("mouseup", () => {
  if (isDraggingBtn) {
    isDraggingBtn = false;
    toggleBtn.style.transition = "left 0.3s";
  }
});
toggleBtn.onclick = (e) => {
    // 如果刚才进行了拖动操作，就不执行
    if (hasMovedBtn) return;

    // 打开侧边栏
    sidebar.classList.add('open');

    // === 新增：把自己隐藏起来 ===
    toggleBtn.classList.add('hidden');
};

// 侧边栏操作
// 侧边栏关闭按钮逻辑
document.getElementById("close-sidebar").onclick = () => {
    // 关闭侧边栏
    sidebar.classList.remove("open");
    // === 新增：把悬浮按钮显示出来 ===
    toggleBtn.classList.remove('hidden');
};
document.getElementById("theme-toggle").onclick = () => {
  const newTheme =
    sidebar.getAttribute("data-theme") === "light" ? "dark" : "light";
  sidebar.setAttribute("data-theme", newTheme);
  chrome.storage.local.set({ theme: newTheme });
};

// 侧边栏拉伸
let isResizing = false;
const handle = sidebar.querySelector(".resize-handle");
handle.onmousedown = () => {
  isResizing = true;
  document.body.style.cursor = "col-resize";
  sidebar.style.transition = "none";
};
document.onmousemove = (e) => {
  if (isResizing && e.clientX > 300 && e.clientX < window.innerWidth * 0.8)
    sidebar.style.width = e.clientX + "px";
};
document.onmouseup = () => {
  if (isResizing) {
    isResizing = false;
    document.body.style.cursor = "default";
    sidebar.style.transition = "left 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
    chrome.storage.local.set({ sidebarWidth: sidebar.style.width });
  }
};

// 启动
renderEditorTabs();
render();
