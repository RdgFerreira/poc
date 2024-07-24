// =====================================================================================

/*
1 - Rich of Chimarrão (ProblemId 3357):

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
*/

function findRichOfChimarrao(input) {
    // Split the input into lines
    const lines = input.trim().split('\n');
    
    // Parse the first line for N, L, and Q
    const [N, L, Q] = lines[0].split(' ').map(Number);
    
    // Parse the second line for participant names
    const participants = lines[1].split(' ');
    
    // Calculate the total number of gourds that can be filled
    const totalGourds = Math.floor(L / Q);
    
    // Determine the index of the participant who will receive the last gourd
    const lastGourdIndex = (totalGourds - 1) % N;
    
    // Calculate the amount of water in the last gourd
    const lastGourdAmount = (L - totalGourds * Q).toFixed(1);
    
    // Get the name of the participant who will receive the last gourd
    const richParticipant = participants[lastGourdIndex];
    
    // Print the result
    console.log(`${richParticipant} ${lastGourdAmount}`);
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
findRichOfChimarrao(input);

// 75% Correct answers with: 6 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

function guessDataStructure(input) {
    // Split the input into lines
    const lines = input.trim().split('\n');
    
    // Initialize an array to store the results
    const results = [];
    
    // Process each test case
    for (let i = 0; i < lines.length; i++) {
        // Parse the number of operations
        const n = Number(lines[i]);
        
        // Initialize arrays to represent the data structures
        const stack = [];
        const queue = [];
        const priorityQueue = [];
        
        // Initialize flags to track whether the data structures are valid
        let isStack = true;
        let isQueue = true;
        let isPriorityQueue = true;
        
        // Process the operations
        for (let j = 0; j < n; j++) {
            const [op, val] = lines[i + j + 1].split(' ').map(Number);
            
            if (op === 1) {
                stack.push(val);
                queue.push(val);
                priorityQueue.push(val);
            } else {
                if (stack.pop() !== val) {
                    isStack = false;
                }
                if (queue.shift() !== val) {
                    isQueue = false;
                }
                if (priorityQueue.sort((a, b) => b - a).shift() !== val) {
                    isPriorityQueue = false;
                }
            }
        }
        
        // Determine the result for the test case
        if (isStack && !isQueue && !isPriorityQueue) {
            results.push('stack');
        } else if (!isStack && isQueue && !isPriorityQueue) {
            results.push('queue');
        } else if (!isStack && !isQueue && isPriorityQueue) {
            results.push('priority queue');
        } else if (!isStack && !isQueue && !isPriorityQueue) {
            results.push('impossible');
        } else {
            results.push('not sure');
        }
        
        // Move to the next test case
        i += n;
    }
    
    // Print the results
    console.log(results.join('\n'));
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
guessDataStructure(input);



// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

function countDiamonds(input) {
    // Split the input into lines
    const lines = input.trim().split('\n');
    
    // Parse the number of test cases
    const N = Number(lines[0]);
    
    // Process each test case
    for (let i = 1; i <= N; i++) {
        const line = lines[i];
        let count = 0;
        let stack = [];
        
        // Iterate over the characters in the line
        for (let j = 0; j < line.length; j++) {
            const char = line[j];
            
            if (char === '<') {
                stack.push(char);
            } else if (char === '>' && stack.length > 0) {
                stack.pop();
                count++;
            }
        }
        
        console.log(count);
    }
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
countDiamonds(input);



// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

function sortStringsByLength(input) {
    // Split the input into lines
    const lines = input.trim().split('\n');
    
    // The first line contains the number of sets
    const N = parseInt(lines[0], 10);
    
    // Initialize an array to hold the sorted sets
    const sortedSets = [];
    
    // Process each set of strings
    for (let i = 1; i <= N; i++) {
        // Split the set into individual words
        const words = lines[i].split(' ');
        
        // Sort the words by their length, maintaining original order for equal lengths
        words.sort((a, b) => a.length - b.length || lines[i].indexOf(a) - lines[i].indexOf(b));
        
        // Join the sorted words into a single string with spaces between them
        sortedSets.push(words.join(' '));
    }
    
    // Print the sorted sets
    sortedSets.forEach(set => console.log(set));
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
sortStringsByLength(input);


// 95% Correct answers with: 6 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

function checkParentheses(expressions) {
    return expressions.map(expression => {
        let balance = 0;
        for (let char of expression) {
            if (char === '(') {
                balance++;
            } else if (char === ')') {
                balance--;
                if (balance < 0) {
                    return "incorrect";
                }
            }
        }
        return balance === 0 ? "correct" : "incorrect";
    });
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const expressions = input.trim().split('\n');

const result = checkParentheses(expressions);

console.log(result.join('\n'));


// Correct answer with: 2 changes after copilot and/or copilot chat and 1 manual changes

// =====================================================================================

/*
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
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let inputLines = [];

rl.on('line', (line) => {
    inputLines.push(line);
});

rl.on('close', () => {
    inputLines.forEach((line, index) => {
        let frequency = {};

        // Calculate frequency of each character
        for (let char of line) {
            let ascii = char.charCodeAt(0);
            if (frequency[ascii]) {
                frequency[ascii]++;
            } else {
                frequency[ascii] = 1;
            }
        }

        // Convert frequency object to array and sort
        let sortedFrequencies = Object.keys(frequency).map(Number).sort((a, b) => {
            if (frequency[a] === frequency[b]) {
                return b - a; // Higher ASCII value first if frequencies are the same
            }
            return frequency[a] - frequency[b]; // Ascending order of frequencies
        });

        // Print the result for the current line
        sortedFrequencies.forEach(ascii => {
            console.log(`${ascii} ${frequency[ascii]}`);
        });

        // Print a blank line to separate sets of output
        if (index < inputLines.length - 1) {
            console.log('');
        }
    });
});


// Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

function sortNumbers(input) {
    const lines = input.trim().split('\n');
    let index = 0;
    let result = [];

    while (index < lines.length) {
        const [N, M] = lines[index].split(' ').map(Number);
        if (N === 0 && M === 0) {
            result.push('0 0');
            break;
        }

        let numbers = [];
        for (let i = 1; i <= N; i++) {
            numbers.push(Number(lines[index + i]));
        }

        numbers.sort((a, b) => {
            const modA = a % M;
            const modB = b % M;

            if (modA !== modB) {
                return modA - modB;
            }

            const isAOdd = a % 2 !== 0;
            const isBOdd = b % 2 !== 0;

            if (isAOdd && !isBOdd) {
                return -1;
            }
            if (!isAOdd && isBOdd) {
                return 1;
            }

            if (isAOdd && isBOdd) {
                return b - a;
            }

            return a - b;
        });

        result.push(`${N} ${M}`);
        result.push(...numbers);

        index += N + 1;
    }

    return result.join('\n');
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const output = sortNumbers(input);

console.log(output);



// Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

function findMarbles(input) {
    const lines = input.trim().split('\n');
    let index = 0;
    let caseNumber = 1;
    let result = [];

    while (index < lines.length) {
        const [N, Q] = lines[index].split(' ').map(Number);
        if (N === 0 && Q === 0) {
            break;
        }

        const marbles = lines.slice(index + 1, index + N + 1).map(Number);
        const queries = lines.slice(index + N + 1, index + N + Q + 1).map(Number);

        marbles.sort((a, b) => a - b);

        result.push(`CASE# ${caseNumber}:`);
        for (let query of queries) {
            const position = marbles.indexOf(query);
            if (position !== -1) {
                result.push(`${query} found at ${position + 1}`);
            } else {
                result.push(`${query} not found`);
            }
        }

        caseNumber++;
        index += N + Q + 1;
    }

    return result.join('\n');
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const output = findMarbles(input);
console.log(output);



// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

function solve(input) {
    let lines = input.trim().split('\n');
    let instance = 1;
    let index = 0;

    while (index < lines.length) {
        let n = parseInt(lines[index]);
        if (n === 0) break;
        index++;

        let teams = Array.from({ length: n }, () => ({
            points: 0,
            scored: 0,
            received: 0,
            wins: 0,
            games: 0
        }));

        for (let i = 0; i < (n * (n - 1)) / 2; i++) {
            let [x, y, z, w] = lines[index].split(' ').map(Number);
            index++;

            teams[x - 1].scored += y;
            teams[x - 1].received += w;
            teams[x - 1].games++;
            teams[z - 1].scored += w;
            teams[z - 1].received += y;
            teams[z - 1].games++;

            if (y > w) {
                teams[x - 1].points += 2;
                teams[x - 1].wins++;
                teams[z - 1].points += 1;
            } else {
                teams[z - 1].points += 2;
                teams[z - 1].wins++;
                teams[x - 1].points += 1;
            }
        }

        teams.forEach(team => {
            team.averageBasket = team.received === 0 ? team.scored : team.scored / team.received;
        });

        teams.sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            if (b.averageBasket !== a.averageBasket) return b.averageBasket - a.averageBasket;
            if (b.scored !== a.scored) return b.scored - a.scored;
            return a.games - b.games;
        });

        let result = `Instancia ${instance}\n`;
        result += teams.map((_, i) => i + 1).join(' ') + '\n';
        console.log(result);

        instance++;
    }
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
solve(input);


// 95% Correct answers with: 5 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
let cityCount = 1;

rl.on('line', (line) => {
    if (line.trim() === '0') {
        processInput();
        rl.close();
    } else {
        inputLines.push(line.trim());
    }
});

function processInput() {
    let index = 0;

    while (index < inputLines.length) {
        let N = parseInt(inputLines[index]);
        index++;
        if (N === 0) break;

        let properties = [];

        for (let i = 0; i < N; i++) {
            let [X, Y] = inputLines[index].split(' ').map(Number);
            properties.push({ residents: X, consumption: Y });
            index++;
        }

        properties.sort((a, b) => {
            let consumptionA = Math.floor(a.consumption / a.residents);
            let consumptionB = Math.floor(b.consumption / b.residents);
            if (consumptionA === consumptionB) {
                return a.residents - b.residents;
            }
            return consumptionA - consumptionB;
        });

        let totalResidents = properties.reduce((sum, prop) => sum + prop.residents, 0);
        let totalConsumption = properties.reduce((sum, prop) => sum + prop.consumption, 0);
        let averageConsumption = totalConsumption / totalResidents;

        console.log(`Cidade# ${cityCount}:`);
        let output = properties.map(prop => `${prop.residents}-${Math.floor(prop.consumption / prop.residents)}`).join(' ');
        console.log(output);
        console.log(`Consumo medio: ${averageConsumption.toFixed(2)} m3.`);

        cityCount++;
        if (index < inputLines.length) {
            console.log('');
        }
    }
}


// Time limit exceeded with: 7 changes after copilot and/or copilot chat and 0 manual changes