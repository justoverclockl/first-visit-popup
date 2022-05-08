import Modal from 'flarum/common/components/Modal';
import app from 'flarum/forum/app';
import DOMPurify from 'dompurify';

export default class CustomModal extends Modal {
  static isDismissible = true;

  oncreate(vnode) {
    super.oncreate(vnode);
    const modalContent = app.forum.attribute('justoverclock-first-visit-popup.modalContent');
    const modal = document.getElementById('fvp-modal');
    modal.innerHTML = DOMPurify.sanitize(modalContent, {
      USE_PROFILES: { html: true },
      FORCE_BODY: true,
      ALLOWED_ATTR: ['style', 'class', 'type', 'href', 'rel'],
      ALLOWED_TAGS: [
        'link',
        'figure',
        'table',
        'caption',
        'thead',
        'tr',
        'th',
        'tbody',
        'td',
      ],
    });
  }

  className() {
    return 'first-visit-popup';
  }

  title() {
    const modalTitle = app.forum.attribute('justoverclock-first-visit-popup.modalTitle') || 'My Custom Modal Title';
    return <p>{modalTitle}</p>;
  }

  content() {
    return <p id="fvp-modal"></p>;
  }
}
