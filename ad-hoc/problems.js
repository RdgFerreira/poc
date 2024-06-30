/*
    Formula 1 (ProblemId 1125, Page 1 of 34, difficulty 3/10):

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
Start Grid (ProblemId 1228, Page 2 of 34, difficulty 3/10):

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
Sudoku (ProblemId 1383, Page 3 of 34, difficulty 6/10):

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
Sudoku (ProblemId 1383, Page 3 of 34):

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
