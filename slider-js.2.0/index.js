const prev = document.getElementById('prev'),
      next = document.getElementById('next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot'),
      projects = document.querySelectorAll('.project');

      let index = 0; 

      function activeSlide(n){
          for(slide of slides) {
              slide.classList.remove('active');    
          }
          slides[n].classList.add('active');
    };
      
      function activeDot(n){
        for(dot of dots) {
            dot.classList.remove('active');    
        }
        dots[n].classList.add('active');
    };

    function activeProject(n){
        for(proj of projects) {
            proj.classList.remove('active');
        }
        projects[n].classList.add('active');
    };


    const prepearCurrentSlide = ind => {
        activeSlide(ind);
        activeDot(ind);
        activeProject(ind);
    };

      function nextSlide () {
          if(index == slides.length - 1) {
              index = 0;
             prepearCurrentSlide(index);
          } else {
              index++;
              prepearCurrentSlide(index);
          }
      };

      function prevSlide () {
        if(index == 0) {
            index = slides.length - 1
            prepearCurrentSlide(index);
        } else {
            index--;
            prepearCurrentSlide(index);
        }
    };

    dots.forEach((item, indexDot) => {
        item.addEventListener('click', () => {
            index = indexDot;
            prepearCurrentSlide(index);
        })
    });


    projects.forEach((item, indexProj) => {
        item.addEventListener('mouseover', () =>{
            index = indexProj;
            prepearCurrentSlide(index);
        })
    });
      
      next.addEventListener('click',nextSlide);
      prev.addEventListener('click', prevSlide);
