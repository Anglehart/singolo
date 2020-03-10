const IMAGES = document.getElementById('portf-images');
const MENU = document.getElementById('menu');

IMAGES.addEventListener('click', (event) => {
  IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('image-active'));
  event.target.classList.add('image-active');
})

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('menu-active'));
  event.target.classList.add('menu-active');
})
