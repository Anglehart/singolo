const IMAGES = document.getElementById('portf-images');
const MENU = document.getElementById('menu');
const PHONEV = document.getElementById('phone-content-v');
const PHONEH = document.getElementById('phone-content-h');
const CLOSE_BUTTON = document.getElementById('form-close');
const SUBJECT = document.getElementById('message-subject');
const PROJECT = document.getElementById('message-project');
const TAGS = document.getElementById('tags');
const PIC_TYPE = ['all','wdesign', 'gdesign', 'artwork'];
let vTrigger = true;
let hTrigger = true;

/*Добавление рамки к картинкам*/
IMAGES.addEventListener('click', (event) => {
  IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('image-active'));
  event.target.classList.add('image-active');
  IMAGES.classList.remove('image-active');
})
/*Активация элементов меню*/
MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('menu-active'));
  event.target.classList.add('menu-active');
  MENU.querySelectorAll('li').forEach(el => el.classList.remove('menu-active'));
})
/*Включиение и выключение вертикального айфона*/


document.getElementById('iphone-v').addEventListener('click', () => {
  if (PHONEV.classList.contains('hidden')){
    PHONEV.classList.remove('hidden');
  } else {
    PHONEV.classList.add('hidden');
  }
})
/*Включиение и выключение горизонтального айфона*/
document.getElementById('iphone-h').addEventListener('click', () => {
  if (PHONEH.classList.contains('hidden')){
    PHONEH.classList.remove('hidden');
  } else {
    PHONEH.classList.add('hidden');
  }
})
/*Всплывающее сообщение формы*/
function formMessage(){
  if (document.getElementById('form-subject').value == ''){
    SUBJECT.innerHTML = 'Без темы'
  } else {
    SUBJECT.innerHTML = 'Тема: ' + document.getElementById('form-subject').value;
  }
  if (document.getElementById('form-project').value == ''){
    PROJECT.innerHTML = 'Без описания'
  } else {
    PROJECT.innerHTML = 'Описание: ' + document.getElementById('form-project').value;
  }

  document.getElementById('message-block').classList.remove('disable');
  let mesWidth = (document.documentElement.clientWidth - document.getElementById("message").clientWidth)/2;
  let mesHeight = (document.documentElement.clientHeight - document.getElementById("message").clientHeight)/2;
  document.getElementById('message').style.left = mesWidth + "px";
  document.getElementById('message').style.top = mesHeight + "px";

  CLOSE_BUTTON.addEventListener('click', () => {
    SUBJECT.innerHTML = '';
    PROJECT.innerHTML = '';
    document.getElementById('message-block').classList.add('disable');
    document.getElementById('feedback-form').reset();
  })
}

function mixPicture(){
  /*Активация тэгов картинок*/
  Array.from(TAGS.getElementsByClassName('tag')).forEach(el => el.classList.remove('tag-active'));
  event.target.classList.add('tag-active');
  /*Перемешивание картинок*/
  Array.from(IMAGES.getElementsByClassName('portf-image')).forEach(el => el.style.order = getRandom(1, 12));
  for (let i=0; i<PIC_TYPE.length; i++){
    if (event.target.id == PIC_TYPE[i]){
      document.querySelectorAll('[data-type=' + PIC_TYPE[i] + ']').forEach(el => el.style.order = '0');
    }
  }
}
/*
В ТЗ написано, что картинка не должна оставаться на своем месте, поэтому добавляю рандомизатор порядка картинок.
Можно вместо вызова функции просто написать "1" и будет более логично и правильно, не не совсем по ТЗ.
*/
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
