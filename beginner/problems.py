import random

"""
Bhaskara's Formula (ProblemId 1036, Page 1 of 14):

Read 3 floating-point numbers. After, print the roots of bhaskara’s formula. 
If it's impossible to calculate the roots because a division by zero or a square root of a negative number, 
presents the message “Impossivel calcular”.
"""

def bhaskara():
    a, b, c = map(float, input().split())
    delta = b**2 - 4*a*c
    if delta < 0 or a == 0:
        print('Impossivel calcular')
    else:
        r1 = (-b + delta**0.5) / (2*a)
        r2 = (-b - delta**0.5) / (2*a)
        print(f'R1 = {r1:.5f}\nR2 = {r2:.5f}')


# Result: Correct answer with: 0 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================

"""
Simple Sort (ProblemId 1042, Page 2 of 14):

Read three integers and sort them in ascending order. After, print these values in ascending order, a blank line and then the values in the sequence as they were readed.

Input
The input contains three integer numbers.

Output
Present the output as requested above.
"""

def simple_sort():
    a, b, c = map(int, input().split())
    numbers = [a, b, c]
    sorted_numbers = sorted(numbers)
    for number in sorted_numbers:
        print(number)
    print()
    for number in numbers:
        print(number)

# Result: Correct answer with: 0 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================

"""
Quadrant (ProblemId 1115, Page 3 of 14):

Write a program to read the coordinates (X, Y) of an indeterminate number of points in Cartesian system. For each point write the quadrant to which it belongs. 
The program finish when at least one of two coordinates is NULL (in this situation without writing any message).

Input
The input contains several tests cases. Each test case contains two integer numbers.

Output
For each test case, print the corresponding quadrant which these coordinates belong, as in the example.
"""

def quadrant():
    while True:
        x, y = map(int, input().split())
        if x == 0 or y == 0:
            break
        if x > 0 and y > 0:
            print('primeiro')
        elif x < 0 and y > 0:
            print('segundo')
        elif x < 0 and y < 0:
            print('terceiro')
        else:
            print('quarto')

# Result: Correct answer with: 0 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================

"""
Perfect Number (ProblemId 1164, Page 4 of 14):

In mathematics, a perfect number is an integer for which the sum of all its own positive divisors (excluding itself) is equal to the number itself. 
For example the number 6 is perfect, because 1+2+3 is equal to 6. Your task is to write a program that read integer numbers and print a message 
informing if these numbers are perfect or are not perfect.

Input
The input contains several test cases. The first contains the number of test cases N (1 ≤ N ≤ 100). 
Each one of the following N lines contains an integer X (1 ≤ X ≤ 108), that can be or not a perfect number.

Output
For each test case print the message “X eh perfeito” (X is perfect) or “X nao eh perfeito” (X isn't perfect) according with to above specification.
"""

def perfect_number():
    n = int(input())
    for _ in range(n):
        x = int(input())
        divisors = [i for i in range(1, x) if x % i == 0]
        if sum(divisors) == x:
            print(f'{x} eh perfeito')
        else:
            print(f'{x} nao eh perfeito')

# Result: Correct answer with: 0 changes after copilot and/or copilot chat and 0 manual changes

"""
Bazinga! (ProblemId 1828, Page 5 of 14):

In the 8th episode of Big Bang Theory's second season, The Lizard-Spock Expansion, Sheldon and Raj are arguing about what is the best: the movie Saturn 3 or the TV show Deep Space 9. 
Raj suggests rock-paper-scissors to settle down the dispute. However, Sheldon says "Ooh, I don't think so. No, anectodal evidence suggests that in the game of rock-paper-scissors, 
players familiar with each other will tie 75 to 80% of the time due to the limited number of outcomes. I suggest rock-paper-scissors-lizard-Spock".

The rules of the game are:

scissors cuts paper;
paper covers rock;
rock crushes lizard;
lizard poisons Spock;
Spock smashes scissors;
scissors decapitates lizard;
lizard eats paper;
paper disproves Spock;
Spock vaporizes rock;
rock crushes scissors.
Both choosed Spock and the game tied. However, it isn't hard to realize what would happened if the game had continued. In the case of Sheldon's victory, he would've said: "Bazinga!"; 
if Raj had won, Sheldon would declare: "Raj trapaceou!" ("Raj cheated" in portuguese); in ties, he would request a new game: "De novo!" ("Again!", in portuguese). Given the options 
chosen by both, make a program that prints Sheldon reaction to the outcome.

Input
The first line contains an integer T (T ≤ 100) indicating the number of test cases. Each test case is described using one line. The line contains Sheldon and Raj options, 
separated by one blank space. The possible options are: pedra, papel, tesoura, lagarto e Spock (rock, paper, scissors, lizard and Spock).

Output
For each test case your program must output a single line with the following message: "Caso #t: R", where t is the test case number and R is Sheldon's reaction to the 
outcome: "Bazinga!", "Raj trapaceou!", or "De novo!".
"""

def bazinga():
    n = int(input())
    for i in range(1, n+1):
        sheldon, raj = input().split()
        if sheldon == raj:
            print(f'Caso #{i}: De novo!')
        elif sheldon == 'tesoura' and (raj == 'papel' or raj == 'lagarto'):
            print(f'Caso #{i}: Bazinga!')
        elif sheldon == 'papel' and (raj == 'pedra' or raj == 'Spock'):
            print(f'Caso #{i}: Bazinga!')
        elif sheldon == 'pedra' and (raj == 'lagarto' or raj == 'tesoura'):
            print(f'Caso #{i}: Bazinga!')
        elif sheldon == 'lagarto' and (raj == 'Spock' or raj == 'papel'):
            print(f'Caso #{i}: Bazinga!')
        elif sheldon == 'Spock' and (raj == 'tesoura' or raj == 'pedra'):
            print(f'Caso #{i}: Bazinga!')
        else:
            print(f'Caso #{i}: Raj trapaceou!')

# Result: Correct answer with: 0 changes after copilot and/or copilot chat and 0 manual changes

"""
Star Trek (ProblemId 1828, Page 6 of 14):

After buying many adjacent farms at the west region of Santa Catarina, the Star family built a single road which passes by all farms in sequence. 
The first farm of the sequence was named Star 1, the second Star 2, and so on. However, the brother who lives in Star 1 has got mad and decided 
to make a Star Trek in order to steal sheep from the proprieties of his siblings. But he is definitely crazy. When passes by the farm Star i, 
he steals only one sheep (if there is any) from that farm and moves on either to Star i + 1 or Star i - 1, depending on whether the number of 
sheep in Star i was, respectively, odd or even. If there is not the Star to which he wants to go, he halts his trek. The mad brother starts 
his Star Trek in Star 1, stealing a sheep from his own farm.

Input
The first input line consists of a single integer N (1 ≤ N ≤ 106), which represents the number of Stars. 
The second input line consists of N integers, such that the ith integer, Xi (1 ≤ Xi ≤ 106), represents the initial number of sheep in Star i.

Output
Output a line containing two integers, so that the first represents the number of Stars attacked by the mad brother and the second represents the total number of non-stolen sheep.
"""

def star_trek():
    n = int(input())
    stars = list(map(int, input().split()))
    visited_stars = []
    visit_count = 0
    non_stolen_sheep = 0
    for i in range(n):
        visited_stars.append(0)
        non_stolen_sheep += stars[i]
    
    direction = 1
    i = 0
    while 0 <= i < n:
        if stars[i] <= 0: break
        else:
            if visited_stars[i] == 0: 
                visited_stars[i] = 1
                visit_count += 1
            if stars[i] % 2 == 0: direction = -1
            else: direction = 1
            stars[i] -= 1
            non_stolen_sheep -= 1
        i += direction

    print(visit_count, non_stolen_sheep)

# Result: Correct answer with: 2 changes after copilot and/or copilot chat and 3 manual changes (6 lines): Time limit reached

"""
Crowstorm (ProblemId 2203, Page 7 of 14):

Fiddlesticks is a champion of League of Legends, he has as his ultimate ability "CrowStorm", it works as follows:

First Fiddlesticks chooses a strategic location and promptly he prepares to resurface in one direction within a certain distance, 
then it is rooted and channels the ultimate by just 1.5 seconds, after that time it resurfaces immediately at the target site with a 
flock of crows flying in the around and causing much damage.

Fiddlesticks want your help to find out if in a certain position it is possible to achieve an invader with his ultimate skill.

Note: Consider that Fiddlesticks always uses his ultimate exactly in the direction of ivasor and the invader always tries to 
flee in the opposite direction to Fiddlesticks, at a constant speed.



Input
The entry consists of several lines, each line contains the following integer values: 
Xf, Yf, Xi, Yi, Vi, R1 e R2(0 ≤ Xf, Yf, Xi, Yi, Vi, R1 e R2 ≤ 100), 
representing respectively the coordinates of Fiddlesticks, the initial coordinates of the invader, the speed of the invader, 
the ultimate of casting radius and flight radius of crows. Consider the unit of measurement as the meter.

Output
In the output you should print for each line the 'Y' character if it is possible to achieve the invasor or 'N' otherwise, both followed by a line break.
"""

def crowstorm():
    while True:
        try:
            xf, yf, xi, yi, vi, r1, r2 = map(int, input().split())
            distance = ((xf - xi)**2 + (yf - yi)**2)**0.5
            if distance + vi*1.5 <= r1 + r2:
                print('Y')
            else:
                print('N')
        except EOFError:
            break

# Result: Correct answer with: 0 changes after copilot and/or copilot chat and 0 manual changes

"""
Which Triangle (ProblemId 2313, Page 8 of 14):

Given three values, find out if they form a triangle. If so, check if the triangle is scalene, isoceles or equilateral and if it is a triangle rectangle or not.

Input
Input is given by three integers A,B e C (0 < A,B,C < 105).

Output
The output must be the one single line containing the string "Invalido" if the input values do not represent a triangle.

If the values can be the sides of a triangle the output must be "Valido-Equilatero" if such triangle is equilateral, "Valido-Escaleno" 
if it is scalene or "Valido-Isoceles" if it is isoceles. The next line of output must read "Retangulo: S" if the triangle is rectangle or "Retangulo: N" 
otherwise, as shown in the examples.
"""

def which_triangle():
    a, b, c = sorted(map(int, input().split()))
    if a + b <= c: print('Invalido')
    else:
        if a == b == c: print('Valido-Equilatero')
        elif a == b or b == c or a == c: print('Valido-Isoceles')
        else: print('Valido-Escaleno')
        if c**2 == a**2 + b**2: print('Retangulo: S')
        else: print('Retangulo: N')

# Result: Correct answer with: 0 changes after copilot and/or copilot chat and 0 manual changes

"""
Help Patatatitu (ProblemId 2724, Page 9 of 14):

Juvenal behaved exemplary this year, since he likes chemistry deeply and really want to earn an Alchemy kit. However, 
Juvenal asked to include some dangerous elements in his kit. As Santa could not deny the request ( how to say no to 
the world most well behaved children?) asked to poor elf Patatatitu to ensure that the present was safe.

Patatatitu knows a lot about chemistry, and knows every dangerous compound that can be made with the elements 
available on Juvenal’s kit. Thus, he decided to send a cd together with the gift, containing a program which asserts
 the safety of Juvenal’s experiments. Everyone agrees that the world’s most well behaved children would never do an 
 experiment without first checking it’s safety as per Santa instructions. However Patatatitu knows nothing about 
 programming and is after someone to help him. Can you help?

To elucidate, Patatatitu explains that a dangerous compound are formed from a mix of elements in theirs chemical 
formula respecting it’s order and proportions. In this kit it’s possible to add one element each time, in various 
quantities. Thus, to form chlorine trifluoride (ClF3), an extremely dangerous compound, you must add an atom of 
chlorine (Cl) and three of fluorine (F3), regardless of what was added before or after. ClF4 is not a dangerous 
compound since it’s a different proportion from ClF3. Similarly, if Mg2F is a dangerous compound, Mg2Fe is safe, 
since fluorine (F) is different from iron (Fe).

Input
The input consist of an integer N (0 < N < 10) which indicates the number of test cases. Each test case have an 
integer T (0 < T < 51) which indicates the number of dangerous compounds possible, if th elements are included 
in the order and proportions shown. Follow T lines, each containing a string up to 50 characters representing a 
formula that generates a dangerous compound if the elements are added in that particular order and proportion. 
After, is given an integer U (0 < T < 51) that indicates the number of experiments Juvenal will do. 
Follow U lines each containing an string up to 50 characters representing the elements that Juvenal will use in the order and proportions as they are added.

Output
The output consist of U per test case, which must inform if Juvenal must abort it’s experiment or proceed with the U-th experiment of the test case. 
If Juvenal must abort print “Abortar”, else if it’s safe print “Prossiga”.Test cases must be separated by a blank line.
"""

import re

def help_patatitu():
    n = int(input())
    for i in range(n):
        t = int(input())
        dangerous_compounds = [input() for _ in range(t)]
        u = int(input())
        for _ in range(u):
            proceed = True
            experiment = input()
            for compound in dangerous_compounds:
                # the compound is in the experiment if it is followed by an uppercase letter
                # (indicating the start of another element) or experiment.endswith(compound):
                if re.search(compound + '[A-Z]', experiment) or experiment.endswith(compound):
                    print('Abortar')
                    proceed = False
                    break
            if proceed: print('Prossiga')
        if i < n - 1: print()

# Result: Correct answer with: 2 changes after copilot and/or copilot chat and 1 manual changes (2 lines)
    # introduce parsing with regex
    # introduce specific search with regex and endswith
    # introduce print() at the end of each test case correctly

"""
Pyramid (ProblemId 2785, Page 10 of 14):

In the deposit of the factory, leaning against a wall, there is a matrix of N lines by N columns of stacked boxes. Each box has an associated positive integer weight. 
The factory inspector needs to remove some boxes from the matrix so as to leave a kind of box pyramid satisfying the following restrictions:

If a box is in the pyramid, the box just below it should also be in the pyramid;
In the i-th line of boxes (line 1 is that of the top of the matrix), the pyramid must have exactly i consecutive boxes.

Given the weights of all boxes in the matrix, your program must calculate the minimum total weight a pyramid might have if the inspector 
pulls out some boxes according to the above restrictions.

Input
The first line of the input contains an integer N (1 ≤ N ≤ 100), indicating the dimension of the matrix. 
The next N lines each contain N integers representing the weights of the boxes in each row of the array of boxes.
The values ​​of the array elements are between 1 and 100, inclusive.

Output
Your program must to produce an unique line, containing an integer, indicating the total weight that the pyramid might have.
"""

def calculate_minimum_weight_dp(matrix, n, i_left, i_right):
    if n == 0: return matrix[0][i_left]
    else:
        partial_sum = sum(matrix[n][i_left:i_right+1])
        w_left = calculate_minimum_weight_dp(matrix, n - 1, i_left, i_right - 1)
        w_right = calculate_minimum_weight_dp(matrix, n - 1, i_left + 1, i_right)
        return min(w_left, w_right) + partial_sum

def pyramid():
    n = int(input())
    matrix = [list(map(int, input().split())) for _ in range(n)]
    weight = sum(matrix[n - 1])
    w_left = calculate_minimum_weight_dp(matrix, n - 2, 0, n-2)
    w_right = calculate_minimum_weight_dp(matrix, n - 2, 1, n-1)
    print(min(w_left, w_right) + weight)

def piramide():
    n = int(input())
    m = [[0 for _ in range(n+1)] for _ in range(n+1)]
    dp = [[0 for _ in range(n+1)] for _ in range(n+1)]
    for i in range(1, n+1):
        m[i][1:] = list(map(int, input().split()))
    print(m, dp)
    
    for i in range(1, n+1):
        base = 0
        for j in range(1, n+1):
            base += m[i][j]
            if (j > i): base -= m[i][j-i]
            if (j >= i):
                dp[i][j] = base
                if(i > 1): dp[i][j] += min(dp[i-1][j], dp[i-1][j-1])
        print(dp)
    
    print(dp[n][n])

    

# Result: Correct answer with: 3 changes after copilot and/or copilot chat and 1 manual changes: Recursive and dp approach
    # changed whole function to dynamic programming approach
    # changed function considering all types of pyramids possible
    # changed function to consider the minimum weight of the pyramid
    
if __name__ == '__main__':
    piramide()