# How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

from datetime import timedelta
from datetime import datetime

start = datetime(1901, 1, 6)
end = datetime(2000, 12, 31)

day = timedelta(1)
week = timedelta(7)

count = 0

while start <= end:
    if start.weekday() == 6 and start.day == 1:
        count += 1
        start = start + week
    else:
        start = start + day
    
    
print count
