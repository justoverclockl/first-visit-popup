import app from 'flarum/admin/app';
import SettingsPage from './components/SettingsPage';

app.initializers.add('justoverclock/first-visit-popup', () => {
  app.extensionData.for('justoverclock-first-visit-popup').registerPage(SettingsPage);
});
