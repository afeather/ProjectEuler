#!/bin/bash

# Find the largest palindrome made from the product of two 3-digit numbers.

palindrome=0
for i in {999..100}; do
  for (( j=999; j>=$i; j-- )) do
    (( num = i * j ))
    (( num > palindrome )) && [[ $(echo "$num" | rev) == "$num" ]] && palindrome=$num
  done
done

echo $palindrome
