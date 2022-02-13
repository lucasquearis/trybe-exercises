TEST_LIST = [1, 2, 3, 4, 5, 6, 7, 8]


def mediaAritmetica(list):
    soma = 0
    for number in list:
        soma += number
    return soma / len(list)


print(mediaAritmetica(TEST_LIST))
