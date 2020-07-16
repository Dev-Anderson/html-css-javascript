const red = document.querySelector('.red'); 
const cyan = document.querySelector('.cyan'); 
const violet = document.querySelector('.violet'); 
const orange = document.querySelector('.orange'); 
const pink = document.querySelector('.pink'); 
const blue = document.querySelector('.blue'); 
const black = document.querySelector('.black'); 
const gray = document.querySelector('.gray'); 
const brown = document.querySelector('.brown'); 
const yellow = document.querySelector('.yellow'); 
const golden = document.querySelector('.golden'); 

const box = document.querySelector('.center-box'); 

const getBackgroundColor = element => {
    return window.getComputedStyle(element).backgroundColor;  //O método getComputedSytle () obtém todas as propriedades e valores do CSS
}; 

const changeBackgroundColor = (element, colorDiv, colorValue) => {
    return colorDiv.addEventListener('click', () => {
        element.style.background = colorValue; 
    }); 
}; 

changeBackgroundColor(box, red, getBackgroundColor(red)); 
changeBackgroundColor(box, cyan, getBackgroundColor(cyan)); 
changeBackgroundColor(box, violet, getBackgroundColor(violet)); 
changeBackgroundColor(box, orange, getBackgroundColor(orange));
changeBackgroundColor(box, pink, getBackgroundColor(pink)); 
changeBackgroundColor(box, blue, getBackgroundColor(blue)); 
changeBackgroundColor(box, black, getBackgroundColor(black)); 
changeBackgroundColor(box, gray, getBackgroundColor(gray)); 
changeBackgroundColor(box, brown, getBackgroundColor(brown)); 
changeBackgroundColor(box, yellow, getBackgroundColor(yellow)); 
changeBackgroundColor(box, golden, getBackgroundColor(golden)); 