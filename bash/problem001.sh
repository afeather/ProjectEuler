#!/bin/bash

sum=0

for i in {1..999}; do
  ( (( i % 3 == 0 )) || (( i % 5 == 0 )) ) && (( sum = sum + i ))
done

echo $sum

