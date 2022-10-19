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

// Dynamic Data for the speaker section

const feature = document.querySelector('.features-container');
let render = '';

const featureSpeakes = [
  {
    name: 'Mark Hutson',
    title: 'CEO of CodePlanet',
    description: ' We have the best instructors in the world. They are experts in their fields and are passionate about teaching.',
    image: 'img/speakers/pexels-justin-shaifer-1222271.jpg',
    class: 'first',
  },
  {
    name: 'Frank Deilo',
    title: 'Tech Lead at CodePlanet',
    description: ' You can learn at your own pace. You can also learn at your own time. You can learn at your own place.',
    image: 'img/speakers/pexels-pixabay-220453.jpg',
    class: 'first',
  },
  {
    name: 'Jennifer Book',
    title: 'Designer at CodePlanet',
    description: 'You can learn from anywhere. You can learn from anywhere. You can learn from anywhere.',
    image: 'img/speakers/pexels-andrea-piacquadio-774909.jpg',
    class: 'last',
  },
  {
    name: 'Captain Price',
    title: 'Developer at CodePlanet',
    description: 'You can learn from anywhere. You can learn from anywhere. You can learn from anywhere.',
    image: 'img/speakers/pexels-stefan-stefancik-91227.jpg',
    class: 'last',
  },
  {
    name: 'Markswell Wood',
    title: 'Developer at CodePlanet',
    description: 'You can learn from anywhere. You can learn from anywhere. You can learn from anywhere.',
    image: 'img/speakers/pexels-simon-robben-614810.jpg',
    class: 'last',
  },
  {
    name: 'Maywell June',
    title: 'Senior Developer at CodePlanet',
    description: 'You can learn from anywhere. You can learn from anywhere. You can learn from anywhere.',
    image: '/img/speakers/pexels-andrea-piacquadio-733872.jpg',
    class: 'last',
  },
];

featureSpeakes.forEach((speake) => {
  render += `
    <div class="feature__item ${speake.class}">
      <div class="feature__item__img">
        <img src="${speake.image}" alt="speake">
      </div>
      <div class="feature__item__content">
        <h3>${speake.name}</h3>
        <p class="title">${speake.title}</p>
        <p class="text">${speake.description}</p>
      </div>
    </div>
  `;
  feature.innerHTML = render;
});

const viewMore = document.querySelector('.view__more');
const more = `${"MORE <i class='bx bx-chevron-down'></i>"}`;
const less = `${"LESS <i class='bx bx-chevron-up'></i>"}`;
const last = document.querySelectorAll('.last');

viewMore.addEventListener('click', () => {
  viewMore.classList.toggle('active');
  last.forEach((item) => {
    item.classList.toggle('active');
  });
  if (viewMore.classList.contains('active')) {
    viewMore.innerHTML = less;
  } else {
    viewMore.innerHTML = more;
  }
});
