#!/bin/bash

# Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

sumSquare=0
squareSum=0

for i in {1..100}; do
  (( sumSquare = sumSquare + ( i * i ) ))
  (( squareSum = squareSum + i ))
done

(( squareSum = squareSum * squareSum ))

echo $(( squareSum - sumSquare ))
  
