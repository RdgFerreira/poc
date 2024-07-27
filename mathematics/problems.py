# =====================================================================================

"""
1 - Back to High School Physics (ProblemId 1197, difficulty 1/10):

A particle has initial velocity and constant acceleration. 
If its velocity after certain time is v then what will its displacement be in twice of that time?

Input
The input will contain two integers in each line. Each line makes one set of input. 
These two integers denote the value of v (-100 ≤ v ≤ 100) and t(0 ≤ t ≤ 200) ( t means at the time the particle gains that velocity). 
The end of the input is determined by EOF.

Output
For each line of input print a single integer in one line denoting the displacement in double of that time.

Input Sample:
0 0
5 12

Output Sample:
0
120
"""

def back_to_high_school_physics():
    import sys
    for line in sys.stdin:
        v, t = map(int, line.split())
        print(2 * v * t)

if __name__ == '__main__':
    back_to_high_school_physics()


# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
2 - Brick Game (ProblemId 1436, difficulty 2/10):

There is a village in Bangladesh, where brick game is very popular. 
Brick game is a team game. Each team consists of odd number of players.
Number of players must be greater than 1 but cannot be greater than 10.
Age of each player must be within 11 and 20. No two players can have the same age. 
There is a captain for each team. 
The communication gap between two players depends on their age difference, i.e. the communication gap is larger if the age difference is larger. 
Hence they select the captain of a team in such a way so that the number of players in the team who are younger than that captain is equal to the number of players who are older than that captain.

Ages of all members of the team are provided. You have to determine the age of the captain.

Input
Input starts with an integer T (T ≤ 100), the number of test cases. 
Each of the next T lines will start with an integer N (1 < N < 11), 
number of team members followed by N space separated integers representing ages of all of the members of a team. 
Each of these N integers will be between 11 and 20 (inclusive). 
Note that, ages will be given in strictly increasing order or strictly decreasing order. 
We will not mention which one is increasing and which one is decreasing, you have to be careful enough to handle both situations.

Output
For each test case, output one line in the format “Case x: a” (quotes for clarity), where x is the case number and a is the age of the captain.

Sample Input:
2
5 19 17 16 14 12
5 12 14 16 17 18

Sample Output:
Case 1: 16
Case 2: 16
"""

def brick_game():
    T = int(input())
    for i in range(T):
        N, *ages = map(int, input().split())
        print(f'Case {i + 1}: {ages[N // 2]}')
    
if __name__ == '__main__':
    brick_game()


# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
3 - Blobs (ProblemId 1170, difficulty 3/10):

On the planet Alpha lives the creature Blobs, that eats just half of its supply of food available all day. 
Write an algorithm that reads the initial capacity of the food supply (in Kg), 
and calculate how many days will pass before Blobs eat all this supply until left a kg or less.

Input
The first line of the input contains a single integer N (1 ≤ N ≤ 1000), 
indicating the number of test cases. Each test case contains a single floating-point number X (1 ≤ X ≤ 1000), 
indicating the amount of food available for Blobs.

Output
For each test case, print one line containing the number of days that blobs will take to eat all their food supply, 
followed by the word "dias" that means days in portuguese.

Input Sample:
3
40.0
200.0
300.0

Output Sample:
6 dias
8 dias
9 dias
"""

def blobs():
    N = int(input())
    for _ in range(N):
        X = float(input())
        days = 0
        while X > 1:
            X /= 2
            days += 1
        print(f'{days} dias')

if __name__ == '__main__':
    blobs()



# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
4 - Grains in a Chess Board (ProblemId 1169, difficulty 4/10):

A queen requested the services of a monk and told him she would pay any price. 
The monk, needing food, asked the queen if the payment could be made in wheat grains arranged in a chessboard, 
so that in the first square it would be put only one grain, and in the subsequent squares twice as much as its previous square. 
The queen considered it a bargain and asked to the service be done. 
However, one of the riders who was present was good in math and warned that it would be impossible to execute the payment, 
because the amount of grain needed would be very high. 
The Queen then asked this gentleman who was good in calculation to develop a program that receives as input the 
number of squares to be used in a checkerboard and informs the amount of corresponding kg of wheat, 
knowing that 12 grains of the cereal correspond to one gram. 
Finally, the calculated amount should fit into an unsigned 64-bit integer number.

Input
The first line of the input contains a single integer N (1 ≤ N ≤ 100), 
indicating the number of test cases. Each test case contains a single integer X (1 ≤ X ≤ 64), 
indicating the number of possible squares to be used.

Output
For each test case, print the quantity expected to be received by the monk, according to the following example.

Input Sample:
3
7
19
14

Output Sample:
0 kg
43 kg
1 kg
"""

def grains_in_chessboard(test_cases):
    results = []
    for squares in test_cases:
        # Calculate the total number of grains
        total_grains = (1 << squares) - 1  # 2^squares - 1
        
        # Convert grains to kilograms
        grams = total_grains // 12
        kilograms = grams // 1000
        
        results.append(f"{kilograms} kg")
    
    return results

# Read input
n = int(input())
test_cases = [int(input()) for _ in range(n)]

# Get results
results = grains_in_chessboard(test_cases)

# Print results
for result in results:
    print(result)


# Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
5 - Factorial Sum (ProblemId 1161, difficulty 5/10):

Read two numbers M and N indefinitely. 
Calculate and write the sum of their factorial. 
Be carefull, because the result can have more than 15 digits.

Input
The input file contains many test cases. 
Each test case contains two integer numbers M (0 ≤ M ≤ 20) and N (0 ≤ N ≤ 20). 
The end of file is determined by eof.

Output
For each test case in the input your program must print a single line, containing a number that is the sum of the both factorial (M and N).

Input Sample:
4 4
0 0
0 2

Output Sample:
48
2
3
"""

def factorial_sum():
    import sys
    for line in sys.stdin:
        M, N = map(int, line.split())
        print(factorial(M) + factorial(N))

def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

if __name__ == '__main__':
    factorial_sum()

# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
6 - Fast Prime Number (ProblemId 1221, difficulty 6/10):

Mary knows that a Prime Number is a number that is divisible only by 1 (one) and by itself. 
For example the number 7 is Prime, because it can be divided only by 1 and by 7. 
So she asked you to write a program that reads many numbers ​​and inform if each one of these numbers are prime or not. 
But Patience is not one of the virtues of Mariazinha, so she wants that the execution of all test cases (instances) 
created by herself happen at the maximum in one second, because she hates waiting :>).

Input
The first input line contains an integer N (1 ≤ N ≤ 200), corresponding to the number of test cases. 
Follow N lines, each one containig one integer number X (1 < X < 231) that can be or not a prime number

Output
For each test case output the message “Prime” or “Not Prime” according to the to following example.

Sample Input:
3
123321
123
103

Sample Output:
Not Prime
Not Prime
Prime
"""

def fast_prime_number(test_cases):
    results = []
    for number in test_cases:
        if is_prime(number):
            results.append("Prime")
        else:
            results.append("Not Prime")
    
    return results

def is_prime(n):
    if n == 1:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    
    i = 3
    while i * i <= n:
        if n % i == 0:
            return False
        i += 2
    
    return True

# Read input
n = int(input())
test_cases = [int(input()) for _ in range(n)]

# Get results
results = fast_prime_number(test_cases)

# Print results
for result in results:
    print(result)


# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
7 - Angry Ducks (ProblemId 1163, difficulty 7/10):

In a far away land there are two cities, Nlogony, home of the Nlogonies, and Ducklogony, 
home of their neighbors, the Ducknese. These two cities have been at war for some time and now, in a try to win the war, 
the Ducknese intend to attack Nlogony with a slingshot that fires ducks. 
However, to avoid mistakes, they asked you to build a program that, given the values of the slingshot's height (h), 
the points where the Nlogony city begins (p1) and ends (p2), the shooting angle (α) and the launching speed, calculates 
if the projectile will hit the target.

For the calculations, assume that the gravity's acceleration is g=9,80665 and that π = 3,14159.

Input
There are various test cases, where each one starts with 1 floating point value h(1 ≤ h ≤ 150) indicating the slingshot's height, 
containing, in the next line, 2 integer values p1 and p2( 1 ≤ p1, p2 ≤ 9999) indicating where Nlogony begins and ends, 
the next line containing 1 integer n(1 ≤ n ≤ 100) indicating the number of tries that 
will be made to hit the Nlogony and the n following lines containing 2 floating point values indicating 
the values of the launching's angle α(1 ≤ α ≤ 180) and speed V(1 ≤ V ≤ 150).

The end of the input file is determined by EOF.

Output
For each shoot, your program must print a single line in the following format: “X -> DUCK” for when the duck hits Nlogony or “X -> NUCK” where the duck doesn't hit Nlogony, where X is the maximum distance that the projectile reached until reaching the ground (y = 0). X must be printed with an accuracy of 5 decimal places.

Input Sample:
2.1
368 380
3
42.3 60
30 55
44 60.876842

Output Sample:
367.76208 -> NUCK
270.72675 -> NUCK
379.83781 -> DUCK
"""

import math
import sys

# Constants
g = 9.80665
pi = 3.14159

def calculate_distance(h, alpha, V):
    # Convert angle to radians
    alpha_rad = alpha * pi / 180
    # Calculate the distance
    distance = (V * math.cos(alpha_rad) / g) * (V * math.sin(alpha_rad) + math.sqrt((V * math.sin(alpha_rad))**2 + 2 * g * h))
    return distance

def main():
    input = sys.stdin.read
    data = input().strip().split()
    
    index = 0
    while index < len(data):
        h = float(data[index])
        index += 1
        p1 = int(data[index])
        p2 = int(data[index + 1])
        index += 2
        n = int(data[index])
        index += 1
        
        for _ in range(n):
            alpha = float(data[index])
            V = float(data[index + 1])
            index += 2
            
            distance = calculate_distance(h, alpha, V)
            if p1 <= distance <= p2:
                print(f"{distance:.5f} -> DUCK")
            else:
                print(f"{distance:.5f} -> NUCK")

if __name__ == "__main__":
    main()



# Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
8 - Digits Count (ProblemId 1138, difficulty 8/10):

Diana is going to write a list of all positive integers between A and B, inclusive, 
in base 10 and without any leading zeros. She wants to know how many times each digit is going to be used.

Input
Each test case is given in a single line that contains two integers A and B (1 ≤ A ≤ B ≤ 108). 
The last test case is followed by a line containing two zeros.

Output
For each test case print a single line with 10 integers representing 
the number of times each digit is used when writing all integers between A and B, inclusive, in base 10 and without leading zeros. 
Write the counter for each digit in increasing order from 0 to 9.

Input Sample:
1 9
12 321
5987 6123
12345678 12345679
0 0

Output Sample:
0 1 1 1 1 1 1 1 1 1
61 169 163 83 61 61 61 61 61 61
134 58 28 24 23 36 147 24 27 47
0 2 2 2 2 2 2 2 1 1
"""

def count_digits_up_to(N):
    if N < 0:
        return [0] * 10
    digit_count = [0] * 10
    factor = 1
    while factor <= N:
        lower_numbers = N - (N // factor) * factor
        current_digit = (N // factor) % 10
        higher_numbers = N // (factor * 10)
        
        for i in range(10):
            digit_count[i] += higher_numbers * factor
        
        for i in range(current_digit):
            digit_count[i] += factor
        
        digit_count[current_digit] += lower_numbers + 1
        
        digit_count[0] -= factor
        factor *= 10
    
    return digit_count

def count_digits_in_range(A, B):
    count_B = count_digits_up_to(B)
    count_A_minus_1 = count_digits_up_to(A - 1)
    return [count_B[i] - count_A_minus_1[i] for i in range(10)]

def main():
    import sys
    input = sys.stdin.read
    data = input().strip().split('\n')
    
    results = []
    for line in data:
        A, B = map(int, line.split())
        if A == 0 and B == 0:
            break
        results.append(count_digits_in_range(A, B))
    
    for result in results:
        print(' '.join(map(str, result)))

if __name__ == "__main__":
    main()



# Correct answer with: 3 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
9 - Array Transformer (ProblemId  1399, difficulty 9/10):

Write a program to transform an array A[1], A[2],..., A[n] according to m instructions. Each instruction (L, R, v, p) means: 
First, calculate how many numbers from A[L] to A[R] (inclusive) are strictly less than v, call this answer k. Then, change the value of A[p] to u*k/(R - L + 1), 
here we use integer division (i.e. ignoring fractional part).

Input
The first line of input contains three integer n, m, u ( 1 ≤ n ≤ 300,000, 1 ≤ m ≤ 50,000, 1 ≤ u ≤ 1,000,000,000). 
Each of the next n lines contains an integer A[i](1 ≤ A[i] ≤ u). Each of the next m lines contains an instruction consisting of 
four integers L, R, v, p ( 1 ≤ L ≤ R ≤ n, 1 ≤ v ≤ u, 1 ≤ p ≤ n).

Output
Print n lines, one for each integer, the final array.

Sample Input:
10 1 11
1
2
3
4
5
6
7
8
9
10
2 8 6 10

Sample Output:
1
2
3
4
5
6
7
8
9
6
"""

from bisect import bisect_left, insort, bisect_right

def transform_array(n, m, u, array, instructions):
    for L, R, v, p in instructions:
        # Extract the subarray and sort it
        subarray = sorted(array[L-1:R])
        # Count how many numbers in subarray are strictly less than v using binary search
        k = bisect_left(subarray, v)
        # Calculate the new value for A[p-1]
        new_value = u * k // (R - L + 1)
        # Update A[p-1]
        array[p-1] = new_value
    return array

# Read input
import sys
input = sys.stdin.read
data = input().split()

# Parse input
n = int(data[0])
m = int(data[1])
u = int(data[2])
array = [int(data[i + 3]) for i in range(n)]
instructions = [(int(data[i]), int(data[i + 1]), int(data[i + 2]), int(data[i + 3])) for i in range(n + 3, len(data), 4)]

# Transform the array
result = transform_array(n, m, u, array, instructions)

# Print the result
for value in result:
    print(value)

# Correct answer with: 6 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
10 - Fibonacci Again! (ProblemId 1531, difficulty 10/10):

The famous Fibonacci sequence can be defined as follows:

Fib( 1 ) = Fib( 2 ) = 1
Fib( N ) = Fib( N-1 ) + Fib( N-2 ), for N > 2
Your task is simple, calculate the value of the remainder of Fib ( Fib ( N ) ) divided by M.

Input
The input consists of several test cases and ends with EOF. Each test case consists of a line with two integers N and M (1 ≤ N ≤ 109, 2 ≤ M ≤ 106).

Output
For each test case, print a line containing an integer equal to the remainder of Fib ( Fib ( N ) ) divided by M.

Sample Input:
1 100
2 100
3 100
4 100
5 100
5 2
6 100

Sample Output:
1
1
1
2
5
1
21
"""

def fibonacci_again(n, m):
    def fibonacci(n):
        a, b = 0, 1
        for _ in range(n):
            a, b = b, a + b
        return a
    
    return fibonacci(fibonacci(n)) % m

# Read input
import sys
input = sys.stdin.read
data = input().strip().split()

# Parse input
test_cases = [(int(data[i]), int(data[i + 1])) for i in range(0, len(data), 2)]

# Get results
results = [fibonacci_again(n, m) for n, m in test_cases]

# Print results
for result in results:
    print(result)

# Time limit exceeded with: 5 changes after copilot and/or copilot chat and 0 manual changes