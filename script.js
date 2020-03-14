const IMAGES = document.getElementById('portf-images');
const MENU = document.getElementById('menu');
const PHONEV = document.getElementById('phone-content-v');
const PHONEH = document.getElementById('phone-content-h');
let vTrigger = true;
let hTrigger = true;

IMAGES.addEventListener('click', (event) => {
  IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('image-active'));
  event.target.classList.add('image-active');
  IMAGES.classList.remove('image-active');
})

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('menu-active'));
  event.target.classList.add('menu-active');
  MENU.querySelectorAll('li').forEach(el => el.classList.remove('menu-active'));
})

document.getElementById('iphone-v').addEventListener('click', (event) => {
  if (vTrigger == true){
    PHONEV.classList.add('hidden');
    vTrigger = false;
  } else {
    PHONEV.classList.remove('hidden');
    vTrigger = true;
  }
})

document.getElementById('iphone-h').addEventListener('click', (event) => {
  if (hTrigger == true){
    PHONEH.classList.add('hidden');
    hTrigger = false;
  } else {
    PHONEH.classList.remove('hidden');
    hTrigger = true;
  }
})
