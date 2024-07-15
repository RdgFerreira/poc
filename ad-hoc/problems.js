/*
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
*/
function parseInput(input) {
    const lines = input.split('\n').map(line => line.trim()).filter(line => line);
    const cases = [];
    let i = 0;
    while (i < lines.length && lines[i] !== '0 0') {
        const [G, P] = lines[i++].split(' ').map(Number);
        const races = [];
        for (let j = 0; j < G; j++) {
            races.push(lines[i++].split(' ').map(Number));
        }
        const S = parseInt(lines[i++], 10);
        const scoringSystems = [];
        for (let j = 0; j < S; j++) {
            const system = lines[i++].split(' ').map(Number);
            const K = system.shift();
            scoringSystems.push({ K, points: system });
        }
        cases.push({ G, P, races, S, scoringSystems });
    }
    return cases;
}

function calculateScores({ G, P, races, S, scoringSystems }) {
    return scoringSystems.map(system => {
        const scores = new Array(P).fill(0);
        races.forEach(race => {
            race.forEach((position, pilot) => {
                const pointsIndex = position - 1;
                if (pointsIndex < system.K) {
                    scores[pilot] += system.points[pointsIndex];
                }
            });
        });
        return scores;
    });
}

function determineChampions(scores) {
    return scores.map(score => {
        const maxScore = Math.max(...score);
        return score.map((s, index) => s === maxScore ? index + 1 : null).filter(s => s !== null);
    });
}

function formatOutput(champions) {
    return champions.map(champs => champs.join(' ')).join('\n');
}

function main(input) {
    const cases = parseInput(input);
    const results = cases.map(caseData => {
        const scores = calculateScores(caseData);
        const champions = determineChampions(scores);
        return formatOutput(champions);
    });
    return results.join('\n');
}

// Example usage with a sample input (you should replace this with the actual input)
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
console.log(main(input));


// Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================


/*
2 - Start Grid (ProblemId 1228, Page 2 of 34, difficulty 3/10):

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
*/

function startGrid() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const lines = input.split('\n').map(line => line.trim()).filter(line => line);
    const cases = [];
    let i = 0;
    while (i < lines.length) {
        const N = parseInt(lines[i++], 10);
        const startGrid = lines[i++].split(' ').map(Number);
        const finishGrid = lines[i++].split(' ').map(Number);
        cases.push({ N, startGrid, finishGrid });
    }
    const results = cases.map(({ N, startGrid, finishGrid }) => {
        let overtakes = 0;
        for (let i = 0; i < N; i++) {
            const pilot = finishGrid[i];
            const position = startGrid.indexOf(pilot);
            startGrid.splice(position, 1);
            overtakes += position;
        }
        return overtakes;
    });
    console.log(results.join('\n'));
}
// Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================

/*
3 - Sudoku (ProblemId 1383, Page 3 of 34, difficulty 6/10):

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
*/
function hasAllNumbers(arr) {
    const seen = new Set(arr);
    for (let i = 1; i <= 9; i++) {
        if (!seen.has(i)) return false;
    }
    return true;
}

function isValidSudoku(matrix) {
    // Check rows
    for (let i = 0; i < 9; i++) {
        if (!hasAllNumbers(matrix[i])) return false;
    }

    // Check columns
    for (let j = 0; j < 9; j++) {
        const column = matrix.map(row => row[j]);
        if (!hasAllNumbers(column)) return false;
    }

    // Check 3x3 sub-matrices
    for (let block = 0; block < 9; block++) {
        const subMatrix = [];
        for (let i = Math.floor(block / 3) * 3; i < Math.floor(block / 3) * 3 + 3; i++) {
            for (let j = (block % 3) * 3; j < (block % 3) * 3 + 3; j++) {
                subMatrix.push(matrix[i][j]);
            }
        }
        if (!hasAllNumbers(subMatrix)) return false;
    }

    return true;
}

function sudoku() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const lines = input.split('\n').map(line => line.trim()).filter(line => line);
    const n = parseInt(lines.shift(), 10);
    let i = 0;
    for (let instance = 1; instance <= n; instance++) {
        const matrix = [];
        for (let j = 0; j < 9; j++) {
            matrix.push(lines[i++].split(' ').map(Number));
        }
        console.log(`Instancia ${instance}`);
        console.log(isValidSudoku(matrix) ? 'SIM' : 'NAO');
        console.log();
    }
}

sudoku();
// Correct answer with: 4 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================


/*
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
*/
function bakugan() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const lines = input.split('\n').map(line => line.trim()).filter(line => line);
    let i = 0;
    while (lines[i] !== '0') {
        const R = parseInt(lines[i++], 10);
        const mark = lines[i++].split(' ').map(Number);
        const leti = lines[i++].split(' ').map(Number);
        let markPoints = 0;
        let letiPoints = 0;
        let markConsecutive = 0;
        let letiConsecutive = 0;
        let round = 0;
        while (round < R) {
            if (mark[round] === leti[round]) {
                markConsecutive++;
                letiConsecutive++;
            } else {
                markConsecutive = 0;
                letiConsecutive = 0;
            }
            markPoints += mark[round];
            letiPoints += leti[round];
            if (markConsecutive === 3) {
                markPoints += 30;
                markConsecutive = 0;
            }
            if (letiConsecutive === 3) {
                letiPoints += 30;
                letiConsecutive = 0;
            }
            round++;
        }
        console.log(markPoints === letiPoints ? 'T' : markPoints > letiPoints ? 'M' : 'L');
    }

}
// Correct answer with: 4 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================

/*
5 - Sum of Two Squares (ProblemId 1558, Page 5 of 34, difficulty 5/10):

Which integer numbers can be represented by a sum of two integer squares?

That is the question that your program must respond!

For example, the number 41 can be represented as (-4)2 + 52 = 41, but 7 cannot be represented in the same way.

Input
The input consists of several lines, each line contains an integer with absolute value less than or equal to 10000.

Output
For each line, print "YES" if the number can be represented by a sum of two integer squares, otherwise print "NO".
*/
function sumOfTwoSquares() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const lines = input.split('\n').map(line => line.trim()).filter(line => line);
    lines.forEach(line => {
        const n = parseInt(line, 10);
        let found = false;
        for (let a = 0; a * a <= n; a++) {
            const b = Math.sqrt(n - a * a);
            if (b === Math.floor(b)) {
                found = true;
                break;
            }
        }
        console.log(found ? 'YES' : 'NO');
    });
}

sumOfTwoSquares();

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================

/*
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
*/
function solvePalindromeProblem() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const lines = input.trim().split('\n');
    let testCaseNumber = 1;
    let index = 0;

    while (index < lines.length) {
        const N = parseInt(lines[index]);
        if (N === 0) break;
        const str = lines[index + 1];
        index += 2;

        const dp = new Array(N).fill(Infinity);
        const isPalindrome = Array.from({ length: N }, () => new Array(N).fill(false));

        // Fill the isPalindrome table
        for (let i = 0; i < N; i++) {
            isPalindrome[i][i] = true;
        }
        for (let length = 2; length <= N; length++) {
            for (let i = 0; i <= N - length; i++) {
                const j = i + length - 1;
                if (length === 2) {
                    isPalindrome[i][j] = (str[i] === str[j]);
                } else {
                    isPalindrome[i][j] = (str[i] === str[j] && isPalindrome[i + 1][j - 1]);
                }
            }
        }

        // Fill the dp table
        for (let i = 0; i < N; i++) {
            if (isPalindrome[0][i]) {
                dp[i] = 1;
            } else {
                for (let j = 0; j < i; j++) {
                    if (isPalindrome[j + 1][i]) {
                        dp[i] = Math.min(dp[i], dp[j] + 1);
                    }
                }
            }
        }

        console.log(`Teste ${testCaseNumber}`);
        console.log(dp[N - 1]);
        console.log('');

        testCaseNumber++;
    }
}

solvePalindromeProblem();

// Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================
/*
7 - Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):

*/

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================

// ================================================================================================================
/*
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):

*/

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================

// ================================================================================================================
/*
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):

*/

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================

// ================================================================================================================
/*
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):

*/

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================

// ================================================================================================================
/*
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):

*/

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================

// ================================================================================================================
/*
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):

*/

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================

// ================================================================================================================
/*
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):

*/

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================

// ================================================================================================================
/*
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):

*/

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================

// ================================================================================================================
/*
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):

*/

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================

// ================================================================================================================
/*
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):

*/

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================

// ================================================================================================================
/*
Palíndrome (ProblemId 2285, Page 14 of 34, difficulty 6/10):

*/

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// ================================================================================================================