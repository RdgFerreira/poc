// =====================================================================================

/*
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
*/

function encryptMessage(input) {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0], 10);
    const results = [];

    for (let i = 1; i <= N; i++) {
        let line = lines[i];
        
        // Step 1: Shift each letter 3 positions to the right in the ASCII table
        let shifted = '';
        for (let char of line) {
            if (/[a-zA-Z]/.test(char)) {
                shifted += String.fromCharCode(char.charCodeAt(0) + 3);
            } else {
                shifted += char;
            }
        }

        // Step 2: Reverse the string
        let reversed = shifted.split('').reverse().join('');

        // Step 3: Move each character from the second half one position to the left in the ASCII table
        let halfIndex = Math.floor(reversed.length / 2);
        let encrypted = '';
        for (let j = 0; j < reversed.length; j++) {
            if (j >= halfIndex) {
                encrypted += String.fromCharCode(reversed.charCodeAt(j) - 1);
            } else {
                encrypted += reversed[j];
            }
        }

        results.push(encrypted);
    }

    return results.join('\n');
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
console.log(encryptMessage(input));


// Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

function rightJustifyText(input) {
    const lines = input.trim().split('\n');
    let index = 0;
    let result = [];

    while (index < lines.length) {
        const N = parseInt(lines[index].trim());
        if (N === 0) break;

        let texts = [];
        for (let i = 1; i <= N; i++) {
            texts.push(lines[index + i].trim().replace(/\s+/g, ' '));
        }

        const maxLength = Math.max(...texts.map(text => text.length));

        const justifiedTexts = texts.map(text => text.padStart(maxLength, ' '));
        result.push(justifiedTexts.join('\n'));

        index += N + 1;
    }

    return result.join('\n\n');
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
console.log(rightJustifyText(input));

// Correct answer with: 3 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

function fitOrDontFit(input) {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0], 10);
    const results = [];

    for (let i = 1; i <= N; i++) {
        const [A, B] = lines[i].split(' ');
        const fit = A.endsWith(B) ? 'encaixa' : 'nao encaixa';
        results.push(fit);
    }

    return results.join('\n');
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
console.log(fitOrDontFit(input));

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

function caesarCipherDecode(encodedText, shift) {
    let decodedText = '';
    for (let i = 0; i < encodedText.length; i++) {
        let charCode = encodedText.charCodeAt(i);
        let newCharCode = charCode - shift;
        if (newCharCode < 65) {
            newCharCode += 26;
        }
        decodedText += String.fromCharCode(newCharCode);
    }
    return decodedText;
}

function processInput(input) {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0], 10);
    let result = [];
    for (let i = 0; i < N; i++) {
        const encodedText = lines[2 * i + 1];
        const shift = parseInt(lines[2 * i + 2], 10);
        result.push(caesarCipherDecode(encodedText, shift));
    }
    return result;
}

// Example usage:
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const output = processInput(input);
output.forEach(line => console.log(line));

// Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

function classifySentence(input) {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0], 10);
    const results = [];

    for (let i = 1; i <= N; i++) {
        const sentence = lines[i];
        const letters = new Set(sentence.match(/[a-z]/g));
        const full = letters.size === 26;
        const almostFull = letters.size >= 13;
        results.push(full ? 'frase completa' : almostFull ? 'frase quase completa' : 'frase mal elaborada');
    }

    return results.join('\n');
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
console.log(classifySentence(input));

// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

function processAttendance(input) {
    const lines = input.trim().split('\n');
    let index = 0;
    const T = parseInt(lines[index++], 10);
    const results = [];

    for (let t = 0; t < T; t++) {
        const N = parseInt(lines[index++], 10);
        if (N === 0) {
            results.push('');
            continue;
        }

        const names = lines[index++].split(' ');
        const attendanceRecords = lines[index++].split(' ');

        const deniedStudents = [];

        for (let i = 0; i < N; i++) {
            const record = attendanceRecords[i];
            const totalClasses = record.length;
            let presentCount = 0;
            let validClasses = 0;

            for (let char of record) {
                if (char === 'P') {
                    presentCount++;
                    validClasses++;
                } else if (char === 'A') {
                    validClasses++;
                }
            }

            const attendancePercentage = (presentCount / validClasses) * 100;

            if (attendancePercentage < 75) {
                deniedStudents.push(names[i]);
            }
        }

        results.push(deniedStudents.join(' '));
    }

    return results.join('\n');
}


const input = require('fs').readFileSync('/dev/stdin', 'utf8');
console.log(processAttendance(input));


// Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

function classifyProblemDifficulty(statement) {
    // Split the statement into symbols
    const symbols = statement.split(' ');

    // Filter out invalid words
    const words = symbols.filter(symbol => /^[a-zA-Z]+\.?$/.test(symbol));

    // Calculate the total length of valid words
    const totalLength = words.reduce((sum, word) => sum + word.replace('.', '').length, 0);

    // Calculate the average length of words
    const averageLength = words.length === 0 ? 0 : Math.floor(totalLength / words.length);

    // Determine the difficulty based on the average length
    let difficulty;
    if (averageLength <= 3) {
        difficulty = 250;
    } else if (averageLength <= 5) {
        difficulty = 500;
    } else {
        difficulty = 1000;
    }

    // Output the difficulty
    return difficulty;
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const statements = input.trim().split('\n');
statements.forEach(statement => console.log(classifyProblemDifficulty(statement)));



// Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

function friendlyIntParser(n) {
    // Step 2: Replace 'O'/'o' with '0'
    n = n.replace(/O|o/g, '0');
    
    // Step 3: Replace 'l' with '1'
    n = n.replace(/l/g, '1');
    
    // Step 4: Remove commas and spaces
    n = n.replace(/,|\s/g, '');
    
    // Step 5: Check if the resulting string is a valid non-negative integer
    if (n === '' || !/^\d+$/.test(n)) {
        console.log("error");
        return;
    }
    
    // Convert the string to a number
    let num = Number(n);
    
    // Check if the number is within the valid range
    if (num > 2147483647) {
        console.log("error");
    } else {
        console.log(num);
    }
}

// Example usage:
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');
lines.forEach(line => friendlyIntParser(line));

// 95% Correct answers with: 6 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
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
*/

function solveKickbackSum(input) {
    // Split the input into two lines
    const lines = input.trim().split('\n');
    const firstLine = lines[0];
    const secondLine = lines[1];

    // Function to clean and format the number
    function cleanAndFormatNumber(str) {
        // Remove all non-numeric characters except for the decimal point
        let cleaned = str.replace(/[^0-9.]/g, '');
        // Ensure at most two decimal places
        if (cleaned.includes('.')) {
            const parts = cleaned.split('.');
            cleaned = parts[0] + '.' + parts[1].slice(0, 2);
        }
        return cleaned;
    }

    // Clean and format both numbers
    const cleanedFirstNumber = cleanAndFormatNumber(firstLine);
    const cleanedSecondNumber = cleanAndFormatNumber(secondLine);

    // Extract the first 11 valid digits from the first number for the corrupt ID
    const corruptID = cleanedFirstNumber.replace('.', '').slice(0, 11);

    // Convert cleaned strings to numbers
    const num1 = parseFloat(cleanedFirstNumber);
    const num2 = parseFloat(cleanedSecondNumber);

    // Sum the two numbers
    const sum = num1 + num2;

    // Print the corrupt ID and the sum formatted to two decimal places
    console.log(`cpf ${corruptID}`);
    console.log(sum.toFixed(2));
}

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
solveKickbackSum(input);

// 65% Correct answers with: 6 changes after copilot and/or copilot chat and 0 manual changes

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