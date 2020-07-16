const list_el = document.querySelector('.list');
const hover_bg_el = document.querySelector('.hover-bg');

list_el.addEventListener('mousemove', e => {
    const y = e.offsetY; 

    //aplicando a suavizacao ao mover o mouse 
    if (y <= 56) hover_bg_el.style.top = 0;
    else if (y > 56 && y <= 112) hover_bg_el.style.top = 56 + 'px';
    else if (y > 112 && y <= 170) hover_bg_el.style.top = 112 + 'px'; 
    else hover_bg_el.style.top = 170 + 'px'; 
}); 

//defincao de uso do comando 'offsetY => propriedade retorna a coordenada Y do ponteiro do mouse; 
//em relacao ao elemento distino 
//essa propriedade e apenas leitura