let 
  portrait1 = document.querySelector('.team__point1');
  portrait2 = document.querySelector('.team__point2');
  portrait3 = document.querySelector('.team__point3');
  switches = document.querySelector('.team__wrapper')
 

portrait1.onclick = function () {
    portrait1.classList.add('team__point-active');
    portrait2.classList.remove('team__point-active');
    portrait3.classList.remove('team__point-active');
    switches.style = 'transform: translateX(-0%);'
}

portrait2.onclick = function () {
    portrait2.classList.add('team__point-active');
    portrait3.classList.remove('team__point-active');
    portrait1.classList.remove('team__point-active');
    switches.style = 'transform: translateX(-100%);'
}
portrait3.onclick = function () {
    portrait3.classList.add('team__point-active');
    portrait2.classList.remove('team__point-active');
    portrait1.classList.remove('team__point-active');
    switches.style = 'transform: translateX(-200%);';
}

