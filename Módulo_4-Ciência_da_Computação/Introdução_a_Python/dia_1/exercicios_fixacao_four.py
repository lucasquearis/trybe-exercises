# O Fatorial de um número inteiro é representado pela multiplicação de todos os números predecessores maiores que 0. Por exemplo o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5 . Escreva um código que calcule o fatorial de um número inteiro.

fatorial = 10

index = 1

result = 1

while index <= fatorial:
    result *= index
    index += 1
print(result)

# Um sistema de avaliações registra valores de 0 a 10 para cada avaliação. Após algumas mudanças estes valores precisam ser ajustados para avaliações de 0 a 100. Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10] . Escreva um código capaz de gerar as avaliações após a mudança. Neste caso o resultado deveria ser [60, 80, 50, 90, 100] .

ratings = [6, 8, 5, 9, 10]
newRatings = [rating * 10
                for rating in ratings]

print(newRatings)

for rating in newRatings:
    if (rating % 3) == 0:
        print(f"{rating} é multiplo de 3!!")

