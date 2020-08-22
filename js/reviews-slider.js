let 
  revPortrait1 = document.querySelector('.reviews__point1');
  revPortrait2 = document.querySelector('.reviews__point2');
  revPortrait3 = document.querySelector('.reviews__point3');
  revSwitches = document.querySelector('.reviews__wrapper')
 

  revPortrait1.onclick = function () {
   revPortrait1.classList.add('reviews__point-active');
   revPortrait2.classList.remove('reviews__point-active');
   revPortrait3.classList.remove('reviews__point-active');
    revSwitches.style = 'transform: translateX(-0%);'
}

revPortrait2.onclick = function () {
   revPortrait2.classList.add('reviews__point-active');
   revPortrait3.classList.remove('reviews__point-active');
   revPortrait1.classList.remove('reviews__point-active');
   revSwitches.style = 'transform: translateX(-100%);'
}
revPortrait3.onclick = function () {
   revPortrait3.classList.add('reviews__point-active');
   revPortrait2.classList.remove('reviews__point-active');
   revPortrait1.classList.remove('reviews__point-active');
   revSwitches.style = 'transform: translateX(-200%);';
}

