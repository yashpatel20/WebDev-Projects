import renderMenu from './menu.js';
import renderRecommended from './recommended.js';
import renderContact from './contact.js';

const renderHook = document.querySelector('.render-hook');

const menuBtn = document.querySelector('#Menu-tab');
const recommendedBtn = document.querySelector('#Recommended-tab');
const contactBtn = document.querySelector('#Contact-tab');

menuBtn.addEventListener('click', renderMenu.bind(this, renderHook));
recommendedBtn.addEventListener('click', renderRecommended.bind(this, renderHook));
contactBtn.addEventListener('click', renderContact.bind(this, renderHook));
