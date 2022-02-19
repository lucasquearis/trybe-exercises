def printNamesWithoutLastLetter(name):
    for letter in range(len(name)):
        for index in range(len(name) - letter):
            print(name[index], end="")
        print()


printNamesWithoutLastLetter('Lucas')