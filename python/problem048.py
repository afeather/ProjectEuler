# Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000

from functools import reduce
print(reduce(lambda x, y: (x + y) % 10 ** 10, (i ** i for i in range(1, 1001))))
