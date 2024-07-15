"""
1 - Formula 1 (ProblemId 1125, Page 1 of 34, difficulty 3/10):

The Formula 1 season consists of a series of races, known as Grand Prix, organized by the International Federation of Automobile (FIA). 
The results of each Grand Prix are combined to determine Pilots\' 
World Championship. More specifically, for each race some points are distributed to pilots, 
depending on their classification in the race. At the end of the season, the pilot who has earned the most points is declared the World Champion.

Formula 1 organizers change constantly the competition rules, aiming to provide more excitement to fans. 
One rule modified for the 2010 season was the distribution of points in each Grand Prix. Since 2003, 
the scoring rule rewarded the top eight pilots, according to the following table:

That is, the winning driver received 10 points, second place received 8 points, and so on. 
In the 2010 season the top ten will receive points, obeying the following table:

The change in the scoring system led to much speculation about what would have been the effect to the 
World Championship in the past if the new score had been used. For example, would 
Lewis Hamilton have been champion in 2008, considering he and Felipe Massa were separated by just one point? 
To end the speculation, FIA hired you to write a program that, 
given the results of each race of a season determines the World Champion for different scoring systems.

Input
The input contains several test cases. The first line of a test case contains two integers G and P separated by a blank space, 
indicating the number of Grand Prix (1 ≤ G ≤ 100) and the number of pilots (1 ≤ P ≤ 100). 
Pilots are identified by integers from 1 to P. Each of the following G lines indicates the result of a race, 
and contains Q integers separated by spaces. On each line, the (i)-th number indicates the order of arrival of pilot i in the race 
(the first number indicates the order of arrival of a pilot 1 in that race, the second number indicates the order of arrival of 
pilot 2 in that race and so on). The next line contains a single integer S indicating the number of scoring systems (1 ≤ S ≤ 10), 
After that, each of the following lines S contains a description of a scoring system. 
The description of a scoring system begins with an integerK (1 ≤ K ≤ P), indicating the last finishing order to receive points, 
followed by a blank space, followed by e K integers k0, k1, ... , kn−1 (1 ≤ ki ≤ 100) separated by spaces, 
indicating the number of points to be assigned (the first integer indicates the points for first place, 
the second integer indicates the points for second place and so on). The last test case is followed by a line containing only 
two zeros separated by a blank space.

Output
For each scoring system in the input your program must print one line, containing the identifier of the World Champion. 
If more than one pilot are World Champions (ie, if there is a tie), the line must contain all World Champions, 
in increasing order of identifier, separated by a space.
"""


def read_and_process_input():
    while True:
        G, P = map(int, input().split())
        if G == 0 and P == 0:
            break
        race_results = [list(map(int, input().split())) for _ in range(G)]
        S = int(input())
        scoring_systems = [list(map(int, input().split())) for _ in range(S)]
        process_race_season(G, P, race_results, scoring_systems)


def process_race_season(G, P, race_results, scoring_systems):
    for system in scoring_systems:
        K, *points = system
        scores = [0] * P
        for race in race_results:
            for pilot, position in enumerate(race):
                if position <= K:
                    scores[pilot] += points[position - 1]
        max_score = max(scores)
        champions = [i + 1 for i, score in enumerate(scores) if score == max_score]
        champions.sort()
        for i, champion in enumerate(champions):
            if i < len(champions) - 1:
                print(champion, end=" ")
            else:
                print(champion, end="")
        print()


read_and_process_input()


# Result: Correct answer with: 2 changes after copilot and/or copilot chat and 5 manual changes
# Switched "pilot, position" when enumerating the races arrays
# Added a sort to the champions list before printing
# Added a minus 1 when indexing the points array
# position <= K instead of position < K
# removed the print(" ".join(champions))

# ================================================================================================================================================================

"""
2- Start Grid (ProblemId 1228, Page 2 of 34, difficulty 3/10):

Nlogonia will hold the sensational world final of the Formula 17 drivers championship. 
Competitors line up at the start and compete for the race. You will have access to the 
start and finish grids. The question is to determine the minimum number of overtakes that 
were made during the competition.

Input
The input contains several test cases. Each test case uses three lines. 
The first line of a test case contains an integer N (2 ≤ N ≤ 24) 
indicating the number of competitors. Each competitor is identified by a 
number from 1 to N. The second line contains the N competitors in order of 
the starting grid. The third line of each case has the same competitors, 
but now in the order they finish the race.

Output
For each test case print a line containing a single integer, the minimum number of overtakes 
necessary to get from the starting grid to the finishing grid.
"""


def calculate_overtakes(start_grid, finish_grid):
    overtakes = 0
    for i in range(len(finish_grid)):
        current_position = start_grid.index(finish_grid[i])
        for j in range(i):
            if start_grid.index(finish_grid[j]) > current_position:
                overtakes += 1
    return overtakes


def main():
    try:
        while True:
            N = int(input().strip())
            start_grid = list(map(int, input().strip().split()))
            finish_grid = list(map(int, input().strip().split()))
            print(calculate_overtakes(start_grid, finish_grid))
    except EOFError:
        pass


main()


# Result: Correct answer with: 3 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================

"""
3- Sudoku (ProblemId 1383, Page 3 of 34, difficulty 6/10):

The Sudoku puzzle spread quickly across the world, being the most popular hobby in the planet today. 
Some people, however, fill the matrix incorrectly, breaking the rules. Your task is to write a 
program that checks whether a filled matrix is a solution to the puzzle or not.

The matrix is a 9 x 9 matrix of integers. To be considered a solution to the puzzle, 
each row and each column must contain all integer numbers between 1 and 9. Also, 
if the matrix is partitioned in nine 3 x 3 sub-matrices (as shown below), 
each one of them must also contain all numbers between 1 and 9. The following matrix is an 
example of a solution to the puzzle.

Input
Several instances are given. The first line of the input contains n > 0, the number of matrices in the input. 
The following lines describe n matrices. Each matrix is described by 9 lines. These lines contain 9 integers each.

Output
For each instance, your program must print a line containing "Instancia k" , where k is the instance number. 
In the second line, your program must print "SIM" (portuguese for yes) 
if the given matrix is a solution to the puzzle, or "NAO" (portuguese for no) otherwise. 
Print an empty line after each instance.
"""


def solution():
    n = int(input())
    for i in range(n):
        matrix = [list(map(int, input().split())) for _ in range(9)]
        print(f"Instancia {i+1}")
        print("SIM" if is_valid_sudoku(matrix) else "NAO")
        print()


def is_valid_sudoku(matrix):
    for i in range(9):
        if not is_valid_row(matrix[i]):
            return False
        if not is_valid_column(matrix, i):
            return False
    for i in range(0, 9, 3):
        for j in range(0, 9, 3):
            if not is_valid_submatrix(matrix, i, j):
                return False
    return True


def is_valid_row(row):
    return len(set(row)) == 9


def is_valid_column(matrix, column):
    return len(set(row[column] for row in matrix)) == 9


def is_valid_submatrix(matrix, i, j):
    return len(set(matrix[x][y] for x in range(i, i + 3) for y in range(j, j + 3))) == 9


solution()

# Result: Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================


"""
4 - Bakugan (ProblemId 1419, Page 4 of 34, difficulty 5/10):

Mark and Leti love to play with Bakugan balls. These balls are small plastic spheres with a tiny monster toy inside. 
When dropped to the ground, a Bakugan ball pops open with an incredible sound, liberating a fearsome Bakugan monster. 
Mark and Leti love to play with the toy monsters, but popping open the balls is also great fun.

Each of them received a bag with Bakugan balls, and they invented a game to pop open the balls. 
There are 10 different monsters, and for the game Mark and Leti associated each monster with a different integer from 1 to 10, 
according to the monster’s ugliness. The game is composed of R rounds. At each round:

Both players drop simultaneously a ball each;
Each player accumulates a number of points coincident with the number associated with the monster liberated by her/his ball;
The first (and only the first) player who liberates the same monster in three consecutive rounds earns 30 additional points; 
if this condition happens in the same round for both players then nobody earns extra points.
The winner of the game is the player who accumulates more points. Please help Mark and Leti announce the winner of the game!

Input
Each test case is described using three lines. The first line contains an integer 
R representing the number of rounds of the game (1 ≤ R ≤ 10). The second line contains 
R integers Mi indicating the monsters liberated by Mark at each turn (1 ≤ Mi ≤ 10 for 1 ≤ i ≤ R). 
The third line contains R integers Li indicating the monsters liberated by Leti at each turn (1 ≤ Li ≤ 10, for 1 ≤ i ≤ R).

The last test case is followed by a line containing one zero.

Output
For each test case output a line with a character representing the result of the game: 
"M" (uppercase) if the winner is Mark, "L" (uppercase) if the winner is Leti, or "T" (uppercase) if there is a tie.
"""
def bakugan():
    while True:
        R = int(input())
        if R == 0:
            break
        Mark = list(map(int, input().split()))
        Leti = list(map(int, input().split()))
        print(who_won(R, Mark, Leti))

def who_won(R, Mark, Leti):
    Mark_points = Leti_points = 0
    Mark_consecutive = Leti_consecutive = False
    for i in range(R):
        Mark_points += Mark[i]
        Leti_points += Leti[i]
        if i >= 2 and not(Mark_consecutive or Leti_consecutive):
            isMark = Mark[i] == Mark[i - 1] == Mark[i - 2]
            isLeti = Leti[i] == Leti[i - 1] == Leti[i - 2]
            if isMark or isLeti:
                if isMark:
                    Mark_points += 30
                    Mark_consecutive = True
                if isLeti:
                    Leti_points += 30
                    Leti_consecutive = True
                
    if Mark_points > Leti_points:
        return "M"
    elif Leti_points > Mark_points:
        return "L"
    else:
        return "T"

bakugan()

# Result: Correct answer with: 1 changes after copilot and/or copilot chat and 1 manual changes
    # Correction when checking for consecutive monsters

# ================================================================================================================================================================


"""
5- Sum of Two Squares (ProblemId 1558, Page 5 of 34, difficulty 5/10):

Which integer numbers can be represented by a sum of two integer squares?

That is the question that your program must respond!

For example, the number 41 can be represented as (-4)2 + 52 = 41, but 7 cannot be represented in the same way.

Input
The input consists of several lines, each line contains an integer with absolute value less than or equal to 10000.

Output
For each line, print "YES" if the number can be represented by a sum of two integer squares, otherwise print "NO".
"""
def sum_of_two_squares():
    while True:
        try:
            n = int(input())
            if n < 0:
                print("NO")
            else: print("YES" if is_sum_of_two_squares(n) else "NO")
        except EOFError:
            break

def is_sum_of_two_squares(n):
    for i in range(int(n ** 0.5) + 1):
        if (n - i ** 2) ** 0.5 % 1 == 0:
            return True
    return False

sum_of_two_squares()

# Result: Correct answer with: 1 changes after copilot and/or copilot chat and 1 manual changes
    # Checking for negative n values

# ================================================================================================================================================================

"""
6 - Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):

Uma cadeia de caracteres é chamada de palíndrome se seqüência de caracteres da esquerda para a direita é igual à 
seqüência de caracteres da direita para a esquerda (uma outra definição é que o primeiro caractere da cadeia deve 
ser igual ao último caractere, o segundo caractere seja igual ao penúltimo caractere, o terceiro caractere seja 
igual ao antepenúltimo caractere, e assim por diante). Por exemplo, as cadeias de caracteres ‘mim’, ‘axxa’ e ‘ananaganana’ 
são exemplos de palíndromes.

Se uma cadeia não é palíndrome, ela pode ser dividida em cadeias menores que são palíndromes. Por exemplo, a 
cadeia ‘aaxyx’ pode ser dividida de quatro maneiras distintas, todas elas contendo apenas cadeias palíndromes: 
{‘aa’, ‘xyx’}, {‘aa’, ‘x’, ‘y’, ‘x’}, {‘a’, ‘a’, ‘xyx’} e {‘a’, ‘a’, ‘x’, ‘y’, ‘x’}.

Escreva um programa que determine qual o menor número de partes em que uma cadeia deve ser dividida de forma 
que todas as partes sejam palíndromes.

Entrada
A entrada é constituída de vários conjuntos de teste. A primeira linha de um conjunto de testes contém um 
inteiro N (1 ≤ N ≤ 2000) que indica o número de caracteres da cadeia . A segunda linha contém a cadeia de caracteres, 
composta por letras minúsculas (de ‘a’ a ‘z’), sem espaços em branco. O final da entrada é indicado por N = 0.

Saída
Para cada conjunto de teste da entrada seu programa deve produzir três linhas na saída. 
A primeira linha deve conter um identificador do conjunto de teste, no formato 
“Teste n”, onde n é numerado a partir de 1. A segunda linha deve conter um inteiro indicando o 
menor número de partes que a cadeia de entrada deve ser dividida de forma que todas as partes sejam palíndromes. 
A terceira linha deve ser deixada em branco. O formato mostrado no exemplo de saída abaixo deve ser seguido rigorosamente.
"""
def min_parts(string):
    n = len(string)
    dp = [0] * n
    is_palindrome = [[False] * n for _ in range(n)]

    # Fill the is_palindrome table
    for i in range(n):
        is_palindrome[i][i] = True
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            if length == 2:
                is_palindrome[i][j] = (string[i] == string[j])
            else:
                is_palindrome[i][j] = (string[i] == string[j]) and is_palindrome[i + 1][j - 1]

    # Fill the dp table
    for i in range(n):
        if is_palindrome[0][i]:
            dp[i] = 0
        else:
            dp[i] = float('inf')
            for j in range(i):
                if is_palindrome[j + 1][i]:
                    dp[i] = min(dp[i], dp[j] + 1)

    return dp[-1] + 1

def palindrome():
    import sys
    input = sys.stdin.read
    data = input().strip().split('\n')
    
    test_case = 0
    i = 0
    while i < len(data):
        N = int(data[i])
        if N == 0:
            break
        test_case += 1
        string = data[i + 1]
        print(f"Teste {test_case}")
        print(min_parts(string))
        print()
        i += 2

if __name__ == "__main__":
    palindrome()

# Result: Correct answer with: 3 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================

"""
7 - Pão a Metro (ProblemId 2329, Page 15 of 34, difficulty 6/10):

Pão a metro é um tipo de sanduíche gigante que é uma excelente opção de lanche para torneios de programação, embora a experiência já tenha mostrado que o 
oferecimento de sanduiches pode gerar reclamação dos competidores. Outro grande problema é que algumas pessoas são mais gulosas que outras e, dessa maneira, 
acabam pegando pedaços maiores que os pedaços dos outros. Para a ﬁnal da OBI, a coordenação estava pensando em providenciar pão a metro para os competidores, 
porém tais problemas os ﬁzeram recuar na idéia.

Embora a idéia tenha sido momentaneamente abandonada, uma idéia simples surgiu: cortar previamente o pão em fatias de tamanho iguais e distribuí-las entre as 
pessoas. O único problema com tal idéia é que se o número de pessoas for muito grande, ﬁca impraticável ter apenas um pão. Por exemplo, se quiséssemos que 
1.000 pessoas recebam 20 centímetros de sanduíche, seria necessário um sanduíche de 20.000 centímetros, ou 200 metros!

Alguém levantou a seguinte hipótese: se houvesse N pessoas e fossem encomendados K sanduíches de empresas diferentes, cada qual com uma determinada metragem 
(tamanho) Mi (1 ≤ i ≤ K), seria possível retirar desses pães N fatias de mesmo tamanho, possivelmente sobrando partes não utilizadas. A questão seria: qual 
o tamanho inteiro máximo que essas fatias poderão ter?

Por exemplo, se tivermos K = 4, com os tamanhos (em centímetros) M1 = 120, M2 = 89, M3 = 230 e M4 = 177 e N = 10, podemos retirar N fatias iguais de tamanho 
máximo 57, pois assim conseguimos 2 fatias no primeiro pão, 1 no segundo, 4 no terceiro e 3 no quarto, totalizando as 10 fatias necessárias. Se tentarmos 
cortar fatias de tamanho 58, só será possível obter 3 fatias do terceiro pão, totalizando 9 e, portanto, 57 é realmente o melhor que podemos obter. 
Note que não podemos usar duas ou mais fatias menores de diferentes pães para formarmos uma fatia do tamanho selecionado. (ﬁcaria muito deselegante dar um lanche recortado às pessoas).

Escreva um programa que, dados os tamanhos de pão disponíveis (em centímetros) e a quantidade de pessoas a serem atendidas, 
retorne o tamanho inteiro máximo (em centímetros) da fatia que pode ser cortada de maneira a atender todas as pessoas.

Entrada
A entrada contém um único conjunto de testes, que deve ser lido do dispositivo de entrada padrão (normalmente o teclado). 
A primeira linha da entrada contém um inteiro N que indica a quantidade pessoas (1 ≤ N ≤ 10.000). A segunda linha contém um inteiro K (1 ≤ K ≤ 10.000) 
que é a quantidade de sanduíches disponível. Na terceira linha há K inteiros M (1 ≤ M ≤ 10.000) separados por um espaço em branco representando o tamanho de cada pão.

Saída
Seu programa deve imprimir, na saída padrão, uma única linha, contendo o tamanho inteiro máximo da fatia que pode ser cortada.
"""
def can_cut_slices(sizes, num_people, slice_size):
    total_slices = 0
    for size in sizes:
        total_slices += size // slice_size
    return total_slices >= num_people

def max_slice_size(num_people, num_sandwiches, sandwich_sizes):
    low, high = 1, max(sandwich_sizes)
    best_size = 0

    while low <= high:
        mid = (low + high) // 2
        if can_cut_slices(sandwich_sizes, num_people, mid):
            best_size = mid
            low = mid + 1
        else:
            high = mid - 1

    return best_size

# Read input
import sys
input = sys.stdin.read
data = input().split()

N = int(data[0])
K = int(data[1])
M = list(map(int, data[2:]))

# Calculate and print the result
print(max_slice_size(N, K, M))

# Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================

"""
8 - Fault Detector (ProblemId 2682, Page 22 of 34, difficulty 5/10):
There is a machine, that produces an increasing sequence of numbers. That is, every number of this sequence is larger than its predecessor.

However, this machine is starting to break. When it starts, everything is OK. However, after some time, it starts producing wrong results.

Your task is, whenever the machine produces the first wrong number or if it turns off, ignore all following results and produce the 
next smallest valid number.

Since we are just checking the machine, we cannot turn it off. We have to wait it turn it of on its own. That is, we must keep reading 
numbers until the machine turns of on its own.

Input
The input consists of 0 < N < 104 lines, and ends with EOF.

Each line consists of a single integer 0 < X < 230.

Output
A single line, with a single integer Y, the solution for the problem.
"""
import sys

def fault_detector():
    last_valid_number = None
    
    for line in sys.stdin:
        current_number = int(line.strip())
        
        if last_valid_number is None or current_number > last_valid_number:
            last_valid_number = current_number
        else:
            break
    
    if last_valid_number is not None:
        print(last_valid_number + 1)

if __name__ == "__main__":
    fault_detector()

# Correct answer with: 4 changes after copilot and/or copilot chat and 1 manual changes
    # Introduced + 1 to the last_valid_number

# ================================================================================================================================================================


"""
9 - Seven (ProblemId 2590, Page 21 of 34, difficulty 7/10):
Chagas is a boy who loves to eat boiled eggs, but he hates math. He hates exponentiation and for some reason 
does not correctly calculate operations involving the number 7. Knowing this, his friend Caco decided to
make a challenge: he wants Chagas to calculate the Nth power of 7 and say the last digit of that power. 
If Chagas hit all The questions, I would get 7 boiled eggs. For example, where N = 2, the result would be 9, 
because 7^2 = 49. The problem is that, depending on the value of N, the result of exponentiation can be a very 
large number. Without ideas, Chagas decided to ask for his help.

Write a program that, given a number, calculate the last digit of the value of 7 raised to that number.

Input
The entry consists of several instances. The first line of the entry contains an integer T indicating the number of instances.
Each instance is composed of only one row, which contains the integer N (0 ≤ N ≤ 10^9).

Output
For each instance in the entry, print a line containing an integer, the last digit of 7^N.
"""
def main():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    T = int(data[0])
    results = []
    
    for i in range(1, T + 1):
        N = int(data[i])
        if N == 0:
            results.append(1)
        else:
            last_digit_cycle = [7, 9, 3, 1]
            results.append(last_digit_cycle[(N % 4) - 1])
    
    for result in results:
        print(result)

if __name__ == "__main__":
    main()

# Memory Limit Exceeded with: 6 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================


"""
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):
"""

# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================


"""
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):
"""

# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================


"""
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):
"""

# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================


"""
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):
"""

# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================



"""
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):
"""

# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================


"""
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):
"""

# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================


"""
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):
"""

# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================


"""
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):
"""

# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================


"""
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):
"""

# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================


"""
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):
"""

# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================


"""
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):
"""

# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================


"""
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):
"""

# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================


"""
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):
"""

# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# ================================================================================================================================================================
