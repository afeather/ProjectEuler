#!/bin/bash

# There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

# a = (m**2 - n**2)
# b = 2mn
# c = (m**2 + n**2)

# (m**2 + n**2) < 1000
# m < sqrt(1000) < 32
# n < sqrt(1000) < 32

for m in {1..32}; do
  for n in {1..32}; do
    a=$(( m*m - n*n )) && (( a > 0 )) || continue
    b=$(( 2 * m * n )) && (( b > 0 )) || continue
    c=$(( m*m + n*n )) && (( c > 0 )) || continue
    (( a + b + c == 1000 )) && echo $(( a * b * c ))
  done
done
     
