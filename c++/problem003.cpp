#include <iostream>
#include <cmath>

// problem003.cpp
// What is the largest prime factor of the number 600851475143

long removeFactors(long n, long d) {
	while ( n % d == 0 ) { n = n / d; }
	return n;
}

int main() {

	long num = 600851475143;

	num = removeFactors(num, 2);
	if ( num == 1 ) { std::cout << 2 << std::endl; return 0; }

	num = removeFactors(num, 3);
	if ( num == 1 ) { std::cout << 3 << std::endl; return 0; }

	for (long k = 6; num > 1; k += 6) {
		num = removeFactors(num, k + 1);
		if ( num == 1 ) { std::cout << k + 1 << std::endl; return 0; }
		
		num = removeFactors(num, k - 1);
		if ( num == 1 ) { std::cout << k - 1 << std::endl; return 0; }
	}
  
  return 1;
}
