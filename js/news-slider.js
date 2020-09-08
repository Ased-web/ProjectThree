function newsSlider () {
   let 
   newsSwitch1 = document.querySelector('.news__point1');
   newsSwitch2 = document.querySelector('.news__point2');
   newsSwitch3 = document.querySelector('.news__point3');
   newsSwitches = document.querySelector('.news__wrapper')
   

   let click1 = newsSwitch1.onclick = function () {
      newsSwitch1.classList.add('news__point-active');
      newsSwitch2.classList.remove('news__point-active');
      newsSwitch3.classList.remove('news__point-active');
      newsSwitches.style = 'transform: translateY(-0%);'
   }

   let click2 = newsSwitch2.onclick = function () {
      newsSwitch2.classList.add('news__point-active');
      newsSwitch3.classList.remove('news__point-active');
      newsSwitch1.classList.remove('news__point-active');
      newsSwitches.style = 'transform: translateY(-100%);'
   }
   let click3 = newsSwitch3.onclick = function () {
      newsSwitch3.classList.add('news__point-active');
      newsSwitch2.classList.remove('news__point-active');
      newsSwitch1.classList.remove('news__point-active');
      newsSwitches.style = 'transform: translateY(-200%);';
   }

   let timeSwitch = 0
    function intervalSwitch () {
        timeSwitch++;
        if (timeSwitch == 1) {
            click1 ()
        }
        if (timeSwitch == 2) {
            click2 ()
        } 
        if (timeSwitch == 3) {
            click3 ()
        }
        if (timeSwitch == 3) {
            timeSwitch = 0
        }
        setTimeout (intervalSwitch, 10000)
    }
    intervalSwitch ();
    
}
newsSlider ()