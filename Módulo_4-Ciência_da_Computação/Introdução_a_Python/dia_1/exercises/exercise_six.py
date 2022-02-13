def triangleType(a, b, c):
    if a + b < c and b + c < a and c + a < b:
        return "Não é um triangulo"
    if(a == b and b == c):
        return "Triângulo equilátero"
    elif(a == b or a == c or b == c):
        return "Triângulo Isóseles"
    elif(a != b or a != c or b != c):
        return "Triângulo Escaleno"
