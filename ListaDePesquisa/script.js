function myFilter () {
    let input, filter, ul, li, a, i, txtValue; //declarando as variaveis
    input = document.getElementById('myInput'); //selecionado o id myInput 
    filter = input.value.toUpperCase(); //alterando todas as letras para caixa alta
    ul = document.getElementById('myUL') //selecionado o id myUL do HTML
    li = ul.getElementsByTagName('li')
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a') [0]; 
        txtValue = a.textContent || a.innerText; 
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display= '';             
        } else {
            li[i].style.display = 'none'; 
        }
    }
}