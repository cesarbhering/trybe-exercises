function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.


//O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
//Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
//Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
//Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function populateMonth(array) {

  for (let index = 0; index < array.length; index += 1) {
    let element = document.createElement('li');
    let daysUl = document.getElementById('days');
    element.innerText = array[index];
    element.setAttribute('class', 'day')
    daysUl.appendChild(element); 
  }
}

populateMonth(dezDaysList);

function highlightHolidays(array) {
  for (let n of array)  {
    for (let index = 0; index < document.getElementsByClassName('day').length; index += 1) {
      if (n.toString() === document.getElementsByClassName('day')[index].innerText) {
        document.getElementsByClassName('day')[index].className += (' holiday');
      }
    }
  }
}

highlightHolidays([24,25,31]);

function highlightFridays(array) {
  for (let n of array)  {
    for (let index = 0; index < document.getElementsByClassName('day').length; index += 1) {
      if (n.toString() === document.getElementsByClassName('day')[index].innerText) {
        document.getElementsByClassName('day')[index].className += (' friday');
      }
    }
  }
}

highlightFridays([4,11,18,25]);

//Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
//Adicione a este botão a ID "btn-holiday" .
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function holidaysButton(string) {
  let holyButton = document.createElement('BUTTON');
  holyButton.innerHTML = string;
  holyButton.setAttribute('ID', 'btn-holiday');
  document.getElementsByClassName('buttons-container')[0].appendChild(holyButton);
}

holidaysButton('Feriados');

//Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function changeBackgroundColor() {
  let feriados = document.querySelectorAll('.holiday');
  
  if (feriados[0].style.backgroundColor == 'rgb(238, 238, 238)' || feriados[0].style.backgroundColor == '')  {
    for (let day of feriados) {
      day.style.backgroundColor = 'rgb(64, 191, 64)';
    }
  } else if (feriados[0].style.backgroundColor == 'rgb(64, 191, 64)') {
      for (let day of feriados) {
        day.style.backgroundColor = 'rgb(238,238,238)';
      }
    }
}

let holyButton = document.getElementById('btn-holiday');
holyButton.addEventListener('click', changeBackgroundColor);

//Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
//Adicione a este botão o ID "btn-friday" .
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function fridaysButton(string) {
  let friButton = document.createElement('BUTTON');
  friButton.innerHTML = string;
  friButton.setAttribute('ID', 'btn-friday');
  document.getElementsByClassName('buttons-container')[0].appendChild(friButton);
}

fridaysButton("Sexta-feira");

//Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function changeText() {
  let sextas = document.querySelectorAll('.friday');

  if (sextas[0].innerText.length <= 2)  {
    for (let day of sextas) {
      day.innerText = 'SEXTOURO';
    }
  } else {
      for (let day of sextas) {
        day.innerText = parseInt(day.nextElementSibling.innerText) - parseInt(1);
      }
    }
}

let fridayButton = document.getElementById('btn-friday');
fridayButton.addEventListener('click', changeText);

//Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function dayBigger(event) {
  event.target.style.fontSize = 'X-large';
}

function daySmaller(event) {
  event.target.style.fontSize = 'large';
}

let ul = document.getElementById('days');

ul.addEventListener('mouseover', dayBigger);
ul.addEventListener('mouseout', daySmaller);
