# If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

tens = ["TWENTY", "THIRTY", "FORTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY"]
hundreds = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE" ]
numbers = []

numbers.append("ONE")
numbers.append("TWO")
numbers.append("THREE")
numbers.append("FOUR")
numbers.append("FIVE")
numbers.append("SIX")
numbers.append("SEVEN")
numbers.append("EIGHT")
numbers.append("NINE")
numbers.append("TEN")
numbers.append("ELEVEN")
numbers.append("TWELVE")
numbers.append("THIRTEEN")
numbers.append("FOURTEEN")
numbers.append("FIFTEEN")
numbers.append("SIXTEEN")
numbers.append("SEVENTEEN")
numbers.append("EIGHTEEN")
numbers.append("NINETEEN")
    
for i in range(len(tens)):
    numbers.append(tens[i])
    for j in range(9):
        numbers.append(tens[i] + numbers[j])
            
for i in range(9):
    numbers.append(hundreds[i] + "HUNDRED")
    for k in range(19):
            numbers.append(hundreds[i] + "HUNDREDAND" + numbers[k])
    for j in range(8):
        numbers.append(hundreds[i] + "HUNDREDAND" + tens[j])
        for k in range(9):
            numbers.append(hundreds[i] + "HUNDREDAND" + tens[j] + numbers[k])
            
numbers.append("ONETHOUSAND")
           
           
 
for i in numbers:
    print i
print len(numbers)
print sum([len(i) for i in numbers])
