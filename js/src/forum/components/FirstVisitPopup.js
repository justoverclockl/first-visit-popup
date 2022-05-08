import Modal from 'flarum/common/components/Modal';
import app from 'flarum/forum/app';

export default class CustomModal extends Modal {
  static isDismissible = true;

  oncreate(vnode) {
    super.oncreate(vnode);
    const modalContent = app.forum.attribute('justoverclock-first-visit-popup.modalContent');
    const modal = document.getElementById('fvp-modal');
    modal.innerHTML = modalContent
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
