#include <iostream>

// problem001.cpp
// Find the sum of all the multiples of 3 or 5 below 1000.

// for i in 1...l: sum += n * i
inline int sum(int n, int l) {
	return l * ( n * l + n ) / 2;
}

int main() {
	// sum of multiples of 3 + sum of multiples of 5 - sum of multiples of 15
	std::cout << sum(3, 999 / 3) + sum(5, 999 / 5) - sum(15, 999 / 15) << std::endl;
	return 0;
}
