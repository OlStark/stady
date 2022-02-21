//Сверстать кнопку, которая будет выводить ширину и высоту экрана в alert

const btn = document.querySelector('.btn');
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

btn.addEventListener('click', () =>{
    alert(`Ширина экрана ${screenWidth} пикселей. Высота экрана ${screenHeight} пикселей`)
});
