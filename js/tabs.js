function aboutSwitch () {
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
}
aboutSwitch ()

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

function portfolioMore () {
   let btn = document.querySelector('#portfolio__btn-more')
   let  column2 = document.querySelector('.portfolio__images2')
   let  column3 = document.querySelector('.portfolio__images3')
   let  column4 = document.querySelector('.portfolio__images4')
   
   btn.onclick = function () {
      let  column2 = document.querySelector('.portfolio__images2')
      if (column2.classList.contains('portfolio__images-active')){
         column2.classList.remove('portfolio__images-active')
         column3.classList.remove('portfolio__images-active')
         column4.classList.remove('portfolio__images-active')
   
      }
      else {
         column2.classList.add('portfolio__images-active')
         column3.classList.add('portfolio__images-active')
         column4.classList.add('portfolio__images-active')
      }
   }
}
portfolioMore ()


function reviewsSlider () {
   let 
revPortrait1 = document.querySelector('.reviews__point1');
revPortrait2 = document.querySelector('.reviews__point2');
revPortrait3 = document.querySelector('.reviews__point3');
revSwitches = document.querySelector('.reviews__wrapper')


let click1 = revPortrait1.onclick = function () {
   revPortrait1.classList.add('reviews__point-active');
   revPortrait2.classList.remove('reviews__point-active');
   revPortrait3.classList.remove('reviews__point-active');
   revSwitches.style = 'transform: translateX(-0%);'
}

let click2 = revPortrait2.onclick = function () {
   revPortrait2.classList.add('reviews__point-active');
   revPortrait3.classList.remove('reviews__point-active');
   revPortrait1.classList.remove('reviews__point-active');
   revSwitches.style = 'transform: translateX(-100%);'
}
let click3 = revPortrait3.onclick = function () {
   revPortrait3.classList.add('reviews__point-active');
   revPortrait2.classList.remove('reviews__point-active');
   revPortrait1.classList.remove('reviews__point-active');
   revSwitches.style = 'transform: translateX(-200%);';
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
    setTimeout (intervalSwitch, 5000)
}
intervalSwitch ();
}
reviewsSlider ()

function teamSlider () {
   let 
   portrait1 = document.querySelector('.team__point1');
   portrait2 = document.querySelector('.team__point2');
   portrait3 = document.querySelector('.team__point3');
   switches = document.querySelector('.team__wrapper')
   

   let click1 = portrait1.onclick = function () {
       portrait1.classList.add('team__point-active');
       portrait2.classList.remove('team__point-active');
       portrait3.classList.remove('team__point-active');
       switches.style = 'transform: translateX(-0%);'
   }

   let click2 = portrait2.onclick = function  () {
       portrait2.classList.add('team__point-active');
       portrait3.classList.remove('team__point-active');
       portrait1.classList.remove('team__point-active');
       switches.style = 'transform: translateX(-100%);'
   }
   let click3 = portrait3.onclick = function  () {
       portrait3.classList.add('team__point-active');
       portrait2.classList.remove('team__point-active');
       portrait1.classList.remove('team__point-active');
       switches.style = 'transform: translateX(-200%);';
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
       setTimeout (intervalSwitch, 5000)
   }
   intervalSwitch ();

}
teamSlider ()


function serviceSwitch () {
   let tool = document.querySelector('.service__icon-tool')
   let roller = document.querySelector('.service__icon-roller')
   let gamepad = document.querySelector('.service__icon-gamepad')
   let power = document.querySelector('.service__icon-power')
   let bodyTool = document.querySelector('.service__body-tool')
   let bodyRoller = document.querySelector('.service__body-roller')
   let bodyGamepad = document.querySelector('.service__body-gamepad')
   let bodyPower = document.querySelector('.service__body-power')
   
   
   tool.onclick = function(){
        let off1 = roller.classList.remove('service__icon-active');
        let off2 = gamepad.classList.remove('service__icon-active');
        let off3 = power.classList.remove('service__icon-active');
        let off4 = bodyRoller.classList.remove('service__body-active')
        let off5 = bodyGamepad.classList.remove('service__body-active')
        let off6 = bodyPower.classList.remove('service__body-active')
      if(this.classList.contains('service__icon-active')) {
         off1; off2; off3; off4; off5; off6;
      }else{
      this.classList.add('service__icon-active');
          off1; off2; off3; off4; off5; off6;
          bodyTool.classList.add('service__body-active');
      }
   }
   
   roller.onclick = function(){
      let off1 = tool.classList.remove('service__icon-active');
      let off2 = gamepad.classList.remove('service__icon-active');
      let off3 = power.classList.remove('service__icon-active');
      let off4 = bodyTool.classList.remove('service__body-active')
      let off5 = bodyGamepad.classList.remove('service__body-active')
      let off6 = bodyPower.classList.remove('service__body-active')
    if(this.classList.contains('service__icon-active')) {
       off1; off2; off3; off4; off5; off6;
    }else{
    this.classList.add('service__icon-active');
        off1; off2; off3; off4; off5; off6;
       bodyRoller.classList.add('service__body-active');
    }
   }
   
   gamepad.onclick = function(){
      let off1 = roller.classList.remove('service__icon-active');
      let off2 = tool.classList.remove('service__icon-active');
      let off3 = power.classList.remove('service__icon-active');
      let off4 = bodyRoller.classList.remove('service__body-active')
      let off5 = bodyTool.classList.remove('service__body-active')
      let off6 = bodyPower.classList.remove('service__body-active')
    if(this.classList.contains('service__icon-active')) {
       off1; off2; off3; off4; off5; off6;
    }else{
    this.classList.add('service__icon-active');
        off1; off2; off3; off4; off5; off6;
       bodyGamepad.classList.add('service__body-active');
    }
   }
   
   power.onclick = function(){
      let off1 = roller.classList.remove('service__icon-active');
      let off2 = gamepad.classList.remove('service__icon-active');
      let off3 = tool.classList.remove('service__icon-active');
      let off4 = bodyRoller.classList.remove('service__body-active')
      let off5 = bodyGamepad.classList.remove('service__body-active')
      let off6 = bodyTool.classList.remove('service__body-active')
    if(this.classList.contains('service__icon-active')) {
       off1; off2; off3; off4; off5; off6;
    }else{
    this.classList.add('service__icon-active');
        off1; off2; off3; off4; off5; off6;
       bodyPower.classList.add('service__body-active');
    }
   }
}
serviceSwitch ()

