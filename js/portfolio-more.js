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