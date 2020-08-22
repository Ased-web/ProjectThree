let 
  aboutIcon1 = document.querySelector('.about__icon-bg-heart');
  aboutIcon2 = document.querySelector('.about__icon-bg-mouse');
  aboutIcon3 = document.querySelector('.about__icon-bg-lamp');
  aboutWrapper = document.querySelector('.about__wrapper')
 

aboutIcon1.onclick = function () {
    aboutIcon1.classList.add('about__icon-bg-active');
    aboutIcon2.classList.remove('about__icon-bg-active');
    aboutIcon3.classList.remove('about__icon-bg-active');
    aboutWrapper.style = 'transform: translateX(-0%);'
}

aboutIcon2.onclick = function () {
    aboutIcon2.classList.add('about__icon-bg-active');
    aboutIcon3.classList.remove('about__icon-bg-active');
    aboutIcon1.classList.remove('about__icon-bg-active');
    aboutWrapper.style = 'transform: translateX(-100%);'
}
aboutIcon3.onclick = function () {
    aboutIcon3.classList.add('about__icon-bg-active');
    aboutIcon2.classList.remove('about__icon-bg-active');
    aboutIcon1.classList.remove('about__icon-bg-active');
    aboutWrapper.style = 'transform: translateX(-200%);';
}

