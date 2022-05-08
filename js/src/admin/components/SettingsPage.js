import ExtensionPage from 'flarum/components/ExtensionPage';
import Button from 'flarum/common/components/Button';
import app from 'flarum/admin/app';

export default class FirstVisitPopup extends ExtensionPage {
  content() {
    return (
      <div className="first-visit-popup-container">
        <div className="fvp-form">
          <label className="fpv-label">{app.translator.trans('justoverclock-first-visit-popup.admin.modalTitle')}</label>
          <input
            className="FormControl fvp"
            type="text"
            id="fvp-title"
            placeholder="My Modal"
            name="fvp-title"
            bidi={this.setting('justoverclock-first-visit-popup.modalTitle')}
          />
          <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary fvp">
            <i className="fas fa-save fvp" />
          </Button>
        </div>

        <div className="fvp-form">
          <label className="fpv-label">{app.translator.trans('justoverclock-first-visit-popup.admin.CookieExp')}</label>
          <input
            className="FormControl fvp-cookie"
            type="number"
            id="fvp-title"
            placeholder="e.g. 5"
            name="fvp-title"
            bidi={this.setting('justoverclock-first-visit-popup.exptime')}
          />
          <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary fvp">
            <i className="fas fa-save fvp" />
          </Button>
        </div>

        <div className="fvp-textarea">
          <p className="fpv-labeltextarea">{app.translator.trans('justoverclock-first-visit-popup.admin.modalContent')}</p>
          <textarea
            className="FormControl fvptextarea"
            id="fvp-content"
            placeholder="<style></style><div></div>"
            name="fvp-title"
            bidi={this.setting('justoverclock-first-visit-popup.modalContent')}
          />
          <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary fvptext">
            <i className="fas fa-save fvp" />
          </Button>
        </div>
      </div>
    );
  }
}
