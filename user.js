// ==UserScript==
// @name         WhatsApp Web dark toggle
// @namespace    https://github.com/teohhanhui/whatsapp-web-dark-toggle
// @version      0.2
// @author       Teoh Han Hui <teohhanhui@gmail.com>
// @description  Force toggle WIP dark theme on WhatsApp Web
// @updateURL    https://raw.githubusercontent.com/teohhanhui/whatsapp-web-dark-toggle/master/user.js
// @downloadURL  https://raw.githubusercontent.com/teohhanhui/whatsapp-web-dark-toggle/master/user.js
// @supportURL   https://github.com/teohhanhui/whatsapp-web-dark-toggle/issues
// @match        https://web.whatsapp.com/*
// @run-at       document-body
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  document.querySelector('html').classList.add('dark');
  document.querySelector('body').classList.add('dark');
})();
