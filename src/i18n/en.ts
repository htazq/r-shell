import { registerLocale } from './index';

/**
 * English translation strings for R‑Shell. This file exports nothing
 * directly; instead it registers its contents with the i18n system on
 * import. When new messages are added to the application, please add
 * corresponding entries here to provide a default English translation.
 */

registerLocale('en', {
  // Example entries (feel free to extend)
  'welcome.getStarted': 'Get Started',
  'welcome.createSession': 'Create a new session or manage your saved connections',
  'quickActions.newConnection': 'New Connection',
  'quickActions.newConnectionDesc': 'Connect via SSH, SFTP, FTP, or FTPS',
  'quickActions.connectionManager': 'Connection Manager',
  'quickActions.connectionManagerDesc': 'Browse & organize saved connections',
  'quickActions.preferences': 'Preferences',
  'quickActions.preferencesDesc': 'Terminal themes, fonts & layout',
});
