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
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let selecionarDiasLista = document.querySelector('#days');

for(let index = 0; index < dezDaysList.length; index += 1){
  let day = dezDaysList[index];
  let dayItem = document.createElement('li');

  if(day=== 24 | day === 31) {
    dayItem.className = 'day holiday';
    dayItem.innerHTML = day;
    selecionarDiasLista.appendChild(dayItem);
  } else if (day ===4 | day === 11 | day === 18){
    dayItem.className = 'day friday';
    dayItem.innerHTML = day;
    selecionarDiasLista.appendChild(dayItem);
  } else if (day === 25) {
    dayItem.className = 'day holiday friday';
    dayItem.innerHTML = day;
    selecionarDiasLista.appendChild(dayItem);
  } else {
    dayItem.innerHTML = day;
    dayItem.className = 'day';
    selecionarDiasLista.appendChild(dayItem);
  }
};
};

function createHolidays(feriados){
  let selecionarDivBotao = document.getElementsByClassName('buttons-container')[0];
  let criarBotao = document.createElement('button')
  criarBotao.id = 'btn-holiday'
  criarBotao.innerHTML = feriados;
  selecionarDivBotao.appendChild(criarBotao)
}

function createFridays(sextas){
  let selecionarDivBotao = document.getElementsByClassName('buttons-container')[0];
  let criarBotao = document.createElement('button')
  criarBotao.id = 'btn-friday'
  criarBotao.innerHTML = sextas;
  selecionarDivBotao.appendChild(criarBotao)
}


window.onload=function(){
  function mostrarFeriados(){
    let selecionarBotaoFeriados = document.getElementById('btn-holiday');
    let selecionarFeriados = document.querySelectorAll('.holiday');
    let corFundo = 'rgb(238,238,238)';
    let novaCor = 'white';
  
    selecionarBotaoFeriados.addEventListener('click', function(){
      for(let index = 0; index < selecionarFeriados.length; index += 1){
        if (selecionarFeriados[index].style.backgroundColor === novaCor){
          selecionarFeriados[index].style.backgroundColor = corFundo;
        } else {
          selecionarFeriados[index].style.backgroundColor = novaCor;
        }
      }
    })
  };
  mostrarFeriados();

  function alteraSexta(sextasLista){
    let selecionaBotaoSexta = document.getElementById('btn-friday');
    let selecionarSexta = document.getElementsByClassName('friday day');
    let novoTextoSexta = 'SEXTOOU!!'

    selecionaBotaoSexta.addEventListener('click', function(){
      for(let index = 0; index < selecionarSexta.length; index += 1){
        if(selecionarSexta[index].innerHTML !== novoTextoSexta){
          selecionarSexta[index].innerHTML = novoTextoSexta;
        } else {
          selecionarSexta[index].innerHTML = sextasLista[index];
        }
      }
    })
  };

  let dezFridays = [ 4, 11, 18, 25 ];
  alteraSexta(dezFridays);
}

createHolidays('Feriados');
createFridays('Sexta-feira')

createDaysOfTheMonth();

createDaysOfTheWeek();

// Escreva seu código abaixo.