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
15 - Maratona (ProblemId 2366, difficulty 5/10):
"""


# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
15 - Maratona (ProblemId 2366, difficulty 5/10):
"""


# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
15 - Maratona (ProblemId 2366, difficulty 5/10):
"""


# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
15 - Maratona (ProblemId 2366, difficulty 5/10):
"""


# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes