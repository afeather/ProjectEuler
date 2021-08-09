#include <iostream>
#include <vector>
#include "util.h"

// problem005.cpp
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

int main() {

	int limit = 20;
	std::vector<long> sieve;
	simpleSieve(limit, sieve);
	
	int result = 1;
	for (long prime : sieve) {
		long mult = prime;
		while (mult * prime < limit) { mult *= prime; }
		result *= mult;
	}

	std::cout << result << std::endl;
	return 0;

}
