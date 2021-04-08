'use strict';

const burgerMenu = document.querySelector('.navbar-burger-menu');
const burgerMenuHidden = document.querySelector('.navbar-burger-menu-block');
const cross = document.querySelector('.burger-cross');

cross.addEventListener('click', ()=> {
    burgerMenuHidden.style.right = '-300px';
    document.querySelector('body').style.overflow = '';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // код для мобильных устройств
      } else {
        document.querySelector('body').style.paddingRight = '0px';
    }
})


burgerMenu.addEventListener('click', () => {
    burgerMenuHidden.style.right = "0px";
    document.querySelector('body').style.overflow = 'hidden';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // код для мобильных устройств
      } else {
        document.querySelector('body').style.paddingRight = '16px';
    }
})

