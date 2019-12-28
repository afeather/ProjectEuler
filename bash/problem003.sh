#!/bin/bash

# What is the largest prime factor of the number 600851475143

num=600851475143; d=2; lph=0

while (( num > 1 )); do
  (( num % d == 0 )) && lph=$d
  while (( num % d == 0 )); do (( num = num / d )); done
  (( d++ ))
done

echo $lph
