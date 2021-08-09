#include <iostream>
#include <vector>
#include <cmath>

void simpleSieve(long limit, std::vector<long> &primes) {
	std::vector<bool> isPrime(limit + 1, true);
	
	for (long i = 2; i * i < limit; i++) {
		if (isPrime[i]) {
			for (long j = i * i; j <= limit; j += i) { isPrime[j] = false; }
		}
	}
	
	for (int p = 2; p <= limit; p++) {
		if (isPrime[p]) { primes.push_back(p); }
	}
}

void segmentedSieve(long limit, std::vector<long> &primes) {

	long segmentSize = floor(sqrt(limit));
	simpleSieve(segmentSize, primes);
	
	for (long segment = 1; segmentSize * segment < limit; segment++) {
	
		long low = segment * segmentSize + 1;
		long high = (segment + 1) * segmentSize;
		
		std::vector<bool> isPrime(segmentSize, true);
		for (long p : primes) {
			for (long j = p; j <= high; j += p) { if (j >= low) { isPrime[j - low] = false; }}
		}
		
		for (long p = low; p <= high; p++) { if (isPrime[p - low]) { primes.push_back(p);}}
	}
}

void extendSieve(long n, std::vector<long> &primes, std::vector<long> &multiples) {
	bool isPrime = true;
	
	for (long i = 1; i < primes.size(); i++) {
		long &prime = primes[i], &multiple = multiples[i];
		
		if (prime * prime > n) { break; }
		
		while (multiple < n) { multiple += prime; }
		if (multiple == n) { isPrime = false; break; }
	}
	
	if (isPrime) { primes.push_back(n); multiples.push_back(n); }
}

void incrementalSieve(long limit, std::vector<long>& primes) {

	primes.push_back(2);
	primes.push_back(3);
	std::vector<long> multiples {0, 3};
	
	for (long n = 5; n < limit; n += 2) { extendSieve(n, primes, multiples); }
}

long nthPrime(long n) {
	if (n == 1) { return 2; }
	if (n == 2) { return 3; }
	
	std::vector<long> primes {2, 3};
	std::vector<long> multiples {0, 3};
	
	long i = 5;
	while (primes.size() < n) { extendSieve(i, primes, multiples); i += 2; }
	
	return primes.back();
}

int gcd(int a, int b) {
	int t;
	while (b > 0) {
		t = b; b = a % b; a = t;
	}
	
	return a;
}

