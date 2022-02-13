def summation(n):
    if n < 1:
        return "Please enter an integer and non-zero number"
    summationResult = 0
    for index in range(n):
        summationResult += index+1
    return summationResult
