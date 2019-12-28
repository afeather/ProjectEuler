#!/bin/bash

# What is the 10 001st prime number?

source util/primes.sh

prime=3; count=1

while true; do
  isPrime $prime && (( count++ )) && (( count >= 10001 )) && break
  (( prime = prime + 2 ))
done

echo $prime
