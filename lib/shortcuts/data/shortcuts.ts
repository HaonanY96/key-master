// 系统快捷键导入
import { shortcuts as windowsSystemShortcuts } from './windows/system';
// import { shortcuts as macSystemShortcuts } from './mac/system';

// // 软件快捷键导入
// import { shortcuts as windowsVSCodeShortcuts } from './windows/vscode';
// import { shortcuts as macVSCodeShortcuts } from './mac/vscode';
// import { shortcuts as windowsChromeShortcuts } from './windows/chrome';
// import { shortcuts as macChromeShortcuts } from './mac/chrome';

import type { Shortcut } from '../types/common';

// 按平台和软件分类导出
export const shortcutsByPlatform = {
  windows: {
    system: windowsSystemShortcuts,
    // software: {
    //   vscode: windowsVSCodeShortcuts,
    //   chrome: windowsChromeShortcuts,
    // }
  },
//   mac: {
//     system: macSystemShortcuts,
//     software: {
//       vscode: macVSCodeShortcuts,
//       chrome: macChromeShortcuts,
//     }
//   }
};

// 合并所有快捷键
export const shortcuts: Shortcut[] = [
  // 系统快捷键
  ...windowsSystemShortcuts,
//   ...macSystemShortcuts,
//   // 软件快捷键
//   ...windowsVSCodeShortcuts,
//   ...macVSCodeShortcuts,
//   ...windowsChromeShortcuts,
//   ...macChromeShortcuts,
]; 