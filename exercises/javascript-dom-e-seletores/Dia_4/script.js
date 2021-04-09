//Cor de fundo da tela;
//Cor do texto;
//Tamanho da fonte;
//Espaçamento entre as linhas do texto;
//Tipo da fonte ( Font family ).

let bodyContentStyle = getComputedStyle(document.querySelector('#pageText'));
let body = document.querySelector('#pageText');
let btnDark = document.querySelector('.btn-dark');

function checkDarkPreference() {
  if (localStorage.getItem('fontSize') == '16px') {
    body.style.backgroundColor = 'black';
    body.style.color = 'gray';
    body.style.fontSize = '16px';
    body.style.lineHeight = '110%';
    body.style.fontFamily = 'monospace';
    btnDark.innerText = 'Light Mode';
  }
}

checkDarkPreference();

function createStoragesCSS() {  // Cria o localstorage caso não exista, com as propriedades que estão carregadas no CSS.
    localStorage.setItem('backgroundColor', bodyContentStyle.backgroundColor);
    localStorage.setItem('color', bodyContentStyle.color);
    localStorage.setItem('fontSize', bodyContentStyle.fontSize);
    localStorage.setItem('lineHeight', bodyContentStyle.lineHeight);
    localStorage.setItem('fontFamily', bodyContentStyle.fontFamily);

}

//createStoragesCSS();

function changeCSSAtributes() { //muda os atributos ao clicar no botao
  if (bodyContentStyle.backgroundColor == 'rgb(250, 235, 215)') {
    body.style.backgroundColor = 'black';
    body.style.color = 'gray';
    body.style.fontSize = '16px';
    body.style.lineHeight = '110%';
    body.style.fontFamily = 'monospace';
    btnDark.innerText = 'Light Mode';
    createStoragesCSS();
  } else {
    body.style.backgroundColor = 'antiquewhite';
    body.style.color = 'hsl(200, 50%, 50%)';
    body.style.fontSize = '20px';
    body.style.lineHeight = 'normal';
    body.style.fontFamily = 'Times New Roman';
    createStoragesCSS();
  }
}


btnDark.addEventListener('click', changeCSSAtributes);

