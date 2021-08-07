#include <iostream>
#include <string>

// problem004.cpp
// Find the largest palindrome made from the product of two 3-digit numbers

bool isPalindrome(std::string str) {
	for (int i = 0, len = str.length(); i < len; i++) {
		if (str[i] != str[len - 1 - i]) { return false; }
	}
	return true;
}

int main() {
	int max = 0;

	for (int i = 100, j = 100, num; i < 1000; j < 1000 ? i : i++, j < 1000 ? j++ : j = 100) {
		num = i * j;
		if (num > max && isPalindrome(std::to_string(num))) {max = num;}
	}

	std::cout << max << std::endl;
	return 0;
}

