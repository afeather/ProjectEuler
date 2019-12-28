#!/bin/bash

# Find the sum of all the multiples of 3 or 5 below 1000.
sum=0

for i in {1..999}; do
  ( (( i % 3 == 0 )) || (( i % 5 == 0 )) ) && (( sum = sum + i ))
done

echo $sum

