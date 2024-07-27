// =====================================================================================

/*
1 - Level Order Tree Traversal (ProblemId 1466, difficulty 3/10):

Level order traversal of a tree is breadth first traversal for the tree. 
It is actually a BFS, which is not recursive by nature. 
It uses Queue instead of Stack to hold the next vertices that should be opened.
The reason for it is in this traversal, you want to open the nodes in a FIFO order, 
instead of a LIFO order, obtained by recursion.

So the work here is, after some operations of insertion over a binary search tree, print the 
level order traversal of this tree. For example, an input with the sequence of numbers: 8 3 10 14 6 4 13 7 1 will result in the following tree:

With the level order traversal output: 8 3 10 1 6 14 4 7 13.

Input
The input file contains many test cases. 
The first line of input contains an integer C (C ≤ 1000), 
indicating the number of test cases that follow. Each test case contains two lines. 
The first line contains a number N (1 ≤ N ≤ 500) indicating the amount of numbers that will form each one of the trees.
The second line contains the N distinct non-negative numbers, each one separated by a space.

Output
For each input set, you should print the message "Case n:", 
where n is the sequential test case number, followed by one line with the level order traversal of the tree, according to the given example.

Note: None space must be printed after the last number of each line and the program should print a 
blank line after each test case, even after the last test case. The result tree will have no repeated numbers and no more than 500 levels.

Sample Input
2
3
5 2 7
9
8 3 10 14 6 4 13 7 1

Sample Output
Case 1:
5 2 7

Case 2:
8 3 10 1 6 14 4 7 13
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        }
    }

class Tree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    levelOrder() {
        let result = '';
        let q = [];
        q.push(this.root);
        while (q.length > 0) {
            let node = q.shift();
            result += node.value + ' ';
            if (node.left !== null) {
                q.push(node.left);
            }
            if (node.right !== null) {
                q.push(node.right);
            }
        }
        return result.trim();
    }

}

function solve(level, values) {
  let tree = new Tree();
  for (let i = 0; i < level; i++) {
    tree.insert(values[i]);
  }
  return tree.levelOrder();
}

// read from stdin
let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines.shift());
let i = 0;
while (i < n) {
    let level = parseInt(lines.shift());
    let values = lines.shift().split(' ').map(x => parseInt(x));
    console.log(`Case ${i + 1}:`);
    console.log(solve(level, values));
    console.log();
    i++;
}


// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
2 - Design Labirints (ProblemId 1076, difficulty 3/10):

Peter loves to draw mazes, and recently he had an idea: which would be the minimum of pen movements needed to draw a maze, 
always beginning and finishing at the same position? To make the game more interesting, Peter decided that it is not allowed to 
lift the pen from the paper. The templates for construction of the maze are always square, 3 x 3, 4 x 4, 5 x 5 up to a maximum of 7 x 7.

For each example, Peter will specify where the drawing must start and your task is to determine the amount of movements 
required to draw the Peter's maze. Peter remembers that you do not have to worry about cycles, because there will be no 
cycles in any of the test cases. However, a test case can have an input 4 1 and another input 1 4. This means two lines 
connecting these same two nodes. Anyway it will make no difference in the drawing of the labyrinth because the amount of movement should be the same.

See the examples below, In the maze(4 x 4), Peter wants to begin in the node 0, draw all lines and return to node 0. 
For this, the minimum of possible moves is 30. In the maze B (3 x 3), Pedro begins in the node 1, draws all lines and returns to node 1. 
In this case, he needs 10 movements to make this drawing.



Entrada
The first input line contains an integer T (T < 100) that represents the number of test cases. Each test case begin with a 
line containing an integer N ( N < X2, where X is the size of the maze that can be from 3 up to 7). This N is the node where 
the drawing must start and also finish. In the next input line there are two informationsV and A that respectively represents 
the amount of vertices and edges of the maze. Follow A lines, each one indicating a line segment that Peter must plot to draw 
the desired maze.

Saída
The output should contain one integer for each test case. 
This number is the amount of movement of pen that must be made to draw the desired maze, 
considering that the start and end are always from the same point (node) that can not lift the pen from the paper.

Input Sample:
2
0
16 15
0 4
2 3
6 2
8 9
10 9
8 12
14 15
14 10
6 5
10 11
11 7
4 8
0 1
1 2
12 13
1
9 6
1 2
1 4
4 7
7 8
4 1
4 3


Output Sample:
30
10
*/

function solve(input) {
    const lines = input.trim().split('\n');
    let index = 0;
    const T = parseInt(lines[index++]);
    const results = [];

    for (let t = 0; t < T; t++) {
        const startNode = parseInt(lines[index++]);
        const [V, A] = lines[index++].split(' ').map(Number);
        const edges = [];

        for (let a = 0; a < A; a++) {
            const [u, v] = lines[index++].split(' ').map(Number);
            edges.push([u, v]);
        }

        // Create adjacency list
        const graph = Array.from({ length: V }, () => []);
        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }

        // DFS to count movements
        let movements = 0;
        const visitedEdges = new Set();
        function dfs(node, parent) {
            for (const neighbor of graph[node]) {
                const edge = node < neighbor ? `${node}-${neighbor}` : `${neighbor}-${node}`;
                if (!visitedEdges.has(edge)) {
                    visitedEdges.add(edge);
                    movements += 2; // one movement to the neighbor and one back
                    dfs(neighbor, node);
                }
            }
        }

        dfs(startNode, -1);
        results.push(movements);
    }

    return results.join('\n');
}

// Example usage:
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
console.log(solve(input));


// inCorrect answer with: 5 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
3 - Reduzindo Detalhes em um Mapa (ProblemId 2404, difficulty 3/10):

Leonardo Nascimento é um garoto de 13 anos apaixonado por cartografia. Durante as férias de janeiro de 2011, 
ele alternava seu tempo entre navegar na internet (pesquisando sobre mapas) e arrumar sua coleção de mapas. 
Navegando na internet, Leonardo descobriu um site especializado em mapas, o Google Maps. Depois de alguns dias usando o site, 
Leonardo percebeu que quando diminuía o zoom algumas ruas não eram mais exibidas no mapa, isto é, o zoom determinava também o nível de detalhe do mapa. 
A figura abaixo ilustra um dos testes feito por Leonardo.
Ele sabe que você participa da OBI e que você adora resolver os problemas que envolvem mapas. 
Então resolveu formular o seguinte problema: dado um mapa de cidades e rodovias que as ligam, selecione um subconjunto das rodovias tal que entre qualquer par de cidades exista uma rota 
ligando-as e a soma dos comprimentos das rodovias é mínimo. Na figura abaixo e à esquerda temos um exemplo com cinco 
cidades e seis rodovias ligando-as. A figura abaixo e à direita ilustra uma solução cuja soma dos comprimentos é 34.


Para facilitar um pouco sua vida, 
Leonardo determinou que você só precisa dizer a soma dos comprimentos das 
rodovias do subconjunto selecionado para um dado mapa.

Entrada
A primeira linha da entrada contém dois números N (1 ≤ N ≤ 500) e M 
(1 ≤ M ≤ 124750) que representam o número de cidades e o número de rodovias respectivamente. 
Cada uma das próximas M linhas é composta por três inteiros U, V (1 ≤ U, V ≤ N e U ≠ V) e C (1 ≤ C ≤ 500) que 
indiciam que existe uma rodovia de comprimento C que liga as cidades U e V.

Saída
A saída consiste em apenas uma linha contendo a soma do comprimento das rodovias selecionadas.
*/

function solve(input) {
    const lines = input.trim().split('\n');
    const [N, M] = lines[0].split(' ').map(Number);
    const edges = lines.slice(1).map(line => line.split(' ').map(Number));

    // Sort edges by weight
    edges.sort((a, b) => a[2] - b[2]);

    // Disjoint Set Union (DSU) functions
    const parent = Array.from({ length: N }, (_, i) => i);
    function find(x) {
        if (parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    }
    function union(x, y) {
        parent[find(x)] = find(y);
    }

    // Kruskal's algorithm
    let totalWeight = 0;
    for (const [u, v, w] of edges) {
        if (find(u) !== find(v)) {
            union(u, v);
            totalWeight += w;
        }
    }

    return totalWeight;
}

// Example usage:
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
console.log(solve(input));


// Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
4 - Route Change (ProblemId 1123, difficulty 4/10):

The road system of a country connects all N cities so that it is possible to travel between any pair of 
cities using existing roads. Each road connects two different cities, is two-way and one has exactly one toll booth 
(a toll is paid for both directions of traffic). Roads intersect only in a city and no pair of cities is interconnected 
by two or more roads.

Dias Transport offers a one-day parcel delivery service between cities. Each parcel must be transported from a city A to another city B. 
The management of Dias Transport defines, for each parcel, a service route, consisting of C cities and C - 1 roads: the first city on the service route is the origin of the parcel, the final city is the destination of the parcel. The service route never passes twice through the same city, and the vehicle chosen to deliver a parcel can only travel by the service route defined.

One day, however, a vehicle broke down and was taken for repairs in a city that was not among the cities in its service route. 
The management of Dias Transport wants to know which is the lowest total cost, in terms of tolls, for delivering the parcel 
(that is, to take the vehicle from the city it was repaired to the destination city), but with an additional constraint: if at some 
point the vehicle reaches one of the cities that make up its service route, it should go back to following its service route.

Input
The input contains several test cases. The first line of a test case contais four integers N, M, C and K 
(4 ≤ N ≤ 250, 3 ≤ M ≤ N×(N−1)/2, 2 ≤ C ≤ N−1 and C ≤ K ≤ N−1), representing, respectively, the number of cities, the number of roads, 
the number of cities in the service route and the city where the vehicle was taken for repair. 
The cities are identified by integers from 0 to N - 1. The service route is 0, 1,..., C - 1, 
that the origin is 0, from 0 goes to 1, from 1 to 2 and so on, until the destination C - 1. 
The next M lines describe the road system. Each of those lines describes one road and contains three integers U, V and P 
(0 ≤ U, V ≤ N−1, U ≠ V, 0 ≤ P ≤ 250),indicating that there exists a road connecting cities U and V with a toll of cost P.
The last test case is followed by a line containing four zeros separated by blank spaces.

Output
For each test case, your program should print a single line, containing a single integer, 
the minimum total toll cost for the vehicle to reach the destination city.
*/

function solve(input) {
    const lines = input.trim().split('\n');
    let index = 0;
    const results = [];

    while (true) {
        const [N, M, C, K] = lines[index].split(' ').map(Number);
        if (N === 0) break;

        const serviceRoute = Array.from({ length: C }, (_, i) => i);
        const repairCity = K;

        const graph = Array.from({ length: N }, () => []);
        for (let i = 0; i < M; i++) {
            const [U, V, P] = lines[++index].split(' ').map(Number);
            graph[U].push({ to: V, toll: P });
            graph[V].push({ to: U, toll: P });
        }

        const INF = 1e9;
        const dp = Array.from({ length: N }, () => Array.from({ length: C }, () => INF));
        dp[repairCity][0] = 0;

        for (let i = 0; i < C; i++) {
            for (let u = 0; u < N; u++) {
                for (const { to, toll } of graph[u]) {
                    dp[to][i + 1] = Math.min(dp[to][i + 1], dp[u][i] + toll);
                }
            }
        }

        results.push(Math.min(...dp[serviceRoute[serviceRoute.length - 1]]));
        index++;
    }

    return results.join('\n');
}

// Example usage:
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
console.log(solve(input));


// Correct answer with: 3 changes after copilot and/or copilot chat and 3 manual changes

// =====================================================================================

/*
5 - Countries at War (ProblemId 1148, difficulty 5/10):

In the year 2050, after several attempting of ONU to maintain the peace in world, exploded the third world war. 
Industrial secrets, commercials and military forced all countries to utilize extremely sophisticated espionage services, 
in order to have one spy of each country in each city in the world. These spies need to communicate with others spies, 
informants and even with both centrals during their actions. Unfortunately, there’s no safe way for a spy to communicate within a war 
building, therefore the messages are always sent in code so that only the receiver is able to read and understand it.

The spies use the only service available in war time, the post offices. Each city has one post office where letters can be sent. 
Letters can be sent directly to its destination or to other post offices, until it arrives to the post office of the intended city, if possible.
A post office in city A can send a printed letter directly to a post office in city B if there’s a letter sending agreement, which 
determines the time, measured in hours, that a letter takes to travel from city A to city B (and not necessarily the opposite). 
If there’s no agreement between the cities, then post office A can try to send the letter to as many other post offices as necessary, 
until it is delivered to its destination, if possible.
Some post offices are electronically interconnected with satellites and optical fiber. Before war, these connections could reach 
all offices, making a letter to be sent instantly, but during hostilities period, each country began to control the electronic communication, 
and one office can only send a letter electronically to other, if both offices are in the same country. Two post offices, A and B, are in the 
same country if there’s any way that a printed letter sent from one office is delivered in the other one.

The espionage service of your country was able to obtain all letter sending agreements in the world e wishes to find out the minimum time 
for sending a letter between various pairs of cities. Would you be able to help it?

Input
The input contains several test cases. 
The first line of each case contains two integers separated by a White space, N (1 ≤ N ≤ 500) and E (0 ≤ E ≤ N2), 
indicating the number of cities (enumerated from 1 to N) and of letter sending agreements, respectively. 
Follow, then, E lines, each one with three integers separated by a White space, X, Y and H (1 ≤ X, Y ≤ N, 1 ≤ H ≤ 1000), 
indicating that there is an agreement to sending a printed letter from city X to city Y, and that this letter will be delivered in H hours.
Next, there will be a line with an integer K (0 ≤ K ≤ 100), the number of queries. 
Finally, K lines of input, each one representing a query that contains two integers separated by a white space, O and D (1 ≤ O, D ≤ N). 
You should determine the minimum time for sending a letter from city O to city D. The end of input is determined by N = E = 0.

Output
For each test case, your program must output K lines. The N-th line should contain an integer M, the minimum time in hours, for sending a letter in the N-th query. If there’s no communication way between the cities of the query, you should print: "Nao e possivel entregar a carta" ( 'The letter could not be delivered' in portuguese).

Print a blank line after each case.
*/

function solve(input) {
    const lines = input.trim().split('\n');
    let index = 0;
    const results = [];

    while (true) {
        const [N, E] = lines[index].split(' ').map(Number);
        if (N === 0) break;

        const graph = Array.from({ length: N }, () => Array.from({ length: N }, () => Infinity));
        for (let i = 0; i < N; i++) graph[i][i] = 0;

        for (let i = 0; i < E; i++) {
            const [X, Y, H] = lines[++index].split(' ').map(Number);
            graph[X - 1][Y - 1] = H;
        }

        for (let k = 0; k < N; k++) {
            for (let i = 0; i < N; i++) {
                for (let j = 0; j < N; j++) {
                    graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
                }
            }
        }

        const K = parseInt(lines[++index]);
        for (let i = 0; i < K; i++) {
            const [O, D] = lines[++index].split(' ').map(Number);
            const time = graph[O - 1][D - 1];
            results.push(time === Infinity ? 'Nao e possivel entregar a carta' : time);
        }

        index++;
    }

    return results.join('\n');
}

// Example usage:
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
console.log(solve(input));


// Time limit exceeded with: 4 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
6 - Maratona (ProblemId 2366, difficulty 6/10):
*/


// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
7 - Maratona (ProblemId 2366, difficulty 7/10):
*/


// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
8 - Maratona (ProblemId 2366, difficulty 8/10):
*/


// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
9 - Maratona (ProblemId 2366, difficulty 9/10):
*/


// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes

// =====================================================================================

/*
10 - Maratona (ProblemId 2366, difficulty 10/10):
*/


// Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes