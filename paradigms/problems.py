# =====================================================================================

"""
1 - Maria's Cakes (ProblemId 1608, difficulty 1/10):

Maria is an old lady that is retired and makes cakes. She started doing it to help in the family income.

To bake a cake, Maria needs some amount of different ingredients. Each ingredient has a fixed cost per unit. 
She has D units of cash to spend. Among the cakes types, you need to choose only one type, such that the number of baked cakes is maximal.

Compute the maximum number of cakes of a single type that can be baked.

Input
The first line contains an integer T (T ≤ 100) indicating the number of test cases.
In each test case, the first line contains three integers D (1 ≤ D ≤ 109), I (1 ≤ I ≤ 100) and B (1 ≤ B ≤ 100) indicating the money Maria has, 
the number of existent ingredients and the quantity of cake types, respectively. In the next line there will be I integers indicating the price of one unit of each ingredient. 
Then B lines will follow describing each cake. The i-th cake is described as following: a number Qi (1 ≤ Qi ≤ 100) that indicates how many different ingredients are necessary. 
Follow Qi pairs of numbers indicating the ingredient index and the necessary amount, all in the same line separated by blank spaces.
The amount of each ingredient in a cake will be between 1 and 1000. Each unit of an ingredient will cost between 1 and 1000. The ingredients in the cake description will be unique. 
The ingredients identifiers will be between 0 and I-1.

Output
For each test output the maximum number of cakes of a single type that can be baked.

Sample Input
3
10 2 2
3 4
1 0 2
1 1 1
10 4 3
10 10 10 10
3 0 1 1 1 2 1
2 0 1 1 1
1 3 1
100 5 3
6 5 3 8 9
5 2 3 3 5 1 1 0 10 4 1
3 2 10 0 10 4 2
4 4 1 3 1 0 1 1 1

Sample Output:
2
1
3
"""

def maria_cakes():
    t = int(input())
    for _ in range(t):
        d, i, b = map(int, input().split())
        ingredients = list(map(int, input().split()))
        max_cakes = 0
        for _ in range(b):
            cake = list(map(int, input().split()))
            cakes = d
            for j in range(cake[0]):
                cakes = min(cakes, d // ingredients[cake[j * 2 + 1]])
            max_cakes = max(max_cakes, cakes // cake[0])
        print(max_cakes)

maria_cakes()



# Correct answer with: 1 changes after copilot and/or copilot chat and 1 manual changes

# =====================================================================================

"""
2 - Constructions of China (ProblemId 1822, difficulty 2/10):

Due to the economic liberalization that occurred in China in recent years, much of the country was transformed into a construction site. 
Some buildings in progress are so monumental that, along with the already famous Wall of China can be seen from the moon to the naked eye.

A contractor rooted in Shanghai is responsible for the execution of various works in the country. 
After some time, the contractor's engineers realized that every new work, they had to solve a similar to what had already settled at the beginning of the previous works problem. 
Tired of always performing the same types of calculations, requested his help in building a program that solved their problem, described below.

Consider a work that lasts for n weeks. The i-th week of work, for 1 ≤ i ≤ n, fi employees are needed to run it. 
The costs of recruitment and education of an employee are x yuan. One spends y yuan to dismiss an employee. 
A necessary expense employee z yuan per week and each additional employee, i.e., that each contract employee is not required in a week of work, 
costs w yuan a week for the contractor. (yuan is the Chinese currency.)

Staff can be hired and fired every week. Initially, the work does not have any employees. 
At the end of it, all employees should be fired.

The problem is to determine the smallest possible value that the contractor should spend with officials throughout the work, always meeting the weekly restrictions. 
I.e., there can be no less than fi employees working on site in the i-th week.

Input
Your program should be prepared to work with diverse constructions, 
hereinafter referred to as instances. Each instance has the following structure.

In the first row an integer n (0 ≤ n ≤ 200) representing the number of weeks of the work is provided. 
In the next row are given, separated by whitespace, non-negative integers n and less than or equal to 50, in which the i-th value (1 ≤ i ≤ n) represents the number fi of employees needed in the i-th week.
On the next line, also separated by whitespace, are provided four integers x, y, z and w (0 ≤ x, y, z, w ≤ 1000), where x is the cost of recruitment and education of a new employee, y is the cost of firing an employed employee,
z is the weekly cost of an employee required and w is the cost to maintain a surplus employee for a week's work.
A value n = 0 indicates the end of the instances and should not be processed.

Output
For each solved instance, you should print an identifier “Instancia h” where h is an integer, and increasing sequential number starting from 1. 
On the next line, you must print the smallest possible value that the contractor should spend with officials throughout this work.
A blank line should separate the output of each instance.

Sample Input:
5
10 7 9 8 11
80 120 100 160
0

Sample Output:
Instancia 1
7380
"""

def solve_construction_problem():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    instance_number = 1
    
    while index < len(data):
        n = int(data[index])
        index += 1
        if n == 0:
            break
        
        fi = list(map(int, data[index:index + n]))
        index += n
        x, y, z, w = map(int, data[index:index + 4])
        index += 4
        
        # Initialize DP table
        max_employees = max(fi) + 50  # Reasonable upper bound for employees
        dp = [[float('inf')] * (max_employees + 1) for _ in range(n + 1)]
        dp[0][0] = 0
        
        for i in range(1, n + 1):
            for j in range(max_employees + 1):
                if dp[i - 1][j] < float('inf'):
                    for k in range(fi[i - 1], max_employees + 1):
                        hire_cost = max(0, k - j) * x
                        fire_cost = max(0, j - k) * y
                        maintain_cost = k * z
                        surplus_cost = max(0, k - fi[i - 1]) * w
                        dp[i][k] = min(dp[i][k], dp[i - 1][j] + hire_cost + fire_cost + maintain_cost + surplus_cost)
        
        min_cost = min(dp[n])
        
        print(f"Instancia {instance_number}")
        print(min_cost)
        print()
        
        instance_number += 1

# Example usage:
solve_construction_problem()


# Correct answer with: 3 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
3 - Convert Kilometers to Miles (ProblemId 1643, difficulty 3/10):

This year, Bruce Force spends his vacation in Flagstaff, Arizona, where he wants to practice for his next half marathon (a race over 21 km). 
At his first training he runs to his friend Greedy Gonzales' home which is 21 miles away from Flagstaff.

Arriving there, he is very tired and realizes that 21 miles are much more than 21 km. Greedy Gonzales tells him that 21 km equals 13 miles. 21, 13? 
Bruce realizes immediately that there must be a deeper relation! Both, 13 and 21 are Fibonacci numbers!

Fibonacci numbers can be defined as follows:

F1 = 1

F2 = 2

Fn+1 = Fn+Fn-1 for n > 1

Bruce has just learned about the Fibonacci number system at his university. Each positive integer x can be written as the sum of different Fibonacci numbers, 
so this means that there exists numbers k and b1, b2, ..., bk such that x = ∑i=1..k bi * Fi, where bk = 1 and bi (1 ≤ i < k) is either 0 or 1. 
In short, we can write the representation as: b(x) = (bk, bk-1, ..., b1). To make the representation unique, we require that bi * bi-1 = 0 for all i > 1.

For example 21 can be represented as (1,0,0,0,0,0,0) and 13 as (1,0,0,0,0,0) in the Fibonacci system. Bruce notices that one can convert a distance x in kilometers into a corresponding distance y to miles as follows: 
First, write down x in its Fibonacci system representation b(x). Second, shift the bits of b(x) one position to the right (the last bit is deleted) and get b(y). 
Third, calculate y from b(y) by evaluating the sum given above.

For example, the number 42 written in the Fibonacci system is (1,0,0,1,0,0,0,0). 
In step two we would shift the bits one position to the right and get (1,0,0,1,0,0,0). In the third step, we would calculate 0*1 + 0*2 + 0*3 + 1*5 + 0*8 + 0*13 + 1*21 = 26.
Now it's your turn to write a program for Bruce that converts kilometers into miles according to Bruce's algorithm.

Input
The first line of the input contains t, the number of distances Bruce wants to convert from kilometers to miles (0<t<25000). 
Each of the next t lines contains an integer distance x (2 < x < 25000) in kilometers.

Output
For each distance x in kilometers output the distance y in miles calculated according to Bruce's algorithm.

Sample Input:
5
42
100
180
300
360

Sample Output:
26
62
111
185
222
"""

def convert_kilometers_to_miles():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    t = int(data[index])
    index += 1
    
    for _ in range(t):
        x = int(data[index])
        index += 1
        
        # Calculate Fibonacci numbers
        fib = [1, 2]
        while fib[-1] < 25000:
            fib.append(fib[-1] + fib[-2])
        
        # Convert x to Fibonacci system
        x_fib = []
        for f in fib[::-1]:
            if f <= x:
                x_fib.append(1)
                x -= f
            else:
                x_fib.append(0)
        
        # Shift bits to the right
        y_fib = x_fib[:-1]
        
        # Calculate y
        y = 0
        for i in range(len(y_fib)):
            y += y_fib[i] * fib[i + 1]
        
        print(y)

convert_kilometers_to_miles()


# 90% Correct answers with: 5 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
4 - Profit (ProblemId 1310, difficulty 4/10):

George owns a circus and brings his circus from town to town. 
He knows how much revenue he can take in on any day in a series of days in a town. 
He also knows the constant daily cost to run his circus. 
George wants to bring his circus to town for the series of days that results in the highest profit.

For example, if the circus costs $20 a day to run in an example with 6 days, 
and the revenue per day is {$18,$35,$6,$80,$15,$21}, 
George can make the most money by bringing his circus to town from Day 2 to Day 4. He will make (35+6+80)-(3*20) = $61.

Note: The series of days George brings his circus to town can be between 0 and the maximun number of days, inclusive. 
-If George brings his circus to town for 0 days, he makes 0 profit.

Input
The input contains many test cases. The first line of a teste 
case contains an integer N (1 ≤ N ≤ 50 ) that represents the number of days that George 
can bring his circus to the town. The second line of a test case contains an integer perDayCost 
(0 ≤ perDayCost < 1000 ) that represents the cost in manteining the circus in that town. 
Follow N lines (one per each day) containing each one an integer revenue (0 ≤ revenue < 1000 ) 
representing the revenue the circus will earn on each day. The end of input is indicated by EOF (end of file).

Output
For each test case print the most money that George can earn by bringing his circus to town according to the following example.

Sample Input:
6
20
18
35
6
80
15
21
4
40
30
20
10
38

Sample Output:
61
0
"""

def profit():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    
    while index < len(data):
        n = int(data[index])
        index += 1
        per_day_cost = int(data[index])
        index += 1
        revenue = list(map(int, data[index:index + n]))
        index += n
        
        # Initialize DP table
        dp = [0] * (n + 1)
        
        for i in range(1, n + 1):
            dp[i] = max(dp[i - 1] + revenue[i - 1] - per_day_cost, revenue[i - 1])
        
        print(max(dp))

profit()

# Correct answer with: 4 changes after copilot and/or copilot chat and 1 manual changes

# =====================================================================================

"""
5 - Pipe Cutting (ProblemId 1798 , difficulty 5/10):

OBI (Brazilian Organization of Facilities) is a company that produces pipes and fitters. 
The production technique used at OBI always produces long pipes, which are then cut to satisfy client needs.

Their clients have different applications, so they need pipes with different lengths. 
When the company was small and the clients were few, all the pipe cut planning process (to maximize profit) was done by a very dedicated employee. 
However, with the increase on the number of orders, it became prohibitive. 
That's where you come in: hired by OBI, your task is to write a program that, 
given the relation between the pipes' length and its respective sales value, determine the greatest possible value 
that can be obtained by cutting and selling a pipe with a determined initial length. Pipe lengths can be repeated, and there can be leftovers.

Input
The first line of input has two integers: N (0 ≤ N ≤ 1000) that indicates the number of different pipe sizes and T (0 ≤ T ≤ 2000), 
that is the size of each pipe produced by OBI.

Each of the following N lines has two integers: Ci and Vi (1 ≤ Ci, Vi ≤ 5000, 1 ≤ i ≤ N), 
representing, respectively, the lenght and the sales value of a client ordered pipe i.

Output
For each test case, print in one line the greatest possible value that can be obtained by 
cutting and selling a pipe with original length T.

Input Sample:
3 10
6 3
2 1
5 2

Output Sample:
5
"""

def pipe_cutting():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    n = int(data[index])
    index += 1
    t = int(data[index])
    index += 1
    
    pipes = []
    for _ in range(n):
        c, v = map(int, data[index:index + 2])
        index += 2
        pipes.append((c, v))
    
    # Initialize DP table
    dp = [0] * (t + 1)
    
    for i in range(1, t + 1):
        for c, v in pipes:
            if i >= c:
                dp[i] = max(dp[i], dp[i - c] + v)
    
    print(dp[t])

pipe_cutting()

# Correct answer with: 1 changes after copilot and/or copilot chat and 1 manual changes

# =====================================================================================

"""
6 - El Dorado (ProblemId 1645, difficulty 6/10):

Bruce Force has gone to Las Vegas, the El Dorado for gamblers. 
He is interested especially in one betting game, where a machine forms a sequence of n numbers by drawing random numbers. 
Each player should estimate beforehand, how many increasing subsequences of length k will exist in the sequence of numbers.

A subsequence of a sequence a1, ..., an is defined as ai1, ..., ail, where 1 ≤ i1 < i2 < ... < il ≤ n. 
The subsequence is increasing, if aij-1 < aij for all 1 < j ≤ l.

Bruce doesn't trust the Casino to count the number of increasing subsequences of length k correctly. 
He has asked you if you can solve this problem for him.

Input
The input contains several test cases. 
The first line of each test case contains two numbers n and k (1 ≤ k ≤ n ≤ 100), 
where n is the length of the sequence drawn by the machine, and k is the desired length of the increasing subsequences. 
The following line contains n pairwise distinct integers ai(-10000 ≤ ai ≤ 10000), where ai is the ith number in the sequence drawn by the machine.
The last test case is followed by a line containing two zeros.

Output
For each test case, print one line with the number of increasing subsequences of length k that the input sequence contains. You may assume that the inputs are chosen in such a way that this number fits into a 64 bit signed integer (in C/C++, you may use the data type "long long", in Java the data type "long").

Sample Input:
10 5
1 2 3 4 5 6 7 8 9 10
3 2
3 2 1
0 0

Sample Output:
252
0
"""

def el_dorado():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    
    while True:
        n = int(data[index])
        index += 1
        k = int(data[index])
        index += 1
        
        if n == 0 and k == 0:
            break
        
        sequence = list(map(int, data[index:index + n]))
        index += n
        
        # Initialize DP table
        dp = [0] * n
        dp[0] = 1
        
        for i in range(1, n):
            for j in range(i):
                if sequence[i] > sequence[j]:
                    dp[i] += dp[j]
        
        print(sum(dp[i] for i in range(n) if dp[i] > 0))

el_dorado()



# Correct answer with: 3 changes after copilot and/or copilot chat and 1 manual changes

# =====================================================================================

"""
7 - Dynamic Frog (ProblemId 1054, difficulty 7/10):

With the increased use of pesticides, the local streams and rivers have become so contaminated that it has become almost impossible for the aquatic animals to survive.

Frog Fred is on the left bank of such a river. 
N rocks are arranged in a straight line from the left bank to the right bank. 
The distance between the left and the right bank is D meters. 
There are rocks of two sizes. 
The bigger ones can withstand any weight but the smaller ones start to drown as soon as any mass is placed on it. 
Fred has to go to the right bank where he has to collect a gift and return to the left bank where his home is situated.
He can land on every small rock at most one time, but can use the bigger ones as many times as he likes. 
He can never touch the polluted water as it is extremely contaminated. 
Can you plan the itinerary so that the maximum distance of a single leap is minimized?

Input
The first line of input is an integer T ( T < 100 ) that indicates the number of test cases. 
Each case starts with a line containing two integers N (0 ≤ N ≤ 100 ) and D ( 1 ≤ D ≤ 1000000000 ). 
The next line gives the description of the N stones. Each stone is defined by S-M. 
S indicates the type Big(B) or Small(S) and M ( 0 < M < D ) determines the distance of that stone from the left bank. 
The stones will be given in increasing order of M.

Output
For every case, print the case number followed by the minimized maximum leap.

Input Sample:
3
1 10
B-5
1 10
S-5
2 10
B-3 S-6

Output Sample:
Case 1: 5
Case 2: 10
Case 3: 7
"""

def dynamic_frog():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    t = int(data[index])
    index += 1
    
    for case_number in range(1, t + 1):
        n = int(data[index])
        index += 1
        d = int(data[index])
        index += 1
        
        stones = []
        for _ in range(n):
            s, m = data[index].split('-')
            m = int(m)
            index += 1
            stones.append((s, m))
        
        # Initialize DP table
        dp = [float('inf')] * n
        dp[0] = stones[0][1]
        
        for i in range(1, n):
            for j in range(i):
                if stones[i][0] == 'B':
                    dp[i] = min(dp[i], max(dp[j], stones[i][1] - stones[j][1]))
                else:
                    dp[i] = min(dp[i], dp[j] + stones[i][1] - stones[j][1])
        
        print(f"Case {case_number}: {dp[-1]}")

dynamic_frog()

# Correct answer with: 5 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
8 - Ice Statues Festival (ProblemId 1034, difficulty 8/10):

Every year, artists from around the world came to the city, where they make giant ice sculptures. 
The city becomes an open sky art gallery, since the sculptures are exposed in the street for weeks, without melting. 
This is because the average winter temperature in Harbin (time that will occur at the end of the world ICPC) is -20 degrees.

The first step to make the sculpture is to assemble a large block of ice with the size requested by the artist. 
The blocks are cut from the glaciers of Harbin in blocks of standard height and depth, and several different lengths. 
The artist can determine the length he wishes his block of ice and the sculpture can begin to be carved.

The lengths of the available blocks are {a1; a2; ...;  aN} and wished length by the artist is M. The block with length = 1 is widely used, 
for this reason he always appears in the list of available blocks. Your task is to find the minimum number of blocks such that the sum of their lengths is M.

Input
In the first input line there is an integer T indicating the number of test cases. 
Each test case contains two positive integer numbers N (1 ≤ N ≤ 25) and M (1 ≤ M ≤ 1000000).
The number N represents the quantity of block types and the all size wished by the artist, respectively. 
The next line contains a1; a2; ...; aN integers, where (1 ≤ ai ≤ 100) for all i (1,2,...N) separated by a blank space.

Output
For each test case, print the minimum needed blocks to get a block with M length.

Input Sample:
2
6 100
1 5 10 15 25 50
2 103
1 5

Output Sample:
2
23
"""

def ice_statues_festival():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    t = int(data[index])
    index += 1
    
    for _ in range(t):
        n = int(data[index])
        index += 1
        m = int(data[index])
        index += 1
        blocks = list(map(int, data[index:index + n]))
        index += n
        
        # Initialize DP table
        dp = [0] * (m + 1)
        
        for i in range(1, m + 1):
            dp[i] = float('inf')
            for block in blocks:
                if i >= block:
                    dp[i] = min(dp[i], dp[i - block] + 1)
        
        print(dp[m])

ice_statues_festival()


# Time limit exceeded with: 4 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
9 - Horse (ProblemId 1513, difficulty 9/10):

Rafael liked to play chess so much that he decided to invent new ways to challenge himself. 
This time, he decided to play with the horse piece, 
because the way it can move seemed to add a little bit of difficulty to the game, as would say Rafael.

The challenge is as follows: There is a horse and K pawns on the board. 
Given the initial position of the horse and the pawns, what is the minimum amount of movements necessary 
to capture the K pawns and return to the initial position?

Remember that the horse piece can move using L jumps, in other words, 
two positions to the vertical and one position to the horizontal, or 
two positions to the horizontal and one position to the vertical. 
To capture a pawn, it is enough to occupy the same position as it on the board.

Input
There will be several test cases. Each test case begins with three 
integers N, M and K (5 ≤ N, M ≤ 100, 2 ≤ K ≤ 15), representing, respectively, 
the amount of lines and columns of the board, and the amount of pawns to be captured.
The next N lines will have M characters each, where the character at the i-th line and j-th column 
indicate that at the position [i, j] on the board there is:

'.' a valid position where the horse can jump.
'#' an invalid position where the horse can't jump.
'C' the initial position of the Rafael's horse.
'P' the position of one of the K pawns that Rafael must capture.
The last test case is indicated when N = M = K = 0, which should not be processed.

Output
For each test case, print an integer, representing the minimum amount of jumps that Rafael's horse 
needs to make to capture the K pawns and return to the initial position.
It is garanteed that there will always have at least one way to capture all the pawns.

Sample Input:
5 5 2
.....
.P...
...P.
.....
..C..
4 6 2
.P##.P
..##..
..##..
..C...
0 0 0

Sample Output:
4
8
"""

def horse():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    
    while True:
        n = int(data[index])
        index += 1
        m = int(data[index])
        index += 1
        k = int(data[index])
        index += 1
        
        if n == 0 and m == 0 and k == 0:
            break
        
        board = [data[index:index + m] for _ in range(n)]
        index += m
        
        # Find the initial position of the horse and the positions of the pawns
        horse_position = None
        pawn_positions = []
        for i in range(n):
            for j in range(m):
                if board[i][j] == 'C':
                    horse_position = (i, j)
                elif board[i][j] == 'P':
                    pawn_positions.append((i, j))
        
        # Initialize DP table
        dp = {}
        
        def dfs(i, j, k):
            if (i, j, k) in dp:
                return dp[(i, j, k)]
            if k == 0:
                return abs(i - horse_position[0]) + abs(j - horse_position[1])
            min_moves = float('inf')
            for di, dj in [(-2, -1), (-2, 1), (-1, -2), (-1, 2), (1, -2), (1, 2), (2, -1), (2, 1)]:
                ni, nj = i + di, j + dj
                if 0 <= ni < n and 0 <= nj < m and board[ni][nj] != '#':
                    min_moves = min(min_moves, dfs(ni, nj, k - 1))
            dp[(i, j, k)] = min_moves
            return min_moves
        
        min_moves = float('inf')
        for i, j in pawn_positions:
            min_moves = min(min_moves, dfs(i, j, k - 1))
        
        print(min_moves)

horse()


# 50% Correct answer with: 5 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
10 - Domino Effect (ProblemId 2036, difficulty 10/10):

The domino effect is a phenomenon that occurs when in a line of domino pieces, each standing on its 
smallest face, the first piece from one of the line's ends falls in the direction of the next piece. 
In turn, this second piece falls over the third one in the line, and so on until the other end of the line 
is reached, at which point every piece has fallen. Note that in order to produce this effect, the distance 
between consecutive pieces in the line must be lower or equal to their height.

Emma has very recently found out about the domino effect, and she was immediately amazed by it. 
She spent all morning forming a line with the N domino pieces that her brother Ezequiel gave her, 
but just before she was going to make the first piece fall, her grandma came to her home and took 
her to play in the park. Ezequiel knows Emma has not taken into account the distance between 
consecutive pieces when she formed her domino line, and doesn't want to see her frustrated if 
all the pieces do not fall after she pushes the first one.

Thus, Ezequiel wants to move some pieces from inside the line so that the distance between 
consecutive pieces is always lower or equal to their height H. Because he doesn't want 
Emma to find out that he has moved some of the pieces, he will leave the first and last 
pieces where they are, and he would also like to move as few pieces as possible from 
inside the line. What is the minimum number of pieces he must move?

Input
Each test case is described using two lines. The first line contains two integer 
numbers N and H, indicating respectively the number of pieces in the line (3 ≤ N ≤ 1000) 
and their height (1 ≤ H ≤ 50). The second line contains N-1 integers Di, representing 
the distances between pairs of consecutive domino pieces, in the order given by the line 
(1 ≤ Di ≤ 100 for i = 1, 2, ..., N-1).

The end of the input is signalled by a line containing two times the number -1.

Output
For each test case, you should print a line containing a single integer number, 
representing the minimum number of pieces that must be moved in order to have the 
distance between consecutive pieces always lower or equal to H. Note that the first 
and last pieces cannot be moved, and that the relative order between the the pieces 
cannot be changed. If it is impossible to achieve the desired result, print the number -1.

Input Sample:
8 3
2 4 4 1 4 3 2
10 2
1 2 2 2 2 2 2 2 3
5 2
2 2 2 2
5 3
1 6 2 4
-1 -1

Output Sample:
3
8
0
-1
"""

def domino_effect():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    
    while True:
        n = int(data[index])
        index += 1
        h = int(data[index])
        index += 1
        
        if n == -1 and h == -1:
            break
        
        distances = list(map(int, data[index:index + n - 1]))
        index += n - 1
        
        # Initialize DP table
        dp = [[float('inf')] * n for _ in range(n)]
        dp[0][0] = 0
        
        for i in range(1, n):
            for j in range(i):
                if distances[i - 1] <= h:
                    dp[i][j] = min(dp[i][j], dp[i - 1][j] + 1)
                dp[i][i] = min(dp[i][i], dp[i - 1][j])
        
        min_moves = min(dp[n - 1])
        print(min_moves if min_moves != float('inf') else -1)

domino_effect()


# Memory limit exceeded with: 5 changes after copilot and/or copilot chat and 0 manual changes