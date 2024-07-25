# =====================================================================================

"""
1 - Rich of Chimarrão (ProblemId 3357, difficulty 5/10):

Yerba mate (Ilex paraguariensis) is a plant native to South America used to prepare one of the most typical and 
appreciated drinks in a large part of southern Brazil, the chimarrão. Typically consumed in a shared form, the 
participants form a circle and pass the gourd from hand to hand: after drinking the tea inside, a circle member 
fills the gourd and gives it to the next one.

Because of its strong cultural presence, several beliefs and legends are associated with the chimarrão circle; 
one relates to the gourd that takes the last water from the thermos. According to the belief, the person who receives 
this last gourd will become rich, perhaps as a consolation, because this person usually receives less tea.

Knowing this belief, an avid programmer and chimarrão drinker decided to make a program to help figure out who will be the 
chimarrão's rich and how much tea the person will drink. To do so, the programmer considers the volume L of water in the thermos, 
the amount Q of water that fits in a gourd, and the people in the circle.

Input
The input starts with the number N (0 < N ≤ 10) of people in the circle. Followed by a floating-point L 
corresponding to the number of liters of water that fit in the thermos (0.0 < L ≤ 20.0) and the number Q (0.0 < Q < 1.0) of 
liters of water that fills the gourd. On the following line, the entry contains the names of the participants separated by
spaces in the order they receive the gourd. Each name will have up to 12 characters of the Portuguese alphabet (26 letters). 
The values of L and Q are given with exactly one place after the decimal point.

Output
The output should print the participant's name, the rich of chimarrão, and the amount of water in liters that they will 
drink from the last gourd, with precisely one place after the decimal point.

Input Sample
3 3.5 0.3
Maria Juca Bob

Output Sample
Bob 0.2
"""

def find_chimarrao_rich():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    N = int(data[0])
    L = float(data[1])
    Q = float(data[2])
    participants = data[3:]
    
    # Calculate the number of full gourds
    full_gourds = int(L // Q)
    
    # Determine the index of the last person
    last_person_index = full_gourds % N
    
    # Calculate the remaining water in the last gourd
    remaining_water = L - (full_gourds * Q)
    
    # If there's no remaining water, the last person gets a full gourd
    if remaining_water == 0:
        remaining_water = Q
        last_person_index = (last_person_index - 1) % N
    
    # Get the name of the last person
    last_person = participants[last_person_index]
    
    # Print the result
    print(f"{last_person} {remaining_water:.1f}")

def main():
    find_chimarrao_rich()

if __name__ == "__main__":
    main()

# Correct answer with: 4 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
2 - I Can Guess the Data Structure! (ProblemId 1340, difficulty 2/10):

There is a bag-like data structure, supporting two operations:

1 x
Throw an element x into the bag.

2
Take out an element from the bag.

Given a sequence of operations with return values, you're going to guess the data structure. 
It is a stack (Last-In, First-Out), a queue (First-In, First-Out), a priority-queue 
(Always take out larger elements first) or something else that you can hardly imagine!

Input
There are several test cases. Each test case begins with a line containing a single integer n (1 <= n <= 1000). 
Each of the next n lines is either a type-1 command, or an integer 2 followed by an integer x. 
That means after executing a type-2 command, we get an element x without error. 
The value of x is always a positive integer not larger than 100. The input is terminated by end-of-file (EOF). 
The size of input file does not exceed 1MB.

Output
For each test case, output one of the following:

stack
It's definitely a stack.

queue
It's definitely a queue.

priority queue
It's definitely a priority queue.

impossible
It can't be a stack, a queue or a priority queue.

not sure
It can be more than one of the three data structures mentioned above.

Sample Input
6
1 1
1 2
1 3
2 1
2 2
2 3
6
1 1
1 2
1 3
2 3
2 2
2 1
2
1 1
2 2
4
1 2
1 1
2 1
2 2
7
1 2
1 5
1 1
1 3
2 5
1 4
2 4

Sample Output
queue
not sure
impossible
stack
priority queue
"""

import sys
import heapq

def guess_data_structure(operations):
    stack = []
    queue = []
    priority_queue = []
    is_stack = True
    is_queue = True
    is_priority_queue = True

    for op in operations:
        if op[0] == 1:
            x = op[1]
            stack.append(x)
            queue.append(x)
            heapq.heappush(priority_queue, -x)
        elif op[0] == 2:
            x = op[1]
            if is_stack:
                if stack and stack[-1] == x:
                    stack.pop()
                else:
                    is_stack = False
            if is_queue:
                if queue and queue[0] == x:
                    queue.pop(0)
                else:
                    is_queue = False
            if is_priority_queue:
                if priority_queue and -heapq.heappop(priority_queue) == x:
                    pass
                else:
                    is_priority_queue = False

    if is_stack and not is_queue and not is_priority_queue:
        return "stack"
    elif not is_stack and is_queue and not is_priority_queue:
        return "queue"
    elif not is_stack and not is_queue and is_priority_queue:
        return "priority queue"
    elif not is_stack and not is_queue and not is_priority_queue:
        return "impossible"
    else:
        return "not sure"

def main():
    input = sys.stdin.read().strip().split('\n')
    index = 0
    results = []

    while index < len(input):
        n = int(input[index])
        index += 1
        operations = []
        for _ in range(n):
            line = list(map(int, input[index].split()))
            operations.append(line)
            index += 1
        results.append(guess_data_structure(operations))

    for result in results:
        print(result)

if __name__ == "__main__":
    main()



# Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
3 - Diamonds and Sand (ProblemId 1069, difficulty 3/10):

John is working in a diamond mine, trying to extract the highest number of diamond "<>". 
He must exclude all sand particles found "." in this process and after a diamond can be extracted, new diamonds can be formed. 
If he has as an input. <... << .. >> ....> .... >>>. three diamonds are formed. The first is taken from <..> resulting. <... <> ....> .... >>>. 
The second diamond is then removed, leaving. <.......> .... >>>. 
The third diamond is then removed, leaving at the end ..... >>>. 
without the possibility of extracting new diamonds.

Input
Read an integer N that is the number of test cases. Then follows N lines each up to 1000 characters, including "<" ,">" and "."

Output
You must print the amount of diamonds that can be extrated in each test case.

Input Sample	
2
<..><.<..>>
<<<..<......<<<<....>

Output Sample
3
1
"""

def count_diamonds(test_cases):
    results = []
    for case in test_cases:
        stack = []
        diamonds = 0
        for char in case:
            if char == '<':
                stack.append(char)
            elif char == '>' and stack:
                stack.pop()
                diamonds += 1
        results.append(diamonds)
    return results

# Read input
N = int(input())
test_cases = [input().strip() for _ in range(N)]

# Get the results
results = count_diamonds(test_cases)

# Print the results
for result in results:
    print(result)


# Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
4 - Sort by Length (ProblemId 1244, difficulty 4/10):

Create a program to sort a set of strings by their size. 
Its program is to receive a set of strings and return by this same size ordered set of words, 
if the size of the strings are equal, must maintain the original order of the set.

Input
The first line of input has a unique integer N that indicates the number of sets of strings, 
each set may contain between 1 and 50 inclusive elements, and each of the strings of the set 
may contain between 1 and 50 inclusive characters.

Output
The output should contain the set of input strings ordered by the length of strings.A blank space must be printed between two words.

Sample Input:

4
Top Coder comp Wedn at midnight
one three five
I love Cpp
sj a sa df r e w f d s a v c x z sd fd

Sample Output:

midnight Coder comp Wedn Top at
three five one
love Cpp I
sj sa df sd fd a r e w f d s a v c x z
"""

def sort_strings_by_length():
    import sys
    input = sys.stdin.read
    data = input().strip().split('\n')
    
    N = int(data[0])
    sets_of_strings = data[1:N+1]
    
    for string_set in sets_of_strings:
        words = string_set.split()
        sorted_words = sorted(words, key=lambda x: (len(x), words.index(x)))
        print(" ".join(sorted_words))

if __name__ == "__main__":
    sort_strings_by_length()


# 95% Correct answers with: 4 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
5 - Parenthesis Balance I (ProblemId 1068, difficulty 5/10):

Considering an expression with parenthesis, print a message informing if the among of parenthesis is correct or incorrect, 
without considering the rest of the expression. Example:


a+(b*c)-2-a        is correct
(a+b*(2-c)-2+a)*2  is correct

when

(a*b-(2+c)         is incorrect
2*(3-a))           is incorrect
)3+b*(2-c)(        is incorrect

Resuming, all closing parenthesis must have an open parenthesis and it's not possible a closing parenthesis without a 
previous open parenthesis, and the quantity of closing and open parenthesis must be the same.

Input
The input file contains N expressions (1 <= N <= 10000), each one with up to 1000 characters. 

Output
The output must be correct or incorrect for each test case according with above rules.

Input Sample:

a+(b*c)-2-a 
(a+b*(2-c)-2+a)*2 
(a*b-(2+c) 
2*(3-a))  
)3+b*(2-c)( 

Output Sample:

correct
correct
incorrect
incorrect
incorrect
"""

def check_parenthesis_balance(expressions):
    results = []
    for expression in expressions:
        stack = []
        for char in expression:
            if char == '(':
                stack.append(char)
            elif char == ')':
                if stack:
                    stack.pop()
                else:
                    results.append("incorrect")
                    break
        else:
            if stack:
                results.append("incorrect")
            else:
                results.append("correct")
    return results

# Read lines until EOF
expressions = []
while True:
    try:
        line = input()
        if line:
            expressions.append(line)
    except EOFError:
        break

# Get the results
results = check_parenthesis_balance(expressions)

# Print the results
for result in results:
    print(result)

# Correct answer with: 1 changes after copilot and/or copilot chat and 1 manual changes

# =====================================================================================

"""
6 - Tell me the Frequencies! (ProblemId 1251, difficulty 6/10):

Given a line of text you will have to find out the frequencies of the ASCII characters present in it. 
The given lines will contain none of the first 32 or last 128 ASCII characters. 
Of course lines may end with ‘\n’ and ‘\r’ but always keep those out of consideration.

Input
Several lines of text are given as input. Each line of text is considered as a single input. 
Maximum length of each line is 1000 characters.

Output
Print the ASCII value of the ASCII characters which are present and their frequency according to the given format below. 
A blank line should separate each set of output. Print the ASCII characters in the ascending order of their frequencies. 
If two characters are present the same time print the information of the ASCII character with higher ASCII value first. 
Input is terminated by end of file.

Sample Input:

AAABBC
122333

Sample Output:

67 1
66 2
65 3

49 1
50 2
51 3
"""

import sys
from collections import Counter

def process_line(line):
    # Count frequencies of each character in the line
    counter = Counter(line)
    
    # Remove newline characters from the counter
    if '\n' in counter:
        del counter['\n']
    if '\r' in counter:
        del counter['\r']
    
    # Sort characters by frequency (ascending) and ASCII value (descending)
    sorted_chars = sorted(counter.items(), key=lambda item: (item[1], -ord(item[0])))
    
    # Print the results
    for char, freq in sorted_chars:
        print(f"{ord(char)} {freq}")

def main():
    input_lines = sys.stdin.read().splitlines()
    
    first_line = True
    for line in input_lines:
        if not first_line:
            print()  # Print a blank line to separate outputs
        process_line(line)
        first_line = False

if __name__ == "__main__":
    main()
    
# Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
7 - Sort! Sort!! And Sort!!! (ProblemId  1252, difficulty 7/10):

Hmm! Here you are asked to do a simple sorting. You will be given N numbers and a positive integer M. 
You will have to sort the N numbers in ascending order of their modulo M value. 
If there is a tie between an odd number and an even number (that is their modulo M value is the same) 
then the odd number will precede the even number. If there is a tie between two odd numbers 
(that is their modulo M value is the same) then the larger odd number will precede the smaller odd number and 
if there is a tie between two even numbers (that is their modulo M value is the same) then the smaller even number 
will precede the larger even number. For remainder value of negative numbers follow the rule of C programming language: 
A negative number can never have modulus greater than zero. E.g. -100 MOD 3 = -1, -100 MOD 4 = 0 etc.

Input
The input file contains many sets of inputs. Each set starts with two integers N (0 < N ≤ 10000) and M (0 < M ≤ 10000) 
which denotes how many numbers are within this set. Each of the next N lines contains one number each. 
These numbers should all fit in 32-bit signed integer. Input is terminated by a line containing two zeroes.

Output
The first line of each set contains the value of N and M. The next N lines contain N numbers, sorted according 
to the rules mentioned above. Print the last two zeroes of the input file in the output file also.

Sample Input
15 3
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
11
12
13
14
15
3 3
9
12
10
0 0

Sample Output
15 3
15
9
3
6
12
13
7
1
4
10
11
5
2
8
14
3 3
9
12
10
0 0
"""

def custom_sort(numbers, M):
    def sort_key(x):
        mod = x % M
        is_odd = x % 2 != 0
        return (mod, not is_odd, -x if is_odd else x)
    
    return sorted(numbers, key=sort_key)

def main():
    import sys
    input = sys.stdin.read
    data = input().strip().split()
    
    index = 0
    result = []
    
    while index < len(data):
        N = int(data[index])
        M = int(data[index + 1])
        index += 2
        
        if N == 0 and M == 0:
            result.append("0 0")
            break
        
        numbers = []
        for _ in range(N):
            numbers.append(int(data[index]))
            index += 1
        
        sorted_numbers = custom_sort(numbers, M)
        result.append(f"{N} {M}")
        result.extend(map(str, sorted_numbers))
    
    print("\n".join(result))

if __name__ == "__main__":
    main()


# 95% Correct answers with: 4 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
8 - Where is the Marble? (ProblemId 1025, difficulty 8/10):

Raju and Meena love to play with Marbles. They have a lot of marbles with numbers written on them. In the beginning, Raju would place the marbles one after another in ascending order of the numbers written on them. Then, Meena would ask Raju to find the first marble with a certain number. She would count 1...2...3. Raju gets one point for correct answer, and Meena gets the point if Raju fails. After some fixed number of attempts, the game ends and the player with maximum points wins. Today it's your chance to play as Raju. Being a smart kid, you have in your advantage the computer. But don't underestimate Meena, she wrote a program to keep track how much time you're taking to give all the answers. So now you have to write a program, which will help you in your role as Raju.

Input
There can be multiple test cases. The total number of test cases is less than 65. Each test case consists begins with 2 integers: N the number of marbles and Q the number of queries Meena would make. The next N lines would contain the numbers written on the N marbles. These marble numbers will not come in any particular order. Following Q lines will have Q queries. Be assured, none of the input numbers are greater than 10000 and none of them are negative.

Input is terminated by a test case where N = 0 and Q = 0.
Output
For each test case output there must be a serial number of the test case. For each query, write one line of output. The format of this line will depend on whether the number is consulted or not written in one of the marbles.

The two different formats are described below:
'x found at y', if the first marble with number x was found at position y. Positions are numbered 1, 2,..., N.
'x not found', if the marble with number x is not present.

Input Sample:
4 1
2
3
5
1
5
5 2
1
3
3
3
1
2
3
0 0

Output Sample:
CASE# 1:
5 found at 4
CASE# 2:
2 not found
3 found at 3
"""

def find_first_occurrence(marbles, query):
    low, high = 0, len(marbles) - 1
    result = -1
    while low <= high:
        mid = (low + high) // 2
        if marbles[mid] == query:
            result = mid
            high = mid - 1  # Look for earlier occurrences
        elif marbles[mid] < query:
            low = mid + 1
        else:
            high = mid - 1
    return result

def solve():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    case_number = 1
    
    while True:
        N = int(data[index])
        Q = int(data[index + 1])
        index += 2
        
        if N == 0 and Q == 0:
            break
        
        marbles = []
        for _ in range(N):
            marbles.append(int(data[index]))
            index += 1
        
        marbles.sort()
        
        queries = []
        for _ in range(Q):
            queries.append(int(data[index]))
            index += 1
        
        print(f"CASE# {case_number}:")
        for query in queries:
            position = find_first_occurrence(marbles, query)
            if position != -1:
                print(f"{query} found at {position + 1}")
            else:
                print(f"{query} not found")
        
        case_number += 1

if __name__ == "__main__":
    solve()


# Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
9 - Spurs Rocks (ProblemId 1303, difficulty 9/10):

The San Antonio is the city team in the NBA. It has been the champion of its conference several times and revealed several excellent players.


In a basketball championship all the teams play each other in a single round. 
A win is worth two points and a defeat is worth one point (there are no draws in basketball). 
In case of ties the team with the best "average basket" gets the lead. 
The "average basket"is given by the ratio between the number of 
points scored by the team divided by the number of points received 
(in the unlikely event of a team winning all league games without losing any baskets, 
the basket average is given by the average number of points scored). 
If there is still a tie, the team that scored more points takes advantage. 
And if the ties persists, the team with the lowest number of entried in the league gets a better position.


Your task in this problem is to make a program that receives the results of the games of the championship and prints the final rank.

Input
There are several test cases. For each instance is given the number 0 ≤ n ≤ 100 of teams in the league. 
The value n = 0 indicates the end of dataset. Next there are n (n-1) / 2 lines indicating the results of the matches. 
In each one of these lines there are four integers x, y, z and w. 
The integers x and z belong to the interval {1, 2,. . . , n} and represent the registration numbers of the teams in the league. 
The integers y and w are the number of points the team x and z score in the match described.

Output
For each test case solved, you should print the message "Instancia h" where h is an integer, and increasing sequentially from 1. 
On the next line you should print a permutation of the integers from 1 to n representing the championship rank.
A blank space should be printed between each one of these integers and a blank line must be printed between two outputs (test cases).

Sample Input:
5
1 102 2 62
1 128 3 127
1 144 4 80
1 102 5 101
2 62 3 61
2 100 4 80
2 88 5 82
3 79 4 90
3 87 5 100
4 110 5 99
0

Sample Output:
Instancia 1
1 2 4 5 3
"""

def process_championship():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    instance = 1
    
    while True:
        n = int(data[index])
        index += 1
        if n == 0:
            break
        
        teams = {i: {'points': 0, 'scored': 0, 'received': 0, 'games': 0} for i in range(1, n + 1)}
        
        for _ in range(n * (n - 1) // 2):
            x = int(data[index])
            y = int(data[index + 1])
            z = int(data[index + 2])
            w = int(data[index + 3])
            index += 4
            
            teams[x]['scored'] += y
            teams[x]['received'] += w
            teams[x]['games'] += 1
            teams[z]['scored'] += w
            teams[z]['received'] += y
            teams[z]['games'] += 1
            
            if y > w:
                teams[x]['points'] += 2
                teams[z]['points'] += 1
            else:
                teams[z]['points'] += 2
                teams[x]['points'] += 1
        
        def average_basket(team):
            if teams[team]['received'] == 0:
                return teams[team]['scored']
            return teams[team]['scored'] / teams[team]['received']
        
        ranking = sorted(teams.keys(), key=lambda t: (
            -teams[t]['points'],
            -average_basket(t),
            -teams[t]['scored'],
            teams[t]['games']
        ))
        
        print(f"Instancia {instance}")
        print(" ".join(map(str, ranking)))
        
        instance += 1
        if data[index] != '0':
            print("")

if __name__ == "__main__":
    process_championship()



# Correct answer with: 4 changes after copilot and/or copilot chat and 1 manual changes

# =====================================================================================

"""
10 - Drought (ProblemId 1023, difficulty 10/10):

Due to the continuous drought that happened recently in some regions of Brazil, 
the Federal Government created an agency to assess the consumption of these regions in order to 
verify the behavior of the population at the time of rationing. 
This agency will take some cities (for sampling) and it will verify the consumption of each of the 
townspeople and the average consumption per inhabitant of each town.

Input:
The input contains a number of test's cases. 
The first line of each case of test contains an integer N (1 ≤ N ≤ 1 * 10 6), indicating the amount of properties. 
The following N lines contains a pair of values X (1 ≤ X ≤ 10) and Y ( 1 ≤ Y ≤ 200) indicating the number of residents of each property and 
its total consumption (m3). Surely, no residence consumes more than 200 m3 per month. The input's end is represented by zero.

Output:
For each case of test you must present the message “Cidade# n:”, 
where n is the number of the city in the sequence (1, 2, 3, ...), 
and then you must list in ascending order of consumption, the people's amount followed by a hyphen and the consumption of these people, 
rounding the value down. In the third line of output you should present the consumption per person in that town, with two decimal
places without rounding, considering the total real consumption. Print a blank line between two consecutives test's cases. 
There is no blank line at the end of output.

Input Sample:
3
3 22
2 11
3 39
5
1 25
2 20
3 31
2 40
6 70
2
1 1
3 2
0

Output Sample:
Cidade# 1:
2-5 3-7 3-13
Consumo medio: 9.00 m3.

Cidade# 2:
5-10 6-11 2-20 1-25
Consumo medio: 13.28 m3.

Cidade# 3:
3-0 1-1
Consumo medio: 0.75 m3.
"""

import sys
import math

def process_input():
    input = sys.stdin.read
    data = input().strip().split('\n')
    
    index = 0
    city_number = 1
    
    while index < len(data):
        N = int(data[index])
        if N == 0:
            break
        
        index += 1
        properties = []
        total_consumption = 0
        total_residents = 0
        
        for _ in range(N):
            X, Y = map(int, data[index].split())
            properties.append((X, Y, Y // X))
            total_consumption += Y
            total_residents += X
            index += 1
        
        properties.sort(key=lambda p: p[2])
        
        print(f"Cidade# {city_number}:")
        city_number += 1
        
        output = []
        for residents, consumption, per_resident in properties:
            output.append(f"{residents}-{per_resident}")
        print(" ".join(output))
        
        average_consumption = total_consumption / total_residents
        print(f"Consumo medio: {average_consumption:.2f} m3.")
        print()

if __name__ == "__main__":
    process_input()
    


# Time limit exceeded with: 7 changes after copilot and/or copilot chat and 0 manual changes