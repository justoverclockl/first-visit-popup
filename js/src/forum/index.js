import app from 'flarum/forum/app';
import {extend} from 'flarum/common/extend';
import HeaderPrimary from "flarum/forum/components/HeaderPrimary";
import FirstVisitPopup from './components/FirstVisitPopup'

app.initializers.add('justoverclock/first-visit-popup', () => {
  extend(HeaderPrimary.prototype, 'oncreate', function () {

    const cookieExist = document.cookie.split(';').some((item) => item.trim().startsWith('firstVisitPopup='))

    if (!cookieExist) {
      setTimeout(() => {
        app.modal.show(FirstVisitPopup)
        !cookieExist ? document.cookie = "firstVisitPopup=visited; Secure" : false
      }, 2000)
    }

  })
});
