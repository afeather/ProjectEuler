#!/bin/bash

function isPrime() {
  local num=$1
  local i

  (( num <= 1 )) && return 1
  (( num <= 3 )) && return 0

  (( num % 2 == 0 )) && return 1
  (( num % 3 == 0 )) && return 1

  for (( i = 5; i * i <= num; i += 6 )); do
    (( num % i == 0 )) && return 1
    (( num % (i+2) == 0 )) && return 1
  done
  return 0
}

