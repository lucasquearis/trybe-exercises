import math


def paintsToBuy(meters):
    metersPerLiter = 3
    canOfPaintLiter = 18
    canOfPaintPrice = 80
    maxMetersOneTin = metersPerLiter * canOfPaintLiter
    paintCansQuantity = 1
    if meters < maxMetersOneTin:
        return paintCansQuantity, canOfPaintPrice * paintCansQuantity
    elif meters > maxMetersOneTin:
        paintCansQuantity = math.ceil(meters / maxMetersOneTin)
        print(paintCansQuantity)
    return paintCansQuantity, canOfPaintPrice * paintCansQuantity


print(paintsToBuy(500))
