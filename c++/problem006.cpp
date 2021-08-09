#include <iostream>

// problem006.cpp
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

int main() {

	int sumSquare = 100 * 101 * 201 / 6;
	int squareSum = (100 * 99 / 2) * (100 * 99 / 2);
	
	int diff = sumSquare > squareSum ? sumSquare - squareSum : squareSum - sumSquare;

	std::cout << diff << std::endl;

	return 0;
}

