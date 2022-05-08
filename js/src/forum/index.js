import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';
import FirstVisitPopup from './components/FirstVisitPopup';

app.initializers.add('justoverclock/first-visit-popup', () => {
  extend(HeaderPrimary.prototype, 'oncreate', function () {
    const expirationMinutes = app.forum.attribute('justoverclock-first-visit-popup.exptime');
    const expirationTime = new Date(new Date().getTime() + expirationMinutes * 60 * 60 * 1000);
    const cookieExist = document.cookie.split(';').some((item) => item.trim().startsWith('firstVisitPopup='));

    if (!cookieExist) {
      setTimeout(() => {
        app.modal.show(FirstVisitPopup);
        !cookieExist ? (document.cookie = 'firstVisitPopup=visited; expires=' + expirationTime + '; Secure') : false;
      }, 2000);
    }
  });
});
