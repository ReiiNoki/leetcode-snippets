<p align="center">
  <img src="icon.png" width="128" height="128" alt="Nano Banana Logo">
</p>

# LeetCode Snippets

[English](./README.EN.md) | 中文

本项目是一个Chrome/Edge浏览器插件，用于方便LeetCode用户在网站编辑器上编写代码。

## 功能

**⚡️ 算法模板**：内置灵神（灵茶山艾府）精选的高频算法模板（数位DP，并查集等）

**🌍 全语言支持**: 支持 **C++, Java, Python, Go** 四种主流刷题语言，一键切换。

**🌗 完美适配主题**:  切换深色/浅色模式，搭配LeetCode本站主题。

**🛠️ 内置编辑器**:

* 支持代码高亮 (PrismJS)。
* 添加/编辑自己的模板
* 支持多语言版本管理与重命名。

## 📚 内置模板列表

本项目内置了基于[@灵茶山艾府](https://githhub.com/EndlessCheng) 在力扣讨论区分享的题单和算法模板：

链接：[分享｜如何科学刷题？](https://leetcode.cn/circle/discuss/RvFUtj/)

* **数据结构**: 线段树 (懒标记)、树状数组、并查集、单调栈、字典树 (Trie)、单调队列。
* **字符串**: KMP、Z函数 (扩展KMP)。
* **图论**: BFS、DFS、Dijkstra (堆优化)、Floyd、拓扑排序、Kruskal、二分图染色。
* **数学**: GCD/LCM、埃氏筛、质因数分解、线性基（最大异或和）。
* **动态规划**: 数位DP、换根DP、子集和DP。
* **基础算法**: 二分查找、滑动窗口、二维前缀和。
* **计算几何**: 凸包 (Andrew 算法)。

以上等算法模板。

## 安装

现已上架Chrome Web Store，点击下方按钮即可安装。

[![chrome-store-badge][chrome-store-badge]][chrome-store-url]

[chrome-store-badge]: ./docs/assets/trynow.png
[chrome-store-url]: https://chromewebstore.google.com/detail/leetcode-snippets/bdjeonofakojbmmeinpnkppdfadigkck

## 版本更新日志

### v1.1.0

* ✨ 新增模板：**线性基（最大异或和）**、**二维前缀和**、**凸包 (Andrew 算法)**
* ✨ 补全「质因数分解」模板的 C++ / Go 版本
* ✨ 新增「质因数分解（预处理最小质因子）」模板

### v1.0.1

* 🐛 修复侧边栏打开时切换按钮仍然显示的问题
* 📝 添加 README 与版本更新日志

### v1.0.0

* 🎉 初始版本发布
* ⚡ 内置灵神精选高频算法模板（数位DP、并查集、线段树、Dijkstra 等）
* 🌍 支持 C++、Java、Python、Go 四种语言，一键切换
* 🌗 深色/浅色主题适配 LeetCode 本站
* 🛠️ 内置代码编辑器，支持 PrismJS 高亮
* ➕ 支持用户自定义添加/编辑/删除模板
* 📋 一键复制代码到剪贴板
* 🔄 中/英文界面切换

---

## 致谢

最需要感谢的还是灵神，他在LeetCode的讨论区分享的题单和算法模板，让我产生了做这个项目的想法。本项目使用的模板都出自灵神的分享，我也在B站上私聊获得他的同意，非常感谢。

另外，灵神每周还坚持在B站直播讲解周赛的题目，我在他的视频中学到了很多。希望看到和使用这个项目的朋友也能多多去B站关注灵神 [@灵茶山艾府](https://space.bilibili.com/206214)。

第二个需要感谢的是Gemini AI Studio，本项目大部分的代码都是Gemini帮我写的，感谢Gemini使我的想法很快地实现出来。
