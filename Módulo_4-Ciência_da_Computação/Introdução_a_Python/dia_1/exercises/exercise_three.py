def asteriskSquare(n):
    if n < 1:
        return print("Please enter an integer and non-zero number")
    for index in range(n):
        print(n * '*')


asteriskSquare(4)
