/*
Bhaskara's Formula (ProblemId 1036, Page 1 of 14, difficulty 1/10):

Read 3 floating-point numbers. After, print the roots of bhaskara’s formula. 
If it's impossible to calculate the roots because a division by zero or a square root of a negative number, 
presents the message “Impossivel calcular”.
*/
function bhaskara() {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
    console.log(lines);
    var [A, B, C] = lines.shift().split(' ').map(Number);
    var delta = Math.pow(B, 2) - 4 * A * C;
    if (delta < 0 || A === 0) {
        console.log('Impossivel calcular');
    } else {
        var R1 = (-B + Math.sqrt(delta)) / (2 * A);
        var R2 = (-B - Math.sqrt(delta)) / (2 * A);
        console.log(`R1 = ${R1.toFixed(5)}`);
        console.log(`R2 = ${R2.toFixed(5)}`);
    }
}

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================================================================

/*
Simple Sort (ProblemId 1042, Page 2 of 14, difficulty 2/10):

Read three integers and sort them in ascending order. After, print these values in ascending order, a blank line and then the values in the sequence as they were readed.

Input
The input contains three integer numbers.

Output
Present the output as requested above.
*/

function simpleSort() {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
    var [A, B, C] = lines.shift().split(' ').map(Number);
    var sorted = [A, B, C].sort((a, b) => a - b);
    console.log(sorted.join('\n'));
    console.log('');
    console.log([A, B, C].join('\n'));
}

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================================================================

/*
Quadrant (ProblemId 1115, Page 3 of 14, difficulty 1/10):

Write a program to read the coordinates (X, Y) of an indeterminate number of points in Cartesian system. For each point write the quadrant to which it belongs. 
The program finish when at least one of two coordinates is NULL (in this situation without writing any message).

Input
The input contains several tests cases. Each test case contains two integer numbers.

Output
For each test case, print the corresponding quadrant which these coordinates belong, as in the example.
*/

function quadrant() {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
    while (true) {
        var [X, Y] = lines.shift().split(' ').map(Number);
        if (!X || !Y) break;
        if (X > 0 && Y > 0) {
            console.log('primeiro');
        } else if (X < 0 && Y > 0) {
            console.log('segundo');
        } else if (X < 0 && Y < 0) {
            console.log('terceiro');
        } else {
            console.log('quarto');
        }
    }
}

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================================================================

/*
Perfect Number (ProblemId 1164, Page 4 of 14, difficulty 2/10):

In mathematics, a perfect number is an integer for which the sum of all its own positive divisors (excluding itself) is equal to the number itself. 
For example the number 6 is perfect, because 1+2+3 is equal to 6. Your task is to write a program that read integer numbers and print a message 
informing if these numbers are perfect or are not perfect.

Input
The input contains several test cases. The first contains the number of test cases N (1 ≤ N ≤ 100). 
Each one of the following N lines contains an integer X (1 ≤ X ≤ 108), that can be or not a perfect number.

Output
For each test case print the message “X eh perfeito” (X is perfect) or “X nao eh perfeito” (X isn't perfect) according with to above specification.
*/

function perfectNumber () {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
    var N = Number(lines.shift());
    while (N--) {
        var X = Number(lines.shift());
        var sum = 0;
        for (var i = 1; i < X; i++) {
            if (X % i === 0) {
                sum += i;
            }
        }
        if (sum === X) {
            console.log(`${X} eh perfeito`);
        } else {
            console.log(`${X} nao eh perfeito`);
        }
    }
}

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================================================================

/*
Bazinga! (ProblemId 1828, Page 5 of 14, difficulty 4/10):

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
*/

function bazinga() {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
    var T = Number(lines.shift());
    var rules = {
        'tesoura': ['papel', 'lagarto'],
        'papel': ['pedra', 'Spock'],
        'pedra': ['lagarto', 'tesoura'],
        'lagarto': ['Spock', 'papel'],
        'Spock': ['tesoura', 'pedra']
    };
    for (var i = 1; i <= T; i++) {
        var [Sheldon, Raj] = lines.shift().split(' ');
        if (Sheldon === Raj) {
            console.log(`Caso #${i}: De novo!`);
        } else if (rules[Sheldon].includes(Raj)) {
            console.log(`Caso #${i}: Bazinga!`);
        } else {
            console.log(`Caso #${i}: Raj trapaceou!`);
        }
    }
}

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================================================================

/*
Star Trek (ProblemId 1828, Page 6 of 14, difficulty 7/10):

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
*/

function starTrek() {
    var input = require('fs').readFileSync('input.txt', 'utf8');
    var lines = input.split('\n');
    var N = Number(lines.shift());
    var stars = lines.shift().split(' ').map(Number);
    var visitedStars = new Array(N).fill(0);

    var i = 0;
    while (i >= 0 && i < N) {
        if (stars[i] === 0) break;
        if (stars[i] % 2 === 0) {
            stars[i]--;
            visitedStars[i] = 1;
            i--;
        } else {
            stars[i]--;
            visitedStars[i] = 1;
            i++;
        }
    }
    
    var sumStars = 0;
    var sumVisitedStars = 0;
    for (var i = 0; i < N; i++) {
        sumStars += stars[i];
        sumVisitedStars += visitedStars[i];
    }
    console.log(`${sumVisitedStars} ${sumStars}`);
}

// Correct answer with: 1 changes after copilot and/or copilot chat and 2 manual changes
    // added visitedStars array
    // fixed stars arrays to be decremented
    // summation of visitedStars and stars within a for loop

// ================================================================================================================================================================

/*
Crowstorm (ProblemId 2203, Page 7 of 14, difficulty 4/10):

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
*/

function crowstorm() {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
    while(true) {
        if (!lines.length) break;
        var [Xf, Yf, Xi, Yi, Vi, R1, R2] = lines.shift().split(' ').map(Number);
        if (!Xf && !Yf && !Xi && !Yi && !Vi && !R1 && !R2) break;
        var diffX = Xi - Xf;
        var diffY = Yi - Yf;
        if ((Math.sqrt(diffX * diffX + diffY * diffY) + (1.5 * Vi)) <= (R1 + R2)) console.log('Y');
        else console.log('N');
    }
}

// Correct answer with: 1 changes after copilot and/or copilot chat and 3 manual changes
    // added while loop to keep reading lines
    // added if statement to break the while loop if there is no more lines
    // added condition to check if all values are 0 or undefined to break the while loop

// ================================================================================================================================================================

/*
Which Triangle (ProblemId 2313, Page 8 of 14, difficulty 3/10):

Given three values, find out if they form a triangle. If so, check if the triangle is scalene, isoceles or equilateral and if it is a triangle rectangle or not.

Input
Input is given by three integers A,B e C (0 < A,B,C < 105).

Output
The output must be the one single line containing the string "Invalido" if the input values do not represent a triangle.

If the values can be the sides of a triangle the output must be "Valido-Equilatero" if such triangle is equilateral, "Valido-Escaleno" 
if it is scalene or "Valido-Isoceles" if it is isoceles. The next line of output must read "Retangulo: S" if the triangle is rectangle or "Retangulo: N" 
otherwise, as shown in the examples.
*/

function whichTriangle() {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
    var [A, B, C] = lines.shift().split(' ').map(Number);
    if (A + B > C && A + C > B && B + C > A) {
        if (A === B && B === C) {
            console.log('Valido-Equilatero');
        } else if (A !== B && B !== C && A !== C) {
            console.log('Valido-Escaleno');
        } else {
            console.log('Valido-Isoceles');
        }
        if (A * A === B * B + C * C || B * B === A * A + C * C || C * C === A * A + B * B) {
            console.log('Retangulo: S');
        } else {
            console.log('Retangulo: N');
        }
    } else {
        console.log('Invalido');
    }
}

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================================================================

/*
Help Patatatitu (ProblemId 2724, Page 9 of 14, difficulty 4/10):

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
*/

function parseCompound(compound) {
    let elements = [];
    let match;
    let regex = /([A-Z][a-z]*)(\d*)/g;
    while (match = regex.exec(compound)) {
        elements.push({
            element: match[1],
            quantity: match[2] ? Number(match[2]) : 1
        });
    }
    return elements;
}

function containsCompound(experiment, dangerousCompound) {
    for (let i = 0; i <= experiment.length - dangerousCompound.length; i++) {
        if (JSON.stringify(experiment.slice(i, i + dangerousCompound.length)) === JSON.stringify(dangerousCompound)) {
            return true;
        }
    }
    return false;
}

function helpPatatitu() {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
    var N = Number(lines.shift());
    while (N--) {
        var T = Number(lines.shift());
        var dangerousCompounds = [];
        while (T--) {
            dangerousCompounds.push(parseCompound(lines.shift()));
        }
        var U = Number(lines.shift());
        while (U--) {
            var experiment = parseCompound(lines.shift());
            var isDangerous = false;
            for (var i = 0; i < dangerousCompounds.length; i++) {
                if (containsCompound(experiment, dangerousCompounds[i])) {
                    isDangerous = true;
                    break;
                }
            }
            if (isDangerous) {
                console.log('Abortar');
            } else {
                console.log('Prossiga');
            }
        }
        if(N > 0) console.log('');
    }
}

// Correct answer with: 1 changes after copilot and/or copilot chat and 1 manual changes
    // added regex to extract elements and quantities and a function to check if the experiment contains a dangerous compound
    // Stopped printing duplicated new line after last experiment

// ================================================================================================================================================================

/*
Pyramid (ProblemId 2785, Page 10 of 14, difficulty 4/10):

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
*/

function pyramid() {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
    var N = Number(lines.shift());
    var matrix = [];
    for (var i = 0; i < N; i++) {
        matrix.push(lines.shift().split(' ').map(Number));
    }

    const N = matrix.length;
    let dp = Array.from({ length: N }, () => Array(N).fill(Infinity));

    // Initialize the bottom row
    for (let j = 0; j < N; j++) {
        dp[N-1][j] = matrix[N-1][j];
    }

    // Fill the DP table from bottom to top
    for (let i = N - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            let minWeight = Infinity;
            for (let w = 1; w <= i + 1; w++) {
                if (j + w - 1 <= i) {
                    let currentWeight = 0;
                    for (let k = j; k < j + w; k++) {
                        currentWeight += matrix[i][k];
                    }
                    if (j > 0) currentWeight += dp[i + 1][j - 1];
                    if (j + w <= i + 1) currentWeight += dp[i + 1][j + w];
                    minWeight = Math.min(minWeight, currentWeight);
                }
            }
            dp[i][j] = minWeight;
        }
    }

    // The answer is the minimum value in the first row of dp
    let minTotalWeight = Math.min(...dp[0]);

    console.log(minTotalWeight);
}


// Wrong answer (80%) with: 7 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================================================================

/*
Eearliest Deadline First (ProblemId 2823, Page 11 of 14, difficulty 4/10):

Your job for this problem is to check if it is possible to schedule a set of periodic tasks under real-time constraints.

A real-time task is defined by two numbers. The first number is the computational cost of the task. It is the computational cost of each complete run of the task. The second number is the period of the process. In other words, the process restarts again after each period.

The task set will be scheduled using the EDF algorithm (Earliest Deadline First). It is known that EDF is optimal. This means that if a set of tasks cannot be scheduled by EDF, there isn't another algorithm that can schedule it.

The operating system that will run these tasks runs on a single core machine. The tasks are preemptable. That is, a task can take the place of another task during its run, if required.

Consider that the cost of switching tasks is 0.

Input
The first line of the input has a value  
1 ≤ N ≤ 10
, which states the number of processes under schedule.

Every N following line represents a process, and has 2 values 
1 ≤ C ≤ 5 and C ≤ P ≤ 100
, that represent the computational cost and the period of each process, respectively.

Output
The output consists of a single line, with the string OK or the string FAIL, if the scheduling is possible or not, respectively.
*/

function edf() {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
    var N = Number(lines.shift());
    var tasks = [];
    while (N--) {
        var [C, P] = lines.shift().split(' ').map(Number);
        tasks.push([C, P]);
    }

    // Initialize total utilization
    let totalUtilization = 0;

    // Iterate through each task to calculate total utilization
    for (let i = 0; i < tasks.length; i++) {
        const [cost, period] = tasks[i];
        totalUtilization += cost / period;
    }

    // Check if total utilization is within the limit
    if (totalUtilization <= 1) {
        console.log("OK");
    } else {
        console.log("FAIL");
    }
}


// Correct Answer with: 2 changes after copilot and/or copilot chat and 1 manual changes
    // changed object pushed to the tasks array


// ================================================================================================================================================================

/*
Space Communication (ProblemId 3162, Page 12 of 14, difficulty 4/10):

The year is 2337. Thousands of human crews travel in space in a crazy way to and fro. 
And the best: the ships can communicate via radio, it is even possible for crews between different ships to play games.

However, unfortunately the signal quality fades with distance. While nearby ships are able to communicate well, 
ships that are distant have poor signal strength to communicate. For this reason, the ships preferentially communicate with the nearest ship.

Considering a stretch of space where the ships can be considered points in space, therefore 
with three-dimensional coordinates, with each axis being able to have a value between 0 and 100 m.u. 
It is known that the intensity of the communication signal is given by the distance between the ships; 
so that ships that are spaced up to 20 m.u. have a high intensity; above 20 m.u. and up to 50 m.u. 
have a medium intensity; while the signal strength above 50 m.u. it is so low that it does not allow communication between ships.

Given the information passed on, help the crew of these ships to be able to know the signal strength
between each of them and the nearest ship, to inform them if they will be able to have good communication with each other.

Input
The first line of the entry has an integer N (2 <= N <= 10), 
which represents the number of ships in the space to be analyzed. 
The next N lines will receive 3 integer values, separated by space, 
indicating the discrete x, y and z coordinates of each ship.

Output
One line for each ship, indicating a letter for the signal strength between it and the nearest ship. 
"A" stands for high intensity; "M" represents medium intensity and "B" represents low intensity.
*/

function signalStrength() {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
    var N = Number(lines.shift());
    var ships = [];
    while (N--) {
        var [x, y, z] = lines.shift().split(' ').map(Number);
        ships.push([x, y, z]);
    }

    // Iterate through each ship to calculate signal strength
    for (let i = 0; i < ships.length; i++) {
        let minDistance = Infinity;
        for (let j = 0; j < ships.length; j++) {
            if (i === j) continue;
            let [x1, y1, z1] = ships[i];
            let [x2, y2, z2] = ships[j];
            let distance = Math.sqrt(Math.pow((x1 - x2),2) + Math.pow((y1 - y2),2) + Math.pow((z1 - z2),2));
            minDistance = Math.min(minDistance, distance);
        }
        if (minDistance <= 20) {
            console.log("A");
        } else if (minDistance <= 50) {
            console.log("M");
        } else {
            console.log("B");
        }
    }
}


// Correct Answer with: 1 changes after copilot and/or copilot chat and 1 manual changes
    // Introduced Math.pow()


// ================================================================================================================================================================

/*
Honeycomb Walk (ProblemId 3204, Page 13 of 14, difficulty 1/10):

A bee larva living in a hexagonal cell of a large honeycomb decides to creep for a walk. 
In each “step” the larva may move into any of the six adjacent cells and after n steps, it is to end up in its original cell.

Your program has to compute, for a given n, the number of different such larva walks.

Input
The first line contains an integer giving the number of test cases to follow. 
Each case consists of one line containing an integer n, where 1 ≤ n ≤ 14.

Output
For each test case, output one line containing the number of walks. Under the assumption 1 ≤ n ≤ 14, the answer will be less than 231
*/

function honeycombWalk() {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
    var T = Number(lines.shift());
    while (T--) {
        var n = Number(lines.shift());
            // Directions representing the 6 adjacent cells in a hexagonal grid
        const dx = [0, 1, 1, 0, -1, -1];
        const dy = [1, 0, -1, -1, 0, 1];
        
        // Initialize the dp array
        let dp = Array.from({length: n+1}, () => Array.from({length: 15}, () => Array(15).fill(0)));
        dp[0][7][7] = 1; // Base case
        
        // Fill the dp array
        for (let step = 1; step <= n; step++) {
            for (let x = 0; x < 15; x++) {
                for (let y = 0; y < 15; y++) {
                    for (let dir = 0; dir < 6; dir++) {
                        let prevX = x + dx[dir];
                        let prevY = y + dy[dir];
                        if (prevX >= 0 && prevX < 15 && prevY >= 0 && prevY < 15) {
                            dp[step][x][y] += dp[step-1][prevX][prevY];
                        }
                    }
                }
            }
        }
        
        // The answer is the number of ways to return to the original cell after n steps
        console.log(dp[n][7][7]);
    }
}

// Correct Answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================================================================

/*
GDP Fluctuation (ProblemId 3346, Page 14 of 14, difficulty 1/10):

The South is one of the regions which contribute the most to the Gross Domestic Product (GDP) in Brazil. 
However, due to the pandemic of COVID-19, the economy in the three states of the South has been much affected. 
Alice, a researcher of the University of the South, collected data on the GDP fluctuation in the whole South in each of the two last years.
Each GDP fluctuation is represented by a percentage, in a manner that a positive percentage indicates growth in the corresponding period of one year,
whilst a negative percentage indicates decrease.

Bob, a politician, is going to give an interview to the press tomorrow. 
Based on the two values collected by Alice, Bob wants to calculate the GDP fluctuation corresponding to the whole 
analysed period of two years, so he doesn't talk nonsense in the interview.

Input
The input consists of two values F1 and F2 (-100.00 ≤ F1, F2 ≤ 100.00), 
which correspond to the GDP fluctuations in the first and in the second years analysed by Alice, respectively. 
The values are given with exactly two digits after the decimal point.

Output
Print a value, with exactly six digits after the decimal point, that corresponds to the GDP fluctuation in the whole analysed period of two years.
*/

function gdpFluctuation() {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    var [F1, F2] = lines.shift().split(' ').map(Number);
    // Assuming an initial GDP value of 100 for simplicity
    let initialGDP = 100;

    // Applying the first year's fluctuation
    let afterFirstYearGDP = initialGDP + (initialGDP * F1) / 100;

    // Applying the second year's fluctuation
    let finalGDP = afterFirstYearGDP + (afterFirstYearGDP * F2) / 100;

    // Calculating the total fluctuation percentage
    let totalFluctuation = ((finalGDP - initialGDP) / initialGDP) * 100;

    // Formatting the output to show exactly six digits after the decimal point
    console.log(totalFluctuation.toFixed(6));
}


// Correct Answer with: 2 changes after copilot and/or copilot chat and 0 manual changes
