(()=>{var t={n:o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return t.d(e,{a:e}),e},d:(o,e)=>{for(var r in e)t.o(e,r)&&!t.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:e[r]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o);const e=flarum.core.compat["forum/app"];var r=t.n(e);const n=flarum.core.compat["common/extend"],i=flarum.core.compat["forum/components/HeaderPrimary"];var u=t.n(i);function c(t,o){return c=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},c(t,o)}const p=flarum.core.compat["common/components/Modal"];var a=function(t){var o,e;function n(){return t.apply(this,arguments)||this}e=t,(o=n).prototype=Object.create(e.prototype),o.prototype.constructor=o,c(o,e);var i=n.prototype;return i.oncreate=function(o){t.prototype.oncreate.call(this,o);var e=r().forum.attribute("justoverclock-first-visit-popup.modalContent");document.getElementById("fvp-modal").innerHTML=e},i.className=function(){return"first-visit-popup"},i.title=function(){var t=r().forum.attribute("justoverclock-first-visit-popup.modalTitle")||"My Custom Modal Title";return m("p",null,t)},i.content=function(){return m("p",{id:"fvp-modal"})},n}(t.n(p)());a.isDismissible=!0,r().initializers.add("justoverclock/first-visit-popup",(function(){(0,n.extend)(u().prototype,"oncreate",(function(){var t=document.cookie.split(";").some((function(t){return t.trim().startsWith("firstVisitPopup=")}));t||setTimeout((function(){r().modal.show(a),!t&&(document.cookie="firstVisitPopup=visited; Secure")}),2e3)}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map