numeros = input('Digite alguns números separados por espaço: ')

lista_numeros = numeros.split(' ')

soma = 0

for numero in lista_numeros:
  if not numero.isdigit():
    print(f"Erro ao somar valores, {numero} é um valor inválido")
  else:
    soma += int(numero)

print(f"Soma dos numeros: {soma}")