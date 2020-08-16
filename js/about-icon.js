let heart = document.querySelector('.about__icon-bg-heart')
let mouse = document.querySelector('.about__icon-bg-mouse')
let lamp = document.querySelector('.about__icon-bg-lamp')
let textHeart = document.querySelector('.about__text-heart')
let textMouse = document.querySelector('.about__text-mouse')
let textLamp = document.querySelector('.about__text-lamp')

heart.onclick = function(){
     let off1 = mouse.classList.remove('about__icon-bg-active');
     let off2 = lamp.classList.remove('about__icon-bg-active');
     let off3 = textMouse.classList.remove('about__text-active')
     let off4 = textLamp.classList.remove('about__text-active')
   if(this.classList.contains('about__icon-bg-active')) {
      off1; off2; off3; off4;
}else{
   this.classList.add('about__icon-bg-active');
      off1; off2; off3; off4;
      textHeart.classList.add('about__text-active');
   }
}

mouse.onclick = function(){
     let off1 = heart.classList.remove('about__icon-bg-active');
     let off2 = lamp.classList.remove('about__icon-bg-active');
     let off3 = textHeart.classList.remove('about__text-active');
     let off4 = textLamp.classList.remove('about__text-active');
   if(this.classList.contains('about__icon-bg-active')) {
      off1; off2; off3; off4;
}else{
   this.classList.add('about__icon-bg-active');
      off1; off2; off3; off4;
      textMouse.classList.add('about__text-active');
   }
}
lamp.onclick = function(){
     let off1 = mouse.classList.remove('about__icon-bg-active');
     let off2 = heart.classList.remove('about__icon-bg-active');
     let off3 = textHeart.classList.remove('about__text-active');
     let off4 = textMouse.classList.remove('about__text-active');

   if(this.classList.contains('about__icon-bg-active')) {
      off1; off2; off3; off4;
}else{
   this.classList.add('about__icon-bg-active');
      off1; off2; off3; off4;
      textLamp.classList.add('about__text-active');
   }
}