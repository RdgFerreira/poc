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