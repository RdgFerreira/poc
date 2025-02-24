# =====================================================================================

"""
1 - Encryption (ProblemId 1024, difficulty 5/10):

You have been asked to build a simple encryption program. This program should be able to send coded messages 
without someone been able to read them. The process is very simple. It is divided into two parts.

First, each uppercase or lowercase letter must be shifted three positions to the right, 
according to the ASCII table: letter 'a' should become letter 'd', letter 'y' must become the character '|' and so on. 
Second, each line must be reversed. After being reversed, all characters from the half on (truncated) must be moved one position to the left in ASCII. 
In this case, 'b' becomes 'a' and 'a' becomes '`'.

For example, if the resulting word of the first part is "tesla", the letters "sla" should be moved one position to the left. 
However, if the resulting word of the first part is "t#$A", the letters "$A" are to be displaced.

Input
The input contains a number of cases of test. The first line of each case of test contains an integer N (1 ≤ N ≤ 1 * 10⁴), 
indicating the number of lines the problem should encrypt. The following N lines contain M characters each M (1 ≤ M ≤ 1 * 10³).

Output
For each input, you must present the encrypted message.
"""

from typing import List

def encryption(n: int, lines: List[str]) -> List[str]:
    encrypted = []
    for line in lines:
        encrypted_line = ''
        for char in line:
            if char.isalpha():
                encrypted_line += chr(ord(char) + 3)
            else:
                encrypted_line += char
        encrypted_line = encrypted_line[::-1]
        encrypted_line = encrypted_line[:len(encrypted_line) // 2] + ''.join([chr(ord(char) - 1) for char in encrypted_line[len(encrypted_line) // 2:]])
        encrypted.append(encrypted_line)
    return encrypted

# read lines from input
n = int(input())
lines = [input() for _ in range(n)]
print(*encryption(n, lines), sep='\n')

# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
2 - Justifier II (ProblemId 1278, difficulty 1/10):

We have some texts and we want to right justify them, that is, align them to the right. 
Create a program that reads a text, formats it right justifies all of its lines, printing 
them in the same order as they appear in the input.

Input
The input contains several test cases. The first line of a test case will contain an 
integer N (1 ≤ N ≤ 100) indicating the number of lines that form the text. 
Each of the following N lines will contain a text, composed of 1 to 50 uppercase letters (‘A’-‘Z’) or spaces (‘ ’). 
All text lines will contain at least one letter. There may be more than one space character between words. 
Also, there may be leading and trailing spaces in the input lines. The end of input is indicated by N = 0.

Output
For each test case print the text lines with a single space character between words, 
and padded on the left with space characters so that all the lines will have the same 
length as the longest line existing in that text. Print an empty line between all the test cases. 
There must be no trailing spaces printed out, and you should discard any unnecessary leading spaces, 
so that at least one line on every text starts with a letter.
"""

from typing import List

def justifier(n: int, lines: List[str]) -> List[str]:
    justified = []
    max_len = max([len(line) for line in lines])
    for line in lines:
        justified.append(' ' * (max_len - len(line)) + line)
    return justified

# read lines from input
while True:
    n = int(input())
    if n == 0:
        break
    lines = [input() for _ in range(n)]
    print(*justifier(n, lines), sep='\n')
    print()

# Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
3 - Fit or Dont Fit II (ProblemId 1241, difficulty 2/10):

Paulinho have again in your hands another problem. Now the teacher asked him to make a new 
program to verify from two big numbers A and B, if B corresponds to the last digit of A.

Input
The input consists of several test cases. The first line of input contains 
an integer N that indicates the number of test cases. Each test case consists of two numbers A and B greather than zero, 
with up to 1000 digits each.

Output
For each test case, print a message informing if the second number fit ("encaixa" in portughese) or 
didn't fit ("nao encaixa") in the first number.
"""

from typing import List

def fit_or_dont_fit(n: int, numbers: List[str]) -> List[str]:
    number, suffix = numbers[0], numbers[1]
    number = str(number)
    suffix = str(suffix)
    if number.endswith(suffix):
        return 'encaixa'
    return 'nao encaixa'

# read lines from input
n = int(input())
numbers = [input().split() for _ in range(n)]
for pair in numbers: print(fit_or_dont_fit(n, pair))

# Correct answer with: 2 changes after copilot and/or copilot chat and 1 manual changes
    # fixed endswith usage

# =====================================================================================

"""
4 - Caesar Cipher (ProblemId 1253, difficulty 3/10):

Julius Caesar used a system of cryptography, now known as Caesar Cipher, 
which shifted each letter 2 places further through the alphabet (e.g. 'A' shifts to 'C', 'R' shifts to 'T', etc.). 
At the end of the alphabet we wrap around, that is 'Y' shifts to 'A'. We can, of course, try shifting by any number.

Input
The input contains several test cases. The first line of input contains an integer N that indicates 
the number of test cases. Each test case is composed by two lines. The first line contais a string that is a codified sentence. 
This string will contain between 1 and 50 characters, inclusive. Each character is an uppercase letter ('A'-'Z'), 
that is the codified sentence to this modified Caesar Cipher. The second line contains the number of right shift, 
this value is between 0 and 25, inclusive.

Output
Given an encoded text and a number of shifted letters, decode it to the original sentence, acording to the 
explanation above and the following example.
"""

def caesar_cipher(encoded: str, shift: int):
    decoded = ''
    for char in encoded:
        decoded += chr(ord(char) - shift) if ord(char) - shift >= 65 else chr(ord(char) - shift + 26)
    return decoded

# read lines from input
n = int(input())
for _ in range(n):
    encoded = input()
    shift = int(input())
    print(caesar_cipher(encoded, shift))


# Correct answer with: 3 changes after copilot and/or copilot chat and 1 manual changes
    # fixed input reading and processing

# =====================================================================================

"""
5 - Complete Sentence (ProblemId 1551, difficulty 4/10):

Your English teacher loves to bring new stuff to the class, and today it wasn't different. 
There is a city, according to your teacher, where the people take really seriously the way they talk to each other. 
In particular, when two people are talking, they think a lot in the sentence that they are going to say before they say it, 
so that they can ensure their sentence will be a “full sentence”, or maybe an “almost full sentence”.

Considering our 26 letters alphabet, a sentence is “full” if, and only if, it has all the letters of our alphabet in it. 
In a similar way, a sentence is “almost full” if, and only if, it is not “full”, but has at least half of the letters of our alphabet in it. 
When a sentence is not “full” neither “almost full”, it is “poorly designed”.

Your teacher gave you a really hard task: given several sentences exchanged between several people from the quoted city, 
say in which of the given categories each sentence fits in.

Input
The first line contains an integer N, indicating the number of test cases to follow.

Each test case contains one line, containing lowercase letters, white spaces and/or commas. 
The number of characters of each line is at least 3 and at most 1000, counting the spaces.

Output
For each test case, print one line containing one of the following sentences: “frase completa”, 
when the sentence is considered full; “frase quase completa”, when the sentence is not considered full,
but is considered almost full; or “frase mal elaborada”, when the sentence is not full neither almost full.
"""

def complete_sentence(sentence: str) -> str:
    sentence = ''.join([char for char in sentence if char.isalpha()])
    if len(set(sentence)) == 26:
        return 'frase completa'
    if len(set(sentence)) >= 13:
        return 'frase quase completa'
    return 'frase mal elaborada'

# read lines from input
n = int(input())
for _ in range(n):
    sentence = input()
    print(complete_sentence(sentence))


# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
6 - Short Attendance (ProblemId 1277, difficulty 6/10):

The students at your university have lately picked up the annoying habit of missing classes. 
To fix this problem your board has decided to only allow students with 75% or higher attendance to sit for the exams.

From a list of students' names and their respective attendance records, print out the 
list of students who did not attend to enough classes and will be denied to sit for exams.

Input
The input contains several test cases. The first input line will contain an integer T indicating the number of test cases that follow.
Each test case is composed of three input lines:

The first line of a test case will contain an integer N (0 ≤ N ≤ 100) indicating the number of students in the class.
The second line will contain N student names with up to 50 chars each, separated by a single space character. 
All names will contain only uppercase or lowercase letters (‘A’-‘Z’,‘a’-‘z’).
The third line will contain N attendance records, corresponding to their respective students from the previous line. 
The attendance records will be separated by a single space character, 
and contain only ‘A’, ‘P’ and ‘M’ characters. A ‘P’ indicates that the student was present in a class, ‘A’ shows that he was absent 
(he did not attend) and ‘M’ shows that he was absent for a class but submitted a doctor's note then that class is not counted when calculating 
his attendance percentage. An attendance record will contain at least one ‘A’ or ‘P’ character.

Output
For each test case print out the names of all the students who do not meet the attendance requirements, 
separated by a single space character. Do not leave trailing spaces in the end of each line.
"""

from typing import List

def shortAttendance(n: int, students: List[str], attendance: List[str]) -> List[str]:
    short_attendance = []
    for student, record in zip(students, attendance):
        if record.count('P') / (record.count('P') + record.count('A')) < 0.75:
            short_attendance.append(student)
    return short_attendance

# read lines from input
t = int(input())
for _ in range(t):
    n = int(input())
    students = input().split()
    attendance = input().split()
    print(*shortAttendance(n, students, attendance))


# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
7 - How Easy (ProblemId 1243, difficulty 7/10):

TopCoder decided to automate the process of assigning levels of difficulty to the problems. 
TopCoder developers concluded that the difficulty of the problem is related only to average 
length of the words in the problem statement. If the average length of the words of the statement is less than or equal to 3, 
the problem difficulty receives 250 points. If the average length of the words of the statement is 4 or 5, 
the problem difficulty receives 500 points. If the average length of utterance of words is greater than or equal to 6, 
the problem difficulty receives 1000 points.


Definitions:

Symbol: A set of characters linked by spaces from both sides, or at the beginning of the 
description of the problem, or even the end of the description of the problem.

Word: a symbol that contains only letters a-z or A-Z, and can be finished with a single point.

Word length: number of letters in a word (a point is not a letter).


Examples of symbols are words (quotes just to exemplify): "AB", "ab".

Example of symbols that are not words: "ab..", "a.b", ".ab", "a.b.", "a2b.", ".".


The average length of the words is given by the sum of the sizes of the utterance of words divided by the number of words, 
the division is made by integers. If the word count is zero, then the average length of the words is zero.


Your task is given the problem statement, compute its classification of difficulty of the problem, which can be 250, 500, or 1000.

Input
The entry contains several test cases. Each test case is composed of a line containing the statement of a problem, 
is a string containing between 1 and 50 characters ('A'-'Z','a'-'z','0'-'9', ' ', '.') inclusive. The end of input is determined by EOF.

Output
Compute the average length of words in the statement of the problem, and show the classification of the problem, 
for more details see the example below.
"""

import sys
import re

def is_valid_word(symbol):
    return re.match(r'^[a-zA-Z]+\.?$', symbol) is not None

def calculate_difficulty(statement):
    symbols = statement.split()
    words = [symbol.rstrip('.') for symbol in symbols if is_valid_word(symbol)]
    if not words:
        average_length = 0
    else:
        total_length = sum(len(word) for word in words)
        average_length = total_length // len(words)
    
    if average_length <= 3:
        return 250
    elif average_length in [4, 5]:
        return 500
    else:
        return 1000

def main():
    input_lines = sys.stdin.read().strip().split('\n')
    for line in input_lines:
        difficulty = calculate_difficulty(line)
        print(difficulty)

if __name__ == "__main__":
    main()

# Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
8 - Friendly Int Parser (ProblemId 1287, difficulty 8/10):

Computers have made their way into a significant percentage of the homes in the world, 
and as programmers we are responsible for designing user interfaces that everyone can use. 
User interfaces need to be flexible so that if a user makes some non-fatal error, the interface can still figure out what the user meant.

Your task is to write a program which processes a text input representing an integer, however, 
because this is a friendly user interface, we cut the user a little more slack:

1. If the user types the letter "O" or "o", we assume that they meant the digit "0".

2. If the user types the letter "l", we assume that they meant the digit "1".

3. Commas and spaces are allowed, but are not processed (ignore them).

If the user has still not entered a valid non-negative integer (even with the rules above), 
print the string "error". Overflow (a value greater than 2147483647) is considered invalid and "error" should be printed.

Input
Each line of input is one test case and contains one string n. This n will contain between 0 and 50, 
inclusive, letters, numbers, spaces, or commas.

Output
For each test case in the input, your program must print the integer represented by n or "error" if n is not a valid non-negative integer.
Note: an empty string does not represent a valid integer.
"""

def friendly_int_parser(n):
    # Step 2: Replace 'O' and 'o' with '0'
    n = n.replace('O', '0').replace('o', '0')
    
    # Step 3: Replace 'l' with '1'
    n = n.replace('l', '1')
    
    # Step 4: Remove all commas and spaces
    n = n.replace(',', '').replace(' ', '')
    
    # Step 5: Check if the resulting string is a valid non-negative integer
    if not n.isdigit():
        print("error")
        return
    
    # Convert the string to an integer
    num = int(n)
    
    # Check for overflow
    if num > 2147483647:
        print("error")
    else:
        print(num)

# read lines from input
while True:
    try:
        n = input()
        friendly_int_parser(n)
    except EOFError:
        break



# Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
9 - Kickback Sum (ProblemId 1898, difficulty 9/10):

The brazilian agency for criminal investigations called OBI (Operation of Big Investigation) 
noted that, as the has occurred in Petrobras, a lot of money was diverted from public state 
coffers to pay bribes to politicians in recent years, especially by the political party QU (United Quadrille).
The investigation is still in course and the agency has recruited you to convert some values that are with strange characters 
after it were decrypted the original files. Your task in this case is Relatively simple: 
just remove all strange characters (non-numeric) of each of the two available numbers and sum these values. 
Just note that the first 11 valid digits of the first number corresponding to the corrupt ID :)

Input
The input contains two rows, each one containing between 1 and 60 characteres 
('0'-'9' and others non numeric characteres or, at least, 1 character '0'-'9') and at maximun, one decimal point ".". 
Desconsidering the non-numeric digits, the final number can have up to 17 characters, at maximum (including decimal point). 
Any number after the second digit after the decimal point must be discarded.

Output
Print the cpf of the corrupt as shown below and the sum of the two numbers that were diverted from public funds, always with two decimal places.
cpf <cpf>
<sum>

Input Sample
7a5a6adfg4a4adsfgsd9fg6aa904aa91#$%11.23
42**&774667

Output Sample
cpf 75644969049
42774778.23
"""

import re

def clean_number(number_str):
    # Remove all non-numeric characters except the decimal point
    cleaned = re.sub(r'[^0-9.]', '', number_str)
    # Ensure only two decimal places
    if '.' in cleaned:
        integer_part, decimal_part = cleaned.split('.')
        cleaned = integer_part + '.' + decimal_part[:2]
    return cleaned

def main():
    # Read input
    first_line = input().strip()
    second_line = input().strip()
    
    # Clean the numbers
    cleaned_first = clean_number(first_line)
    cleaned_second = clean_number(second_line)
    
    # Extract CPF (first 11 digits of the first number)
    cpf = ''.join(filter(str.isdigit, cleaned_first))[:11]
    
    # Convert to float
    num1 = float(cleaned_first)
    num2 = float(cleaned_second)
    
    # Calculate the sum
    total_sum = num1 + num2
    
    # Print results
    print(f"cpf {cpf}")
    sum = round(total_sum, 2)
    print(str(sum))

if __name__ == "__main__":
    main() 

# 65% Correct answers with: 4 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
10 - Growing Strings (ProblemId 1141, difficulty 10/10):

Gene and Gina have a particular kind of farm. Instead of growing animals and vegetables, as it is usually the case in regular farms, 
they grow strings. A string is a sequence of characters. Strings have the particularity that, as they grow, 
they add characters to the left and/or to the right of themselves, but they never lose characters, nor insert new characters in the middle.

Gene and Gina have a collection of photos of some strings at different times during their growth. 
The problem is that the collection is not annotated, so they forgot to which string each photo belongs to.
They want to put together a wall to illustrate strings growing procedures, but they need your help to find an appropriate sequence of photos.

Each photo illustrates a string. The sequence of photos must be such that if si comes immediately before si+1 in the sequence, 
then si+1 is a string that may have grown from si (i.e., si appears as a consecutive substring of si+1). 
Also, they do not want to use repeated pictures, so all strings in the sequence must be different.

Given a set of strings representing all available photos, your job is to calculate the size of the largest sequence they 
can produce following the guidelines above.

Input
Each test case is given using several lines. The first line contains an integer N representing the number of 
strings in the set (1 ≤ N ≤ 104). Each of the following N lines contains a different non-empty string of at most 
1000 lowercase letters of the English alphabet. Within each test case, the sum of the lengths of all strings is at most 106.
The last test case is followed by a line containing one zero.

Output
For each test case print a single line with a single integer representing the size of the largest sequence of photos that can be produced.

Input Sample
6
plant
ant
cant
decant
deca
an
2
supercalifragilisticexpialidocious
rag
0

Output Sample
4
2
"""

def longest_sequence(strings):
    n = len(strings)
    strings.sort(key=len)  # Sort strings by length
    dp = [1] * n  # Initialize dp array

    for i in range(n):
        for j in range(i):
            if strings[j] in strings[i]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)

def main():
    import sys
    input = sys.stdin.read
    data = input().strip().split('\n')
    
    index = 0
    results = []
    
    while index < len(data):
        n = int(data[index])
        if n == 0:
            break
        index += 1
        strings = []
        for _ in range(n):
            strings.append(data[index])
            index += 1
        results.append(longest_sequence(strings))
    
    for result in results:
        print(result)

if __name__ == "__main__":
    main()

# Time limit exceeded with: 5 changes after copilot and/or copilot chat and 0 manual changes


# =====================================================================================

"""
11 - Chinese Whispers (ProblemId 1448, difficulty 9/10):

Every kid certainly played Chinese Whispers at least once with other kids. 
It is a game in which one person whispers a message to another, 
which is passed through a line of people until the last player announces the message to the entire group. 
Little John invented a variation of this game.

In this game, there are two teams and a judge. In each team, the kids play as in the original game: 
each kid whispers the message to another, and the last kid announces the message he/she heard. 
The initial message is told to the first kid of each team by the judge. 
This message is the same for both teams. Also, this message contains n characters (letters, spaces, punctuation, etc. included). 
The length of the message is known by all the kids, thus the messages announced by the last kids of each team also have n characters.

The team that announces the most similar message to the original one, wins. 
The "similarity" of a message is equal to the number of positions in which the character in the original
message and the one in the announced message is the same. If this number is equal for both teams, 
find the first position for which one team announced the correct character, and the other didn't. 
If there's still a tie, the game result is a draw.

For example, if the initial message was "O rato roeu a roupa do rei.", 
the first team announced "O ator morreu, garoupa rei.", and the second team 
announced "O pato moeu garoupa dorlei.", the second teams wins, because there are 21 positions in which the 
character is the same for the second team, and only 9 positions for the first one.

Like the ICPC judges, the judges of this game are lazy, too. They asked you to write a program that decides the winning team.

Input
The first line of the input contains an integer t, 1 ≤ t ≤ 1000, the number of instances that your program must process.

Each instance is described by 3 lines. The first line contains the initial message. 
The second line contains the message announced by the first team, and the third line 
contains the message announced by the second team. All the messages will have at most 100 characters, 
and the 3 messages will have the same length.

Output
For each instance, print "Instancia k", where k is the instance number. In the following line, 
print "time W" (Portuguese for "team W"), where W = 1 if the first team wins, or W = 2 if the second team wins. 
If the game result is a draw, print "empate" (Portuguese for "draw") instead. Print a blank line after each test case.

Sample Input
2
O RATO ROEU A ROUPA DO REI.
O ATOR MORREU, GAROUPA REI.
O PATO MOEU GAROUPA DORLEI.
IH EMPATOU!
IH EMPATOU!
IH EMPATOU!

Sample Output
Instancia 1
time 2

Instancia 2
empate
"""

def chinese_whispers(t, instances):
    results = []
    for i in range(t):
        original, team1, team2 = instances[i]
        similarity1 = sum(1 for a, b in zip(original, team1) if a == b)
        similarity2 = sum(1 for a, b in zip(original, team2) if a == b)
        if similarity1 > similarity2:
            results.append('time 1')
        elif similarity2 > similarity1:
            results.append('time 2')
        else:
            for j in range(len(original)):
                if original[j] == team1[j] and original[j] != team2[j]:
                    results.append('time 1')
                    break
                elif original[j] == team2[j] and original[j] != team1[j]:
                    results.append('time 2')
                    break
            else:
                results.append('empate')
    return results

def main():
    import sys
    input = sys.stdin.read
    data = input().strip().split('\n')
    
    index = 0
    results = []
    
    while index < len(data):
        t = int(data[index])
        if t == 0:
            break
        index += 1
        instances = []
        for _ in range(t):
            original = data[index]
            team1 = data[index + 1]
            team2 = data[index + 2]
            instances.append((original, team1, team2))
            index += 3
        results.extend(chinese_whispers(t, instances))
    
    for i, result in enumerate(results, start=1):
        print(f"Instancia {i}")
        print(result)
        print()

if __name__ == "__main__":
    main()