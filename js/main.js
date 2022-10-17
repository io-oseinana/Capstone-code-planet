const btn = document.querySelector('.button');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
  menu.classList.toggle('active');
  nav.classList.toggle('active');
  btn.classList.toggle('active');
  logo.classList.toggle('x');
  body.classList.toggle('active');
});