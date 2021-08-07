# By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

from itertools import takewhile
from util import fib

print(sum(num for num in takewhile(lambda x: x < 4000000, fib()) if num % 2 == 0))
