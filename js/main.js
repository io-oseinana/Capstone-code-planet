const btn = document.querySelector('.button');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
let logo = document.querySelector('.logo');

btn.addEventListener('click', () => {
  menu.classList.toggle('active');
  nav.classList.toggle('active');
  btn.classList.toggle('active');
  logo.classList.toggle('x');
});