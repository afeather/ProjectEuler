#include <iostream>
#include "util.h"

// problem009.cpp
// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

int main() {

	int a = 0, b = 0, c = 0;
	
	for (int m = 2; c < 1000; m++) {
		for (int n = m % 2 + 1; n < m; n += 2) {
			if (gcd(m,n) == 1) {
				a = m * m - n * n;
				b = 2 * m * n;
				c = m * m + n * n;
				
				int ka = a, kb = b, kc = c;
				for (int k = 2; ka + kb + kc < 1000; k++) {
					ka = k * a;
					kb = k * b;
					kc = k * c;
				}
			
				if (ka + kb + kc == 1000) {	
					std::cout << ka * kb * kc << std::endl;
					return 0;
				}
			}
		}
	}

	return 1;
}
