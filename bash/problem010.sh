#!/bin/bash

# Find the sum of all the primes below two million.

max=2000000
sieve=()

sieve[0]=0
sieve[1]=0

for (( i = 2; i < max; i++ )); do
  sieve[$i]=1
done

sqrt=$(bc <<< "sqrt($max)")
for (( num = 2; num < sqrt; num++ )); do
  for (( step = num + num; step < max; step = step + num )); do
    sieve[$step]=0
  done
done

sum=0
for (( i = 2; i < max; i++ )); do
  [[ ${sieve[$i]} -eq 1 ]] && (( sum = sum + $i ))
done
echo $sum


