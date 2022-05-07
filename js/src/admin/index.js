import app from 'flarum/admin/app';

app.initializers.add('justoverclock/first-visit-popup', () => {
  console.log('[justoverclock/first-visit-popup] Hello, admin!');
});
