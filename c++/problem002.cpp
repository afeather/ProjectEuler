#include <iostream>

// problem001.cpp
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

void next(int &a, int &b) {
  int c = a + b;
  
  a = b;
  b = c;
}

int main() {
	int a = 0, b = 1;
  int sum = 0;

	while ( b < 4000000 ) {
		if ( b % 2 == 0 ) {
			sum += b;
		}

		next(a, b);
	}
  
	std::cout << sum << std::endl;
  return 0;
}
