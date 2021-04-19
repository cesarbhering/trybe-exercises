// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

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

function constructCV (event) { // Faz construção do CV.
  //event.preventDefault();
  const userAnswers = document.getElementById('userInfo');
  const constructedCV = document.getElementById('compiledCV');

  for (let index = 0; index < userAnswers.length; index += 1) {
    if (userAnswers[index].type === 'radio' && !userAnswers[index].checked) {
      continue;
    }
    if (userAnswers[index].value !== undefined) {
      let addInfo = document.createElement('p');
      addInfo.innerText = userAnswers[index].value;
      addInfo.setAttribute ('class', 'infoInCV');
      constructedCV.appendChild(addInfo);
    }
  }
}

const btnSendData = document.getElementById('submitData');
btnSendData.addEventListener('click', constructCV);

function clearData(event){ // Limpa o formulário e o CV criado. 
  //event.preventDefault();
  const constructedCV = document.getElementById('compiledCV');
  const userAnswers = document.getElementById('userInfo');
  constructedCV.innerHTML = '';
  for (let index = 0; index < userAnswers.length; index += 1) {
    if (userAnswers[index].type === 'radio') {
      continue;
    }
    userAnswers[index].value = ''
  }
  const createLegend = document.createElement('legend');
  createLegend.innerText = 'CV Renderizado';
  createLegend.setAttribute('class', 'col-form-label-lg');
  constructedCV.appendChild(createLegend);
}

const btnClearData = document.getElementById('clearData');
btnClearData.addEventListener('click', clearData);

var picker = new Pikaday({ // Faz o pikaday funcionar. Aparece o calendario no local da data de inicio.
  field: document.getElementById('datepicker'),
  toString(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
});