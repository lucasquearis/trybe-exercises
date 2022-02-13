def fuelDiscount(liters, type):
    if type.lower() != 'a' and type.lower() != 'g':
        return "Please enter a valid type, A or G"

    gasolinePerLiterPrice = 2.50
    alcohoolPerLiterPrice = 1.90

    if(type.lower() == 'a'):
        totalValue = liters * alcohoolPerLiterPrice
        if liters > 20:
            discount = totalValue * 5 / 100
            return totalValue - discount
        else:
            discount = totalValue * 3 / 100
            return totalValue - discount
    if(type.lower() == 'g'):
        totalValue = liters * gasolinePerLiterPrice
        if liters > 20:
            discount = totalValue * 6 / 100
            return totalValue - discount
        else:
            discount = totalValue * 4 / 100
            return totalValue - discount


print(fuelDiscount(100, 'g'))
