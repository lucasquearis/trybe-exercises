a = 10
b = 5
print(f"soma {a + b}")
print(f"subtracao {a - b}")
print(f"multiplicação {a * b}")
print(f"divisão {a / b}")
print(f"divisão inteira {a // b}")
print(f"potenciação {a ** b}")
print(f"módulo {a % b}")

hours = 6
minutes = hours * 60
seconds = minutes * 60
print(f"seconds {seconds}")
print(f"minutes {minutes}")
print(f"hours {hours}")

# Suponha que o preço de capa de um livro seja 24,20, mas as livrarias recebem
# um desconto de 40%.
# O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada
# exemplar adicional. Qual é o custo total de atacado para 60 cópias?
# Escreva uma expressão que receba o custo total e a imprima.

capaComDesconto = 24.20 - (24.20 * (40/100))
transportPrimeiro = 3
transportOutros = 0.75

precoTotalPrimeiro = capaComDesconto + transportPrimeiro
precoTotalOutros = capaComDesconto + transportOutros


print(precoTotalPrimeiro + (59 * precoTotalOutros))
