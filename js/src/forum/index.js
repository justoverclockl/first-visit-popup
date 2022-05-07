import app from 'flarum/forum/app';

app.initializers.add('justoverclock/first-visit-popup', () => {
  console.log('[justoverclock/first-visit-popup] Hello, forum!');
});
