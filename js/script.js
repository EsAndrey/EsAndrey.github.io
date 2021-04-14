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


const modalApplication = document.querySelector('.modal_application_faded');
const modalApplicationTrigger = document.querySelectorAll('.request-link-main, .request-link-header');
const modalApplicationClose = document.querySelector('.modal_application_close');

modalApplicationTrigger.forEach(trigger => {
  trigger.addEventListener('click', () => {
    modalApplication.style.display = "block";
    document.body.style.overflow = "hidden";
  })
})

modalApplicationClose.addEventListener('click', (e) => {
  modalApplication.style.display = "none";
  document.body.style.overflow = "";
})


modalApplication.addEventListener('click', (e) => {
  if(e.target === modalApplication) {
    modalApplication.style.display = "none";
    document.body.style.overflow = "";
  }
})

$(document).ready(function(){
  $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
      e.preventDefault();
      var t = 1000;
      var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
      $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
  });
});


let calculateDown = document.querySelector('#calculate-down');
let menuItems = document.querySelectorAll('.navbar-item');
let calculateDownBtn = document.querySelector('.cost-link');
let company = document.querySelector('.company');
let employee = document.querySelector('.employee');
let service = document.querySelector('.service');
let contacts = document.querySelector('.contacts');
let menuItemsSidebar = document.querySelectorAll('.navbar-item-burger');

calculateDownBtn.addEventListener('click', () => {
  calculateDown.scrollIntoView({behavior: "smooth"});
})

menuItems[0].addEventListener('click', function() {
  company.scrollIntoView({behavior: "smooth"});
})

menuItems[1].addEventListener('click', function() {
  employee.scrollIntoView({behavior: "smooth"});
})

menuItems[2].addEventListener('click', function() {
  calculateDown.scrollIntoView({behavior: "smooth"});
})

menuItems[3].addEventListener('click', function() {
  service.scrollIntoView({behavior: "smooth"});
})

menuItems[4].addEventListener('click', function() {
  contacts.scrollIntoView({behavior: "smooth"});
})


menuItemsSidebar[0].addEventListener('click', function() {
  company.scrollIntoView({behavior: "smooth"});
  burgerMenuHidden.style.right = '-300px';
  document.querySelector('body').style.overflow = '';
})

menuItemsSidebar[1].addEventListener('click', function() {
  employee.scrollIntoView({behavior: "smooth"});
  burgerMenuHidden.style.right = '-300px';
  document.querySelector('body').style.overflow = '';
})

menuItemsSidebar[2].addEventListener('click', function() {
  calculateDown.scrollIntoView({behavior: "smooth"});
  burgerMenuHidden.style.right = '-300px';
  document.querySelector('body').style.overflow = '';
})

menuItemsSidebar[3].addEventListener('click', function() {
  service.scrollIntoView({behavior: "smooth"});
  burgerMenuHidden.style.right = '-300px';
  document.querySelector('body').style.overflow = '';
})

menuItemsSidebar[4].addEventListener('click', function() {
  contacts.scrollIntoView({behavior: "smooth"});
  burgerMenuHidden.style.right = '-300px';
  document.querySelector('body').style.overflow = '';
})