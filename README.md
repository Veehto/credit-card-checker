# credit-card-checker
A program that checks credit cards validity by using Luhn algorithm.

There are 15 arrays that each contain the digits of separate credit card numbers. They all have prefixes to reflect their status, 
i.e. variables that start with valid contain a valid number, whereas invalid do not, and mystery variables can be either. 
There is also a batch array that stores all of the provided credit cards in a single array.

The program is integrated by individual functions that achieve different purposes:

* validateCred() returns true when an array contains digits of a valid credit card number and false when it is invalid.
To find out if a credit card number is valid or not, use the Luhn algorithm.

  The calculations in the Luhn algorithm can be broken down as the following steps:
	
		a. Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
		
		b. As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
		
		c. Sum up all the digits in the credit card number.
		
		d. If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.

* findInvalidCards() checks through the nested array for which numbers are invalid, and return another nested array of invalid cards.

* idInvalidCardCompanies() identifies the credit card companies that have possibly issued these faulty numbers, returns an array of companies that have mailed out cards with invalid numbers.
  
* stringToNumArr() accepts a string and converts it into an array of numbers like the initially provided arrays.
