/*
Bhaskara's Formula (ProblemId 1036, Page 1 of 14):

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

// Correct answer with: 0 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================================================================

/*
Simple Sort (ProblemId 1042, Page 2 of 14):

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

// Correct answer with: 0 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================================================================

/*
Quadrant (ProblemId 1115, Page 3 of 14):

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

// Correct answer with: 0 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================================================================

/*
Perfect Number (ProblemId 1164, Page 4 of 14):

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

// Correct answer with: 0 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================================================================

/*
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

// Correct answer with: 0 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================================================================

/*
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
Which Triangle (ProblemId 2313, Page 8 of 14):

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

// Correct answer with: 0 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================================================================

/*
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