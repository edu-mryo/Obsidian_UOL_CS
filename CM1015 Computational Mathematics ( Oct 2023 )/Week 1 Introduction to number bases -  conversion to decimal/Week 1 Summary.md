- The word digit itself comes from Latin, it means **finger**.
- The number system we are familiar with are called Decimal, which consist of 10 numbers (0 - 10)
	- 10 is not a set of number but is a combination of 1 and 0. 
- In the world of IT , Binary and Hexadecimal are used for processing information
	- Binary  -> 0 and 1
		- 0, 1, 10, 11, 100,101,110,111 ....
	- Hexadecimal 
		- 0,1.....9,A,B,C,D,E,F

### Conversion
- We can convert numbers from binary to decimal and vice versa. 
- Converting **binary** to **decimal**: 1001 to base 10
	- 1x2^3 + 0x2^2 + 0x2^1 + 1x2^0 = 9 in base 10
		- Note: 2^0 does not mean 0 but is 1 
		- Tips : When you convert binary to decimal, count the number of binary and do the conversion calculation with n-1 
			- eg : Converting 111 --> (3 numbers - 1) = 2 --> 1 x 2^2 + 1 x 2^1 + 1 x 2^0 = 7
 -  Converting **hexadecimal** to **decimal**: 1F in base 16
	- 1x16^1 + 15x16^0 = 31 in base 10
- Converting **decimal** to **binary/hexadecimal** etc
	- Repeated division 
	- eg : Converting 7 to base 2 
		- 7/2 = 3r1
		- 3/2 = 1r1
		- 1/2 = 0r1
			- Read from bottom = 111
	- eg : Converting 100 to base 8
		- 100/8 =  12r4
		- 12/8 =  1r4
		- 1/8 = 0r1
			- Read from bottom = 144

639/2 = 319r1
319/2 = 159r1
159/2 = 79r1
79/2 = 39r1
39/2 = 19r1
19/2 = 9r1
9/2 = 4r1
4/2 = 2r0
2/2 = 1r0
1/2 = 1

558/8 = 6