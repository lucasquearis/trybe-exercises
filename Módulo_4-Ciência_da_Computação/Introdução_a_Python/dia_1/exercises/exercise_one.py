def biggerBetween(a, b):
    if a > b:
        return a
    else:
        return b


print(biggerBetween(100, 1))
print(biggerBetween(1, 100))
print(biggerBetween(101, 100))
print(biggerBetween(101, 102))
