#!/bin/bash

# By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

a=1; b=1; sum=0
while true; do
  (( c = a + b ))
  (( c > 4000000 )) && break
  (( c % 2 == 0 )) && (( sum = sum + c ))
  a=$b; b=$c
done
echo $sum
