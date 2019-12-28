#!/bin/bash

# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

num_factors=()

# for each divisor
for divisor in {1..20}; do
  factor=2
  # count the number of prime factors
  while (( divisor > 1 )); do
    if (( divisor % factor == 0 )); then
      count=0
      while (( divisor % factor == 0 )); do
        (( count = count + 1 ))
        (( divisor = divisor / factor ))
      done
      # if the count is greater than the number factors then update number factors
      if [[ $count -gt ${num_factors[$factor]} ]]; then num_factors[$factor]=$count; fi
    else 
      (( factor = factor + 1 ))
    fi
  done
done

# generate the numbers from the prime factors
num=1
for i in {1..20}; do [[ ${num_factors[$i]} ]] && (( num = num * $i ** ${num_factors[$i]} )); done
echo $num
