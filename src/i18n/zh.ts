import { registerLocale } from './index';

/**
 * Simplified Chinese translation strings for R‑Shell. Like the English
 * module, this file registers its messages with the i18n system on
 * import. Translators can add new entries to this object as the
 * application grows. To avoid breaking existing functionality, keys
 * without translations may simply be omitted; they will fall back to
 * English automatically.
 */

registerLocale('zh', {
  'welcome.getStarted': '快速开始',
  'welcome.createSession': '创建新会话或管理您保存的连接',
  'quickActions.newConnection': '新建连接',
  'quickActions.newConnectionDesc': '通过 SSH、SFTP、FTP 或 FTPS 连接',
  'quickActions.connectionManager': '连接管理器',
  'quickActions.connectionManagerDesc': '浏览和组织已保存的连接',
  'quickActions.preferences': '偏好设置',
  'quickActions.preferencesDesc': '终端主题、字体和布局',
});
