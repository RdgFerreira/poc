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

Sample Input
4
Top Coder comp Wedn at midnight
one three five
I love Cpp
sj a sa df r e w f d s a v c x z sd fd

Sample Output
midnight Coder comp Wedn Top at
three five one
love Cpp I
sj sa df sd fd a r e w f d s a v c x z
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