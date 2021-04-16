statesList = [
  { name: 'Acre', acronym: 'AC',},
  { name: 'Alagoas', acronym: 'AL',},
  { name: 'Amapá', acronym: 'AP',},
  { name: 'Amazonas', acronym: 'AM',},
  { name: 'Bahia', acronym: 'BA',},
  { name: 'Ceará', acronym: 'CE',},
  { name: 'Distrito Federal', acronym: 'DF',},
  { name: 'Espírito Santo', acronym: 'ES',},
  { name: 'Goiás', acronym: 'GO',},
  { name: 'Maranhão', acronym: 'MA',},
  { name: 'Mato Grosso', acronym: 'MT',},
  { name: 'Mato Grosso do Sul', acronym: 'MS',},
  { name: 'Minas Gerais', acronym: 'MG',},
  { name: 'Paraná', acronym: 'PA',},
  { name: 'Paraíba', acronym: 'PB',},
  { name: 'Pará', acronym: 'PR',},
  { name: 'Pernambuco', acronym: 'PE',},
  { name: 'Piauí', acronym: 'PI',},
  { name: 'Rio de Janeiro', acronym: 'RJ',},
  { name: 'Rio Grande do Norte', acronym: 'RN',},
  { name: 'Rio Grande do Sul', acronym: 'RS',},
  { name: 'Rondonia', acronym: 'RO',},
  { name: 'Roraima', acronym: 'RR',},
  { name: 'Santa Catarina', acronym: 'SC',},
  { name: 'Sergipe', acronym: 'SP',},
  { name: 'São Paulo', acronym: 'SE',},
  { name: 'Tocantins', acronym: 'TO',},
];

function createStatesOptions() { //Cria a lista de estados.
  let stateList = document.querySelector('#userState');
  for (let index = 0; index < statesList.length; index += 1) {
    let stateOption = document.createElement('option');
    stateOption.setAttribute('value', statesList[index].acronym);
    stateOption.innerText = statesList[index].name;
    stateList.appendChild(stateOption);
  }
}
createStatesOptions();

function constructCV () { // Faz construção do CV.
  const userAnswers = document.getElementById('userInfo');
  const constructedCV = document.getElementById('compiledCV');
  for (let index = 0; index < userAnswers.length; index += 1) {
    if (userAnswers[index].value !== undefined) {
      let addInfo = document.createElement('p');
      addInfo.innerText = userAnswers[index].value;
      addInfo.setAttribute ('class', 'infoInCV');
      constructedCV.appendChild(addInfo);
    }
  }
}

function checkDate(event) { // Verifica Integraidade da Data fornecida.
  event.preventDefault();
  let date = document.getElementById('userPositionInitialDate').value;
  date = date.split('');
  let days = parseInt(date.slice(0,2).join(''));
  let month = parseInt(date.slice(3,5).join(''));
  let year = parseInt(date.slice(6,10).join(''));
  if (days < 1 || days > 31 || isNaN(days)) {
    return alert('ERRO: Dia inválido');
  } else if (date[2] !== "/") { 
      return alert('ERRO: Barra depois de dias inválida');
  } else if (month < 1 || month > 12 || isNaN(month)) {
    return alert('ERRO: Mês inválido');
  } else if (date[5] !== "/") {
    return alert('ERRO: Barra depois de mes inválida');
  }else if (year < 1960 || year > 2021 || isNaN(year)) {
    return alert('ERRO: Ano inválido')
  }
  constructCV();
}
const btnSendData = document.getElementById('submitData');
btnSendData.addEventListener('click', checkDate);

function clearData(event){ // Limpa o formulário e o CV criado. 
  event.preventDefault();
  const constructedCV = document.getElementById('compiledCV');
  const userAnswers = document.getElementById('userInfo');
  constructedCV.innerHTML = '';
  for (let index = 0; index < userAnswers.length; index += 1) {
    userAnswers[index].value = ''
  }
  const createLegend = document.createElement('legend');
  createLegend.innerText = 'CV Renderizado';
  constructedCV.appendChild(createLegend);
}

const btnClearData = document.getElementById('clearData');
btnClearData.addEventListener('click', clearData);