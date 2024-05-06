(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>l});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"body {\n    background-color: rgb(174, 174, 174);\n}\n\n#enemy-board, #my-board {\n    margin: 0px 30px 20px 30px;\n}\n\n#restart-button {\n    background-color: rgb(206, 206, 206);\n    font-size: 30px;\n    padding: 5px;\n    border: 2px solid goldenrod;\n}\n#home-page {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#commentary {\n    max-height: 150px;\n    overflow-y: auto;\n    border: 2px solid #0609ce;  /* Optional: Just for visibility */\n    padding: 20px;\n\n}\n\n#controls {\n    text-align: center;\n    font-size: 20px;\n    gap: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.half-board {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#title {\n    font-size: 35px;\n    text-align: center;\n}\n\n#boards {\n    display: flex;\n    flex-direction: row;\n    font-size: 25px;\n}\n\n.character {\n    font-weight: 800;\n    font-size: 30px;\n}\n\n.row {\n    display: flex;\n}\n\n#special-row {\n    margin-left: 40px;\n}\n\n.row-marker {\n    margin-right: 20px;\n}\n\n.col-marker {\n    margin-bottom: 10px;\n    width: 36px;\n    height: 30px;\n    text-align: center;\n}\n\n\n.cell {\n    width: 35px;\n    height: 35px;\n    border: 1px solid black;\n}\n\n.empty {\n    background-color: rgb(72, 139, 255);\n}\n\n.winner {\n    background-color: rgb(72, 255, 252);\n}\n\n.loser {\n    background-color: rgb(150, 150, 150);\n}\n\n.boat {\n    background-color: rgb(140, 140, 140);\n}\n\n.boat-and-hit {\n    background-color: rgb(171, 0, 0);\n}\n\n.empty-and-hit {\n    background-color: rgb(40, 41, 121);\n}",""]);const l=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],l=0;l<n.length;l++){var c=n[l],d=r.base?c[0]+r.base:c[0],s=a[d]||0,u="".concat(d," ").concat(s);a[d]=s+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=l,e.splice(l,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var l=t(a[i]);e[l].references--}for(var c=r(n,o),d=0;d<a.length;d++){var s=t(a[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),l=t(56),c=t.n(l),d=t(540),s=t.n(d),u=t(113),p=t.n(u),f=t(365),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=s(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;const h=-1e3,g=-2e3,b=10,v=10;function x(n,e){let t=function(){let n=[],e=[];for(let n=0;n<b;n++){let n=[];for(let e=0;e<v;e++)n.push(h);e.push(n)}const t=()=>{let n=[];for(let t=0;t<e.length;t++){n[t]=[];for(let r=0;r<e[t].length;r++)n[t][r]=e[t][r]}return n};return{placeShip:function(t,r,o,a){if(t<0||r<0||t>=b||r>=v)return!1;let i=t,l=r;return a?l+=o.length-1:i+=o.length-1,!(i>=b||l>=v||!function(n,t,r,o,a){if(a){for(let r=t;r<o+1;r++)if(e[n][r]!==h)return!1}else for(let o=n;o<r+1;o++)if(e[o][t]!==h)return!1;return!0}(t,r,i,l,a)||(n.push(o),function(n,t,r,o,a,i){if(a)for(let r=t;r<o+1;r++)e[n][r]=i;else for(let o=n;o<r+1;o++)e[o][t]=i}(t,r,i,l,a,n.length),0))},receiveAttack:function(t,r){if(t<0||r<0||t>=b||r>=v)return!1;let o=e[t][r];return!(o===g||o>=-100&&o<0||(o===h&&(e[t][r]=g),o>0&&(e[t][r]*=-1,n[o-1].hit()),0))},getNumShips:()=>n.length,getAllSunk:function(){return 0!==n.length&&n.every((n=>n.isSunk()))},getBoard:t,getPublicBoard:function(){let n=t();for(let e=0;e<n.length;e++)for(let t=0;t<n[e].length;t++)n[e][t]>0&&(n[e][t]=h);return n}}}(),r=[];function o(){return[Math.floor(Math.random()*b),Math.floor(Math.random()*v)]}function a(n,e){return e.some((e=>e[0]===n[0]&&e[1]===n[1]))}return{computer:e,name:n,board:t,makeAttack:function(){let n=o();for(;a(n,r);)n=o();return r.push(n),n},declareAttack:function(e,t){return`${n} launches attack on row ${e}, col ${t}!`},getRandomCoordinate:o}}function y(n){if(n<1)throw new Error("Invalid ship length. Length must be at least 1.");let e=0;return{length:n,getHits:()=>e,hit:function(){e+=1},isSunk:function(){return e>=n}}}function k(n){let e=document.getElementById("commentary"),t=document.createElement("p");t.innerText=n,e.appendChild(t),e.scrollTop=e.scrollHeight}function w(n,e,t,r){if(r.board.receiveAttack(n,e),k(t.declareAttack(n,e)),A(r.board,"enemy-board",t,r),r.board.getAllSunk())return void k(t.name+" wins!");let o=r.makeAttack();t.board.receiveAttack(o[0],o[1]),k(r.declareAttack(o[0],o[1])),A(t.board,"my-board",t,r),t.board.getAllSunk()&&k(r.name+" wins!")}function A(n,e,t,r){let o=document.getElementById(e);o.innerHTML="";let a=n.getBoard(),i="enemy-board"===e;i&&(a=n.getPublicBoard());let l=t.board.getAllSunk()||r.board.getAllSunk(),c=document.createElement("div");c.classList.add("row"),c.id="special-row";for(let n=0;n<a[0].length;n++){let e=document.createElement("div");e.classList.add("col-marker"),e.innerText=n,c.appendChild(e)}o.appendChild(c);for(let n=0;n<a.length;n++){let e=document.createElement("div");e.className="row";let c=document.createElement("div");c.classList.add("row-marker"),c.innerText=n,e.appendChild(c);for(let o=0;o<a[n].length;o++){let c=document.createElement("div"),d=a[n][o];c.classList.add("cell"),l?c.classList.add("loser"):d===g?c.classList.add("empty-and-hit"):d<0&&d>=-100?c.classList.add("boat-and-hit"):d>0?c.classList.add("boat"):(c.classList.add("empty"),i&&!l&&c.addEventListener("click",(function(){w(n,o,t,r)}))),e.appendChild(c)}o.appendChild(e)}}function C(n){let e=[5,4,3,3,2];for(let t=0;t<e.length;t++){let r=y(e[t]),o=n.getRandomCoordinate(),a=Math.floor(2*Math.random())>=1;for(;!n.board.placeShip(o[0],o[1],r,a);)o=n.getRandomCoordinate(),a=Math.random()>=.5}}function E(){let n=x("Human",!1),e=x("Computer",!0);C(n),C(e),A(n.board,"my-board",n,e),A(e.board,"enemy-board",n,e)}document.getElementById("restart-button").addEventListener("click",(()=>{E()})),E()})()})();