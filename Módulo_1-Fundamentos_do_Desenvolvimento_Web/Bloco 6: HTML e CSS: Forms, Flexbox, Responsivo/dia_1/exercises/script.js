const pegarEstado = document.getElementById('estado');
const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF']

for(let index = 0; index < estados.length; index += 1){
  const criarOption = document.createElement('option');
  pegarEstado.appendChild(criarOption)
  criarOption.innerHTML = estados[index];
}

