let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider_line');


document.querySelector('.slider_next').addEventListener('click', function(){
    offset = offset + 418;
    if(offset > 1672){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider_prev').addEventListener('click', function(){
    offset = offset - 418;
    if(offset < 0){
        offset = 1672;
    }
    sliderLine.style.left = -offset + 'px';
});