


// let slider = new Swiper('.brand__slider-container',{
//     spaceBetween:16,
//     slidesPerView: "auto",
//     pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     swiper: 32
//    }
// });
// window.addEventListener("DOMContentLoaded",() =>{
//     let width = window.innerWidth;
    
//     if(width >= 768){
//         slider.destroy();
//     }
//     });
var swiper = new Swiper('.brand__slider-container', {   
    // Параметры по умолчанию   
     slidesPerView: 4,    
    spaceBetween: 40,   
    // Адаптивные точки останова   
     breakpoints: {   
    
    //    когда ширина окна <= 320px     
        320: {        
          slidesPerView: 1, 
          spaceBetween: 1      
       },     
    //    при ширине окна <= 480px     
        480: {        
          slidesPerView: 2,        
          spaceBetween: 20      
       },    
   
      
        768: {        
          slidesPerView: 4,        
          spaceBetween: 1      
       },
       1120: {        
        slidesPerView: 5,        
        spaceBetween: 1      
     } 
   
    }
 })

 const breakpoint = window.matchMedia('(min-width:700px)');

 let mySwiper;
 
 const breakpointChecker = function () {
   if (breakpoint.matches) {
     if (mySwiper) {
       mySwiper.destroy(true, true);
     }
   } else {
     return enableSwiper();
   }
 };
 
 const enableSwiper = function () {
   mySwiper = new Swiper('.brand__slider-container', {
     loop: true,
     slidesPerView: 'auto',
     spaceBetween: 16,
     pagination: {
       el: '.swiper-pagination',
       type: 'bullets',
       clickable: true,
     },
   });
 };
 
 breakpoint.addEventListener('change', breakpointChecker);
 
 breakpointChecker();

 let button = document.querySelector('.brand-btn');

   button.addEventListener('click',()=>{

let item = document.querySelectorAll('.brand__slider--hidden');
let content = document.querySelector('.brand_btn-disc');
let img = document.querySelector('.brand_btn-img');

for (i = 0;i < item.length;i++) {
item[i].classList.toggle('brand__slider--visible');

if(item[i].classList.contains('brand__slider--visible')){
    content.textContent = "Скрыть";
} else {
    content.textContent = "Показать всё"; 
}
img.classList.toggle('brand__btn-img--rotate');
}
});


    

