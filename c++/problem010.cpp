#include <iostream>
#include <vector>
#include "util.h"

// problem010.cpp
// Find the sum of all the primes below two million.

template <class T>
T sumVector(std::vector<T> &v) {
	T sum = 0;
	for (auto& i : v) { sum += i; }	
	return sum;
}

int main() {

	long limit = 2e6;
	std::vector<long> primes;
	incrementalSieve(limit, primes);
	
	std::cout << sumVector(primes) << std::endl;
	return 0;
}
