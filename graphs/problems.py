# =====================================================================================

"""
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
"""

class TreeNode:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

def insert(root, key):
    if root is None:
        return TreeNode(key)
    else:
        if root.val < key:
            root.right = insert(root.right, key)
        else:
            root.left = insert(root.left, key)
    return root

def level_order_traversal(root):
    if not root:
        return []
    
    result = []
    queue = [root]
    
    while queue:
        current_node = queue.pop(0)
        result.append(current_node.val)
        
        if current_node.left:
            queue.append(current_node.left)
        if current_node.right:
            queue.append(current_node.right)
    
    return result

def main():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    C = int(data[index])
    index += 1
    
    results = []
    
    for case_number in range(1, C + 1):
        N = int(data[index])
        index += 1
        numbers = list(map(int, data[index:index + N]))
        index += N
        
        root = None
        for number in numbers:
            root = insert(root, number)
        
        traversal_result = level_order_traversal(root)
        results.append(f"Case {case_number}:")
        results.append(" ".join(map(str, traversal_result)))
        results.append("")
    
    print("\n".join(results))

if __name__ == "__main__":
    main()


# Correct answer with: 3 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
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
"""

def solve():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    T = int(data[index])
    index += 1
    results = []
    
    for _ in range(T):
        N = int(data[index])
        index += 1
        V = int(data[index])
        index += 1
        A = int(data[index])
        index += 1
        
        edges = []
        for _ in range(A):
            u = int(data[index])
            index += 1
            v = int(data[index])
            index += 1
            edges.append((u, v))
        
        # Create adjacency list
        adj = {i: [] for i in range(V)}
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)
        
        # Function to perform DFS and count movements
        def dfs(node, visited, parent):
            visited[node] = True
            movements = 0
            for neighbor in adj[node]:
                if not visited[neighbor]:
                    movements += 1 + dfs(neighbor, visited, node)
                elif neighbor != parent:
                    movements += 1
            return movements
        
        visited = [False] * V
        movements = dfs(N, visited, -1)
        
        # Since we need to return to the starting node, we double the movements
        results.append(movements * 2)
    
    for result in results:
        print(result)



# Correct answer with: 3 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
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
"""

def solve():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    N = int(data[index])
    index += 1
    M = int(data[index])
    index += 1
    
    edges = []
    for _ in range(M):
        U = int(data[index])
        index += 1
        V = int(data[index])
        index += 1
        C = int(data[index])
        index += 1
        edges.append((U, V, C))
    
    # Sort edges by weight
    edges.sort(key=lambda x: x[2])
    
    # Disjoint set union find
    parent = list(range(N + 1))
    rank = [0] * (N + 1)
    
    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    
    def union(x, y):
        x_root = find(x)
        y_root = find(y)
        
        if x_root == y_root:
            return False
        
        if rank[x_root] > rank[y_root]:
            parent[y_root] = x_root
        elif rank[x_root] < rank[y_root]:
            parent[x_root] = y_root
        else:
            parent[y_root] = x_root
            rank[x_root] += 1
        
        return True
    
    # Kruskal's algorithm
    total = 0
    for U, V, C in edges:
        if union(U, V):
            total += C
    
    print(total)

if __name__ == "__main__":
    solve()


# Correct answer with: 2 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
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
"""

import heapq
import sys

def dijkstra(graph, start, end, service_route):
    N = len(graph)
    dist = [float('inf')] * N
    dist[start] = 0
    pq = [(0, start)]
    
    while pq:
        current_dist, u = heapq.heappop(pq)
        
        if current_dist > dist[u]:
            continue
        
        for v, weight in graph[u]:
            distance = current_dist + weight
            if distance < dist[v]:
                dist[v] = distance
                heapq.heappush(pq, (distance, v))
                
                # If we reach a city in the service route, follow the service route
                if v in service_route:
                    for i in range(service_route.index(v), len(service_route) - 1):
                        next_city = service_route[i + 1]
                        dist[next_city] = dist[service_route[i]] + graph[service_route[i]][next_city]
                        heapq.heappush(pq, (dist[next_city], next_city))
                    break
    
    return dist[end]

def main():
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    while True:
        N = int(data[index])
        M = int(data[index + 1])
        C = int(data[index + 2])
        K = int(data[index + 3])
        index += 4
        
        if N == 0 and M == 0 and C == 0 and K == 0:
            break
        
        graph = [[] for _ in range(N)]
        for _ in range(M):
            U = int(data[index])
            V = int(data[index + 1])
            P = int(data[index + 2])
            index += 3
            graph[U].append((V, P))
            graph[V].append((U, P))
        
        service_route = list(range(C))
        result = dijkstra(graph, K, C - 1, service_route)
        print(result)

if __name__ == "__main__":
    main()


# Correct answer with: 5 changes after copilot and/or copilot chat and 2 manual changes

# =====================================================================================

"""
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
For each test case, your program must output K lines. The N-th line should contain an integer M, the minimum time in hours, for sending a letter in the 
N-th query. If there’s no communication way between the cities of the query, you should print: "Nao e possivel entregar a carta" ( 'The letter could not be delivered' in portuguese).

Print a blank line after each case.
"""

def floyd_warshall(graph, N):
    dist = [[float('inf')] * N for _ in range(N)]
    
    for i in range(N):
        dist[i][i] = 0
    
    for u in range(N):
        for v, weight in graph[u]:
            dist[u][v] = weight
    
    for k in range(N):
        for i in range(N):
            for j in range(N):
                dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
    
    return dist

def main():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    while True:
        N = int(data[index])
        E = int(data[index + 1])
        index += 2
        
        if N == 0 and E == 0:
            break
        
        graph = [[] for _ in range(N)]
        for _ in range(E):
            X = int(data[index])
            Y = int(data[index + 1])
            H = int(data[index + 2])
            index += 3
            graph[X - 1].append((Y - 1, H))
        
        dist = floyd_warshall(graph, N)
        
        K = int(data[index])
        index += 1
        
        for _ in range(K):
            O = int(data[index]) - 1
            D = int(data[index + 1]) - 1
            index += 2
            if dist[O][D] == float('inf'):
                print("Nao e possivel entregar a carta")
            else:
                print(dist[O][D])
        
        print("")

if __name__ == "__main__":
    main()


# 45% Correct answers with: 5 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
6 - Even Obsession (ProblemId 1931, difficulty 6/10):

Patricia is an excellent software developer, 
but, as every brilliant person, she has some strange quirks. One of those is that everything she does has to be in even quantities. 
Most often that quirk does not affect her, even though it may seem strange to others. Some examples: every day she has to eat an even number of meals; 
during breakfast, she drinks two cups of coffee, eats two toasts and two slices of cheese; when she goes to the cinema she buys two tickets 
(fortunately she always has a friend that goes with her); she takes two baths per day (or four, our six...).

Some other times, however, that quirk makes the life of Patricia more difficult. For example, no one wants to travel by car with her because if she has to pay toll, the number of tolls she pays has to be an even number.

Patricia lives in a country where all roads are two-way and have exactly one toll each. She needs to visit a client in a different city, 
and wants to calculate the minimum total value of tolls she has to pay to go from her city to the client’s city, obeying her strange quirk that she has to pay an even number of tolls.

Input
The input consists of several test cases. The first line of a test case contains two integers C and V, 
the total number of cities and the number of roads (2 ≤ C ≤ 104 and 0 ≤ V ≤ 50000). The cities are identified by integer numbers from 1 to C. 
Each road links two different cities, and there is at most one road between each pair of cities. Each of the next V lines contains three integers C1, C2 and G, 
indicating that the toll value of the road linking cities C1 and C2 is G (1 ≤ C1, C2 ≤ C and 1 ≤ G ≤ 104). Patricia is currently in city 1 and the client’s city is C.

Output
For each test case in the input your program must output exactly one line, containing exactly one integer, the minimum toll value for 
Patricia to go from city 1 to city C, paying an even number of tolls, or, if that is not possible, the value ‘-1’.
"""

# solve the problem above reading the input from the standard input and printing the output to the standard output

import heapq


def solve():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    while index < len(data):
        C = int(data[index])
        V = int(data[index + 1])
        index += 2
        
        if C == 0 and V == 0:
            break
        
        graph = {i: [] for i in range(1, C + 1)}
        for _ in range(V):
            C1 = int(data[index])
            C2 = int(data[index + 1])
            G = int(data[index + 2])
            index += 3
            graph[C1].append((C2, G))
            graph[C2].append((C1, G))
        
        visited = [False] * (C + 1)
        dist = [float('inf')] * (C + 1)
        dist[1] = 0
        
        pq = [(0, 1)]
        while pq:
            current_dist, u = heapq.heappop(pq)
            
            if visited[u]:
                continue
            
            visited[u] = True
            for v, weight in graph[u]:
                if dist[v] > dist[u] + weight:
                    dist[v] = dist[u] + weight
                    heapq.heappush(pq, (dist[v], v))
        
        if dist[C] % 2 == 0:
            print(dist[C])
        else:
            print(-1)

if __name__ == "__main__":
    solve()

# 20% Correct answer with: 5 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
7 - Help Clotilde (ProblemId 1910, difficulty 7/10):

Clotilde loves watching television, but her television control is not conventional. 
It has only six buttons, the on/off button and five buttons to change channels.

The channel change buttons work as follows: +1 (advances one channel), -1 (subtract one channel), x2 
(double the current channel), x3 (triple the current channel) and /2 (goes to the half of the current channel, 
this button only works if the current channel is even).

help Clotilde

Here’s the Clotilde famous controll.

The Clotilde neighbors often visit her house on weekends, 
watch television and do not return to channel it was before, causing 
Clotilde waste lots of time trying to find the channel of her interest again.

Your task is, given the number of the current channel and the number of the channel that 
Clotilde wants to watch, you must calculate the least amount of button clicks needed to 
get out of one and get the other. Remeber that as Clotilde is a serious woman, she does not 
like to go through some specific channels even if you have to press more buttons to get to the 
destination channel. Another constraint is, there is no channel that is lower or equal to 0 or greater than 105. 
Ex: If you are in the channel number 55000, you can’t press the button x2 or x3.

Input
There will be several test cases. Each one begins with three integers, O, D and K (1 ≤ O, D ≤ 105, 0 ≤ K ≤ 100), 
representing, respectively, the source channel, destination, and the amount of channels that 
Clotilde does not want to pass. The second line contains the K channels banned by Clotilde. 
It is guaranteed that the source and destination channel will never be banned.
The input ends with O = D = K = 0, which should not be processed.

Output
For each case, output a single line, the least amount of button clicks required to 
get from the source channel to the destination or -1 if it is impossible to reach the 
destination channel due to the restrictions of Clotilde.
"""

# solve the problem above reading the input from the standard input and printing the output to the standard output

def solve():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    while True:
        O = int(data[index])
        D = int(data[index + 1])
        K = int(data[index + 2])
        index += 3
        
        if O == 0 and D == 0 and K == 0:
            break
        
        banned = set()
        for _ in range(K):
            banned.add(int(data[index]))
            index += 1
        
        visited = [False] * 100001
        visited[O] = True
        dist = [0] * 100001
        queue = [O]
        
        while queue:
            current_channel = queue.pop(0)
            
            if current_channel == D:
                print(dist[current_channel])
                break
            
            for next_channel in [current_channel + 1, current_channel - 1, current_channel * 2, current_channel * 3]:
                if next_channel % 2 == 0:
                    next_channel //= 2
                
                if 0 < next_channel <= 100000 and next_channel not in banned and not visited[next_channel]:
                    visited[next_channel] = True
                    dist[next_channel] = dist[current_channel] + 1
                    queue.append(next_channel)
        else:
            print(-1)

if __name__ == "__main__":
    solve()


# Time limit exceeded with: 6 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
8 - Babel (ProblemId 1085, difficulty 8/10):

John and Mary are brothers, and are enthusiastic about their courses on foreign languages. 
Each one is taking several language courses. When they get home they comment about grammar, 
vocabulary, culture of the different countries and so on. In one of those conversations they 
realized that some words are common to more than one language, even though the words may have 
different meanings in the languages. For example, the word "amigo" exists in Portuguese and 
Spanish and has the same meaning, while "date" is a word that exists in English and French and 
may have different meanings, since "date" is also a fruit, besides meaning a calendar date. 
On the other hand, "red" in Spanish is a network, while in English it is a color.

Thrilled by these findings, the brothers decided to write in a notepad all words in common they could 
think of, associating each word to a pair of languages. Observant and smart, John proposed a challenge to 
Mary: given one language to start and one language to finish, 
write down a sequence of words such that the first word is included in the vocabulary of the start 
language, and the last word is included in the vocabulary of the finish language. Two adjacent words 
in the sequence must be in the vocabulary of the same language. For example, if the start language is 
Portuguese and the finish language is French, Mary could write the sequence "amigo actual date" 
(Portuguese/Spanish, Spanish/English, English/French).

To John's surprise, Mary solved the problem rather easily. Annoyed by his sister's success, 
he decided to make the problem more difficult: Mary must find a solution in which the sequence 
has the smallest number of letters in total (not counting spaces between words), and, besides, two 
consecutive words must not have the same initial letter.

Note that the previous solution is now invalid, as "amigo" and "actual" share the same initial letter. 
It is possible, however, to find another solution, "amigo red date", with a total length equal to 12.

John did an extensive research on the Internet and compiled an enormous list of words, 
and challenged Mary to solve the problem. As there may be more than one solution, he asked her 
to answer if there is a solution, and in that case to answer the number of letters in the best solution. 
Can you help Mary?

Input
The input contains several test cases. The first line of a test case contains one integer M (1 ≤ M ≤ 2000), 
representing the total number of words compiled by John. The second line contains two distinct strings O and D, 
separated by one space, indicating respectively the start language and the finish language. 
Each of the next M lines contains three strings I1, I2 and P, separated by one space, 
representing respectively two languages and one word in common between both languages (I1 and I2 arealways distinct). 
All strings will have length at least 1 and at most 50, and will be composed of lower case letters only. 
The same pair of languages may have several words associated to it, 
but a word P will be never repeated in a test case.
The end of input is indicated by a line containing only one zero.

Output
For each test case in the input, your program must print a line with a single integer, 
the length of the shortest sequence that satisfies John's restrictions, or the word "impossivel" 
(lowercase, meaning "impossible" in Portuguese) in case it is not possible.
"""

# solve the problem above reading the input from the standard input and printing the output to the standard output

def solve():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    while True:
        M = int(data[index])
        index += 1
        
        if M == 0:
            break
        
        start_language = data[index]
        finish_language = data[index + 1]
        index += 2
        
        words = {}
        for _ in range(M):
            I1 = data[index]
            I2 = data[index + 1]
            P = data[index + 2]
            index += 3
            words[(I1, I2)] = P
        
        visited = set()
        queue = [(start_language, 0)]
        visited.add(start_language)
        
        while queue:
            current_language, length = queue.pop(0)
            
            if current_language == finish_language:
                print(length)
                break
            
            for (I1, I2), P in words.items():
                if I1 == current_language and P[0] != P[0].upper() and I2 not in visited:
                    visited.add(I2)
                    queue.append((I2, length + len(P)))
                elif I2 == current_language and P[0] != P[0].upper() and I1 not in visited:
                    visited.add(I1)
                    queue.append((I1, length + len(P)))
        else:
            print("impossivel")

if __name__ == "__main__":
    solve()


# Time limit exceeded with: 6 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
9 - Boss (ProblemId 1469, difficulty 9/10):

Everyone knows Iks, the last trend in social network, which made so much success that competitors 
like Facebook and Google+ are strugling to keep their own social networ ks in business. 
As several “.com” companies, Iks started in a small garage, but today employs hundr eds of thousands. 
Iks has also a non-standard management system. For example, there are no c ommittees or boards,
which means less time spent on internal meetings. However, as usual i n other companies, there 
is a chain (or rather several chains) of command, as a person may manage other emp loyees, 
and may be managed by other employees. The figure below shows the chain of comman d for some employees, 
along with their ages.



A person P1 may manage another person P2 directly (when P1 is the immediate superior of P2 ) 
or indirectly (when P1 manages direclty a person P3 who manages P2 directly or indirectly). 
For example, in the figure above, Alice manages David directly and Claire in directly. 
A person does not manage himself/herself, either directly or indirectly. One folklore that
developed in Wall Street is that Iks is so successf ull because in its chain of 
command a manager is always younger than the managed employee. As we can see in figure above, 
that is not true. But this folklore prompted Iks to develop a tool to st udy its own management 
system, and to understand whether age plays a role in its success. You have be en hired to work 
on that tool. Given the description of the chain of command at Iks and the ages of its empl oyees, 
write a program that answers a series of instructions. Instructions are of two types : management 
change and query. An instruction of management change swaps the positions of two employees A and B . 
As an example, figure (b) above shows the resulting chain of command when David and Ge orge change 
their respective positions in the chain of command. A query instruction names one employ ee A and 
asks the age of the youngest manager of A ; that is, the youngest person in the chain of command at 
Iks that manages A , either directly or indirectly. For example, in figure (a) above the youngest 
manager of Clara is 18 years old; in figure (b), the youngest manager of Clara is 21 years old.

Input
The input contains several test cases and ends with EOF. Each test case is described using 
several lines. The first line of a test case contains three integers N (1 ≤ N ≤ 500), M(0 ≤ M ≤ 60 × 103) 
and I(1 ≤ I ≤ 500) , representing respectively the number of employees, the number of direct manage 
relations and the number of instructions. E mployees are identified by numbers from 1 to N . 
The second line contains N integers Ki(1 ≤ Ki ≤ 100, para 1 ≤ i ≤ N) , 
where Ki indicates the age of the employee number i .

Each of the following M lines contains two integers X and Y(1 ≤ X, Y ≤ N, X != Y) , 
indicating that X manages Y directly. Then it follows I lines, each describing an instruction. 
An instruction of type managem ent change is described by a line containing the identifier 
T followed by two integers A and B (1 ≤ A,B ≤ N) , indicating the two employers that must 
swap places in the chain of command. An instruction of type query is described by a l
ine containing the identifier P followed by one integer E(1 ≤ E ≤ N) , representing the number 
of an employer. The last instruction is of type query.

Output
For each instruction of type query your program must print a single line containing a 
single integer, the age of the employee who is the youngest person that manages the employer 
named in the query (directly or indirectly), if that person exists. If the employe e does 
not have a manager, print an '*' (asterisc).
"""

# solve the problem above reading the input from the standard input and printing the output to the standard output

def solve():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    index = 0
    while index < len(data):
        N = int(data[index])
        M = int(data[index + 1])
        I = int(data[index + 2])
        index += 3
        
        ages = [int(data[index + i]) for i in range(N)]
        index += N
        
        adj = {i: [] for i in range(1, N + 1)}
        for _ in range(M):
            X = int(data[index])
            Y = int(data[index + 1])
            index += 2
            adj[X].append(Y)
        
        def dfs(u, visited, ages):
            visited[u] = True
            youngest = ages[u - 1]
            for v in adj[u]:
                if not visited[v]:
                    youngest = min(youngest, dfs(v, visited, ages))
            return youngest
        
        for _ in range(I):
            instruction = data[index]
            index += 1
            if instruction == "T":
                A = int(data[index])
                B = int(data[index + 1])
                index += 2
                ages[A - 1], ages[B - 1] = ages[B - 1], ages[A - 1]
            else:
                E = int(data[index])
                index += 1
                visited = [False] * (N + 1)
                youngest = dfs(E, visited, ages)
                if youngest == float('inf'):
                    print("*")
                else:
                    print(youngest)


if __name__ == "__main__":
    solve()


# 75% Correct answer with: 5 changes after copilot and/or copilot chat and 0 manual changes

# =====================================================================================

"""
10 - Maratona (ProblemId 2366, difficulty 10/10):
"""


# Correct answer with: 1 changes after copilot and/or copilot chat and 0 manual changes