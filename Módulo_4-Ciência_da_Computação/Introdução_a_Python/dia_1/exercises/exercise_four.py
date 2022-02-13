NAME_LIST = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def biggestName(list):
    bigger = ''
    for name in list:
        if len(name) > len(bigger):
            bigger = name
    return bigger


print(biggestName(NAME_LIST))
