(()=>{var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const o=flarum.core.compat["forum/app"];var r=t.n(o);const n=flarum.core.compat["common/extend"],i=flarum.core.compat["forum/components/HeaderPrimary"];var u=t.n(i);function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}const p=flarum.core.compat["common/components/Modal"];var a=function(t){var e,o;function n(){return t.apply(this,arguments)||this}o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,c(e,o);var i=n.prototype;return i.oncreate=function(e){t.prototype.oncreate.call(this,e);var o=r().forum.attribute("justoverclock-first-visit-popup.modalContent");document.getElementById("fvp-modal").innerHTML=o},i.className=function(){return"first-visit-popup"},i.title=function(){var t=r().forum.attribute("justoverclock-first-visit-popup.modalTitle")||"My Custom Modal Title";return m("p",null,t)},i.content=function(){return m("p",{id:"fvp-modal"})},n}(t.n(p)());a.isDismissible=!0,r().initializers.add("justoverclock/first-visit-popup",(function(){(0,n.extend)(u().prototype,"oncreate",(function(){var t=r().forum.attribute("justoverclock-first-visit-popup.exptime"),e=new Date((new Date).getTime()+60*t*60*1e3),o=document.cookie.split(";").some((function(t){return t.trim().startsWith("firstVisitPopup=")}));o||setTimeout((function(){r().modal.show(a),!o&&(document.cookie="firstVisitPopup=visited; expires="+e+"; Secure")}),2e3)}))}))})(),module.exports=e})();
//# sourceMappingURL=forum.js.map