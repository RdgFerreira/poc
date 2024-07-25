// =====================================================================================

/*
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
*/

function calculateDisplacement(input) {
    const lines = input.trim().split('\n');

    for (let line of lines) {
        const [v, t] = line.split(' ').map(Number);
        console.log((2 * v * t).toString());
    }
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
calculateDisplacement(input);

// Correct answer with: 1 changes after copilot and/or copilot chat and 1 manual changes
    // Removed -0 from the output

// =====================================================================================

/*
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
*/

const fs = require('fs');

function findCaptainAge(testCases) {
    let results = [];
    for (let i = 0; i < testCases.length; i++) {
        let [N, ...ages] = testCases[i];
        let captainAge = ages[Math.floor(N / 2)];
        results.push(`Case ${i + 1}: ${captainAge}`);
    }
    return results;
}

// Read input from stdin
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');
const T = parseInt(lines[0], 10);
const testCases = lines.slice(1).map(line => line.split(' ').map(Number));

// Process the input
const results = findCaptainAge(testCases);

// Print the output
results.forEach(line => console.log(line));


// Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

function calculateDaysToEatFood(input) {
    const lines = input.trim().split('\n');

    for (let i = 1; i < lines.length; i++) {
        let X = parseFloat(lines[i]);
        let days = 0;
        while (X > 1) {
            X /= 2;
            days++;
        }
        console.log(`${days} dias`);
    }
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
calculateDaysToEatFood(input);


// Correct answer with: 1 changes after copilot and/or copilot chat and 1 manual changes
    // changed const to let

// =====================================================================================

/*
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
*/

function calculateWheatGrains(input) {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0], 10);
    const results = [];

    for (let i = 1; i <= N; i++) {
        const X = parseInt(lines[i], 10);
        let totalGrains = 0n;

        // Calculate the total number of grains using BigInt for large numbers
        for (let j = 0; j < X; j++) {
            totalGrains += 1n << BigInt(j); // 2^j grains on the j-th square
        }

        // Convert grains to grams and then to kilograms
        const totalGrams = totalGrains / 12n;
        const totalKilograms = totalGrams / 1000n;

        results.push(`${totalKilograms} kg`);
    }

    return results.join('\n');
}

// Example usage:
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
console.log(calculateWheatGrains(input));


// Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function factorial(num) {
    if (num === 0 || num === 1) return BigInt(1);
    let result = BigInt(1);
    for (let i = 2; i <= num; i++) {
        result *= BigInt(i);
    }
    return result;
}

rl.on('line', (line) => {
    const [M, N] = line.split(' ').map(Number);
    if (M === undefined || N === undefined) return;
    const sumFactorials = factorial(M) + factorial(N);
    console.log(sumFactorials.toString());
});


// Correct answer with: 3 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function solve(input) {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0]);
    const results = [];
    
    for (let i = 1; i <= N; i++) {
        const X = parseInt(lines[i]);
        if (isPrime(X)) {
            results.push("Prime");
        } else {
            results.push("Not Prime");
        }
    }
    
    return results.join('\n');
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
console.log(solve(input));


// Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const g = 9.80665;
const pi = 3.14159;

function calculateDistance(h, alpha, V) {
    const rad = alpha * (pi / 180);
    const term1 = V * Math.cos(rad) / g;
    const term2 = V * Math.sin(rad) + Math.sqrt((V * Math.sin(rad)) ** 2 + 2 * g * h);
    return term1 * term2;
}

let input = [];
rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    let i = 0;
    while (i < input.length) {
        const h = parseFloat(input[i++]);
        const [p1, p2] = input[i++].split(' ').map(Number);
        const n = parseInt(input[i++], 10);

        for (let j = 0; j < n; j++) {
            const [alpha, V] = input[i++].split(' ').map(Number);
            const distance = calculateDistance(h, alpha, V);
            const result = distance >= p1 && distance <= p2 ? 'DUCK' : 'NUCK';
            console.log(`${distance.toFixed(5)} -> ${result}`);
        }
    }
});



// Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

function countDigits(n) {
    if (n < 0) return Array(10).fill(0);
    let count = Array(10).fill(0);
    for (let i = 1; i <= n; i *= 10) {
        let divider = i * 10;
        let current = Math.floor(n / i);
        let remainder = n % i;

        for (let j = 0; j < 10; j++) {
            count[j] += Math.floor(current / 10) * i;
            if (j < current % 10) count[j] += i;
            else if (j === current % 10) count[j] += remainder + 1;
        }
        count[0] -= i; // Adjust for leading zeros
    }
    return count;
}

function countDigitsInRange(A, B) {
    let countB = countDigits(B);
    let countA = countDigits(A - 1);
    return countB.map((val, idx) => val - countA[idx]);
}

function processInput(input) {
    let lines = input.trim().split('\n');
    let results = [];

    for (let line of lines) {
        let [A, B] = line.split(' ').map(Number);
        if (A === 0 && B === 0) break;
        let result = countDigitsInRange(A, B);
        results.push(result.join(' '));
    }

    return results.join('\n');
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
console.log(processInput(input));


// Correct answer with: 6 changes after copilot and/or copilot chat and 0 manual changes

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