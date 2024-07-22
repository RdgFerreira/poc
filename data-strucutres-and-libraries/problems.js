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
15 - Maratona (ProblemId 2366, difficulty 5/10):
*/


// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
15 - Maratona (ProblemId 2366, difficulty 5/10):
*/


// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
15 - Maratona (ProblemId 2366, difficulty 5/10):
*/


// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
15 - Maratona (ProblemId 2366, difficulty 5/10):
*/


// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes