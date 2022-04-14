/*const arrLeft = document.getElementById('arrow_left'),
      arrRight = document.getElementById('arrow_right'),
      slides = document.querySelectorAll('.example_slide'),
      dots = document.querySelectorAll('.dot');

      let index = 0; 

      function activeSlide(n){
          console.log(n);
          for(slide of slides) {
              slide.classList.remove('active');    
          }
          slides[n].classList.add('active');
      };
      
      function nextSlide () {
          if(index == slides.length - 1) {
              index = 0;
              activeSlide(index);
          } else {
              index++;
              activeSlide(index);
          }
      };

      
      arrRight.addEventListener('click', nextSlide);
    */


const arrRight = document.getElementById('arrow_right'),
      slides = document.querySelectorAll('.example_slide');

let obj1 = document.querySelector(".first_proj");
let obj2 = document.querySelector(".second_proj");
let obj3 = document.querySelector(".thrid_proj");


arrRight.addEventListener('click', function(){
    offset = offset + 679;
    if(offset > 1358){
        offset = 0;
    }
    slider.style.left = -offset + 'px';
});

/*arrLeft.addEventListener('click', function(){
    offset = offset - 679;
    if(offset < 0){
        offset = 1358;
    }
    slider.style.left = -offset + 'px';
});*/

