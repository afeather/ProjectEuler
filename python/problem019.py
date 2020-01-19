# How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

from datetime import date
start, end = date(1901, 1, 6), date(2001, 1, 1)

print(len(filter(lambda d: d.day == 1, [date.fromordinal(d) for d in range(start.toordinal(), end.toordinal(), 7)])))

