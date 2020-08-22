let 
  newsSwitch1 = document.querySelector('.news__point1');
  newsSwitch2 = document.querySelector('.news__point2');
  newsSwitch3 = document.querySelector('.news__point3');
  newsSwitches = document.querySelector('.news__wrapper')
 

  newsSwitch1.onclick = function () {
   newsSwitch1.classList.add('news__point-active');
   newsSwitch2.classList.remove('news__point-active');
   newsSwitch3.classList.remove('news__point-active');
    newsSwitches.style = 'transform: translateY(-0%);'
}

newsSwitch2.onclick = function () {
   newsSwitch2.classList.add('news__point-active');
   newsSwitch3.classList.remove('news__point-active');
   newsSwitch1.classList.remove('news__point-active');
   newsSwitches.style = 'transform: translateY(-100%);'
}
newsSwitch3.onclick = function () {
   newsSwitch3.classList.add('news__point-active');
   newsSwitch2.classList.remove('news__point-active');
   newsSwitch1.classList.remove('news__point-active');
   newsSwitches.style = 'transform: translateY(-200%);';
}
