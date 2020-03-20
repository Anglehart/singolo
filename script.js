const IMAGES = document.getElementById('portf-images');
const MENU = document.getElementById('menu');
const PHONEV = document.getElementById('phone-content-v');
const PHONEH = document.getElementById('phone-content-h');
const CLOSE_BUTTON = document.getElementById('form-close');
const SUBJECT = document.getElementById('message-subject');
const PROJECT = document.getElementById('message-project');
const TAGS = document.getElementById('tags');
const PIC_TYPE = ['all','wdesign', 'gdesign', 'artwork'];
const RARROW = document.getElementById('arrow-right');
const LARROW = document.getElementById('arrow-left');

/*Добавление рамки к картинкам*/
IMAGES.querySelectorAll('img').forEach(el => el.addEventListener('click', () => {
  IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('image-active'));
  event.target.classList.add('image-active');
}))

/*Активация элементов меню при прокрутке*/
document.addEventListener('scroll', onScroll);

function onScroll(){
  const curPos = window.scrollY + 95;
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('#menu a');

  sections.forEach((el) => {
    if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
      links.forEach((item) => {
        item.classList.remove('menu-active');
        if (el.getAttribute('id') === item.getAttribute('href').substring(1) + '-sec' ){
          item.classList.add('menu-active');
        }
      });
    }
  });
}

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
  let allImages = shuffle(Array.from(IMAGES.children));
  Array.from(IMAGES.children).forEach((item) => {
    item.remove();
  });
  allImages.forEach((item) => {
    IMAGES.append(item);
  });
}

/*Функция для рандомизации порядка картинок*/
function shuffle(arr) {
  var j, temp;
  for(var i = arr.length - 1; i > 0; i--){
    j = Math.floor(Math.random()*(i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

/*Движениe слайдеров*/
RARROW.addEventListener('click', () => {
  let hidden = document.getElementsByClassName('hidden-slide')[0].id;
  let active = document.getElementsByClassName('active-slide')[0].id;
  if (active == 'first-slide'){
    document.getElementById('home-sec').style.cssText = 'border-color: #276ce1; background-color: #648bf0';
  } else {
    document.getElementById('home-sec').style.cssText = 'border-color: 0; background-color: 0';
  }
  document.getElementById(active).classList.add('hidden-right');
  document.getElementById(active).classList.remove('active-slide');
  setTimeout(function(){
    document.getElementById(active).classList.add('hidden-slide');
    document.getElementById(active).classList.remove('hidden-right');
    document.getElementById('arrow-right').style.pointerEvents='';},
  400);
  document.getElementById(hidden).classList.add('hidden-left');
  document.getElementById(hidden).classList.remove('hidden-slide');
  setTimeout(function(){
    document.getElementById(hidden).classList.remove('hidden-left');
    document.getElementById(hidden).classList.add('active-slide')},
  100);
})

LARROW.addEventListener('click', () => {
  let hidden = document.getElementsByClassName('hidden-slide')[0].id;
  let active = document.getElementsByClassName('active-slide')[0].id;
  if (active == 'first-slide'){
    document.getElementById('home-sec').style.cssText = 'border-color: #276ce1; background-color: #648bf0';
  } else {
    document.getElementById('home-sec').style.cssText = 'border-color: 0; background-color: 0';
  }
  document.getElementById(active).classList.add('hidden-left');
  document.getElementById(active).classList.remove('active-slide');
  setTimeout(function(){
    document.getElementById(active).classList.add('hidden-slide');
    document.getElementById(active).classList.remove('hidden-left');
    document.getElementById('arrow-left').style.pointerEvents='';},
  400);
  document.getElementById(hidden).classList.add('hidden-right');
  document.getElementById(hidden).classList.remove('hidden-slide');
  setTimeout(function(){
    document.getElementById(hidden).classList.remove('hidden-right');
    document.getElementById(hidden).classList.add('active-slide')},
  100);
})
