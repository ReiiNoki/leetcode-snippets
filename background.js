// --- background.js ---
import { defaultSnippets } from './templates.js';

chrome.runtime.onInstalled.addListener((details) => {
    // 监听安装和更新事件，写入模板
    if (details.reason === 'install' || details.reason === 'update') {
        chrome.storage.local.get({ snippets: [] }, (result) => {
            // 只有当本地没有数据时，才写入默认模板，防止覆盖用户数据
            // 如果你想强制覆盖，去掉这个 if 判断
            if (result.snippets.length === 0) {
                chrome.storage.local.set({ snippets: defaultSnippets }, () => {
                    console.log('LC Snippets: 默认模板已成功初始化');
                });
            }
        });
    }
});