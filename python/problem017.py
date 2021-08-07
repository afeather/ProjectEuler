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
    
for num in range(len(tens)):
  numbers.append(tens[num])
  for j in range(9):
    numbers.append(tens[num] + numbers[j])
            
for num in range(9):
  numbers.append(hundreds[num] + "HUNDRED")
  for k in range(19):
    numbers.append(hundreds[num] + "HUNDREDAND" + numbers[k])
  for j in range(8):
    numbers.append(hundreds[num] + "HUNDREDAND" + tens[j])
    for k in range(9):
      numbers.append(hundreds[num] + "HUNDREDAND" + tens[j] + numbers[k])

numbers.append("ONETHOUSAND")

print(sum(len(num) for num in numbers))
