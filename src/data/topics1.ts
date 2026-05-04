import type { Topic } from './types'

export const topics1: Topic[] = [
  {id:1,title:"Introduction to Logic",description:"Fundamentals of propositional and predicate logic",icon:"🧩",color:"#00f0ff",questions:[
    {q:"What is the result of TRUE AND FALSE?",options:["TRUE","FALSE","NULL","UNDEFINED"],answer:1},
    {q:"Which operator returns TRUE only when both operands are TRUE?",options:["OR","NOT","AND","XOR"],answer:2},
    {q:"What is the negation of TRUE?",options:["TRUE","FALSE","NULL","MAYBE"],answer:1},
    {q:"In logic, what does 'P → Q' represent?",options:["Conjunction","Disjunction","Implication","Biconditional"],answer:2},
    {q:"What is a tautology?",options:["Always false","Always true","Sometimes true","Undefined"],answer:1},
    {q:"Which logic gate outputs TRUE when inputs differ?",options:["AND","OR","XOR","NAND"],answer:2},
    {q:"What does the universal quantifier ∀ mean?",options:["There exists","For all","Not any","Some"],answer:1},
    {q:"De Morgan's law states ¬(A∧B) equals?",options:["¬A∧¬B","¬A∨¬B","A∨B","A∧B"],answer:1},
    {q:"What is a contradiction?",options:["Always true","Always false","Variable","Conditional"],answer:1},
    {q:"Which connective is TRUE when at least one operand is TRUE?",options:["AND","OR","NOT","NAND"],answer:1}
  ]},
  {id:2,title:"Computer Architecture",description:"CPU, memory hierarchy, and system organization",icon:"🏗️",color:"#3b82f6",questions:[
    {q:"What is the brain of a computer?",options:["RAM","CPU","HDD","GPU"],answer:1},
    {q:"What does ALU stand for?",options:["Arithmetic Logic Unit","Advanced Logic Unit","Analog Logic Unit","Array Logic Unit"],answer:0},
    {q:"Which memory is volatile?",options:["ROM","HDD","RAM","SSD"],answer:2},
    {q:"What is the purpose of the control unit?",options:["Store data","Execute arithmetic","Direct operations","Display output"],answer:2},
    {q:"What is cache memory?",options:["Permanent storage","Fast small memory near CPU","Network memory","Virtual memory"],answer:1},
    {q:"Which bus carries data between components?",options:["Address bus","Control bus","Data bus","Power bus"],answer:2},
    {q:"What does GPU stand for?",options:["General Processing Unit","Graphics Processing Unit","Global Processing Unit","Graphical Power Unit"],answer:1},
    {q:"What is the fetch-decode-execute cycle?",options:["A boot process","CPU instruction cycle","Memory allocation","Disk operation"],answer:1},
    {q:"Which architecture uses separate data and instruction memory?",options:["Von Neumann","Harvard","RISC","CISC"],answer:1},
    {q:"What is a register?",options:["External storage","Small fast CPU storage","RAM type","Cache level"],answer:1}
  ]},
  {id:3,title:"Binary & Number Systems",description:"Binary, octal, decimal, and hexadecimal conversions",icon:"🔢",color:"#a855f7",questions:[
    {q:"What is the binary equivalent of decimal 10?",options:["1010","1100","1001","1110"],answer:0},
    {q:"What base is the hexadecimal system?",options:["2","8","10","16"],answer:3},
    {q:"What is 1011 in decimal?",options:["9","10","11","12"],answer:2},
    {q:"What is the octal base?",options:["2","8","10","16"],answer:1},
    {q:"How many bits in a byte?",options:["4","6","8","16"],answer:2},
    {q:"What is FF in decimal?",options:["255","256","16","15"],answer:0},
    {q:"What is 2's complement used for?",options:["Addition only","Representing negative numbers","Multiplication","Division"],answer:1},
    {q:"What is the binary of decimal 7?",options:["101","110","111","1000"],answer:2},
    {q:"What does BCD stand for?",options:["Binary Coded Decimal","Binary Computer Data","Base Coded Data","Bit Coded Decimal"],answer:0},
    {q:"What is 1 + 1 in binary?",options:["2","10","11","01"],answer:1}
  ]},
  {id:4,title:"Boolean Algebra",description:"Laws, theorems, and simplification of Boolean expressions",icon:"⚡",color:"#f97316",questions:[
    {q:"What is A + 0 in Boolean algebra?",options:["0","1","A","A'"],answer:2},
    {q:"What is A · 1?",options:["0","1","A","A'"],answer:2},
    {q:"What is A + A'?",options:["0","1","A","A'"],answer:1},
    {q:"What is A · A'?",options:["0","1","A","A'"],answer:0},
    {q:"Which law states A+B = B+A?",options:["Associative","Distributive","Commutative","Identity"],answer:2},
    {q:"What is the Absorption law?",options:["A+AB=A","A+B=B+A","A(A+B)=AB","AA=A"],answer:0},
    {q:"What is A + 1?",options:["0","1","A","A'"],answer:1},
    {q:"What is A · 0?",options:["0","1","A","A'"],answer:0},
    {q:"Which gate implements A'?",options:["AND","OR","NOT","XOR"],answer:2},
    {q:"What is the dual of A+B=C?",options:["A·B=C","A'+B'=C'","A·B=C'","A+B=C'"],answer:0}
  ]},
  {id:5,title:"Data Structures: Arrays & Strings",description:"Linear data structures and string manipulation",icon:"📊",color:"#22c55e",questions:[
    {q:"What is the index of the first element in most languages?",options:["0","1","-1","None"],answer:0},
    {q:"What is the time complexity of array access by index?",options:["O(n)","O(1)","O(log n)","O(n²)"],answer:1},
    {q:"What is a 2D array?",options:["Single row","Array of arrays","Linked list","Tree"],answer:1},
    {q:"How are strings stored in C?",options:["Linked list","Character array","Integer array","Hash table"],answer:1},
    {q:"What terminates a C string?",options:["\\n","\\0","EOF","NULL pointer"],answer:1},
    {q:"What is array overflow?",options:["Too many elements","Accessing beyond bounds","Null array","Empty array"],answer:1},
    {q:"What is the disadvantage of arrays?",options:["Fast access","Fixed size","Indexed","Sequential"],answer:1},
    {q:"Which operation is O(n) for arrays?",options:["Access","Insertion at beginning","Access last","Read length"],answer:1},
    {q:"What is string concatenation?",options:["Splitting strings","Joining strings","Reversing strings","Sorting strings"],answer:1},
    {q:"What does strlen() return?",options:["Address","Character","Length","Boolean"],answer:2}
  ]},
  {id:6,title:"Data Structures: Linked Lists",description:"Singly, doubly, and circular linked lists",icon:"🔗",color:"#ec4899",questions:[
    {q:"What does each node in a linked list contain?",options:["Only data","Only pointer","Data and pointer","Index and data"],answer:2},
    {q:"What is the head of a linked list?",options:["Last node","First node","Middle node","Null node"],answer:1},
    {q:"What is a doubly linked list?",options:["Two lists","Nodes with prev and next pointers","Double data","Two heads"],answer:1},
    {q:"What is the time complexity of insertion at head?",options:["O(n)","O(1)","O(log n)","O(n²)"],answer:1},
    {q:"What advantage do linked lists have over arrays?",options:["Random access","Dynamic size","Cache friendly","Index access"],answer:1},
    {q:"What is a circular linked list?",options:["Sorted list","Last node points to head","Array-based list","Empty list"],answer:1},
    {q:"How do you traverse a linked list?",options:["Index access","Follow pointers","Binary search","Random access"],answer:1},
    {q:"What is the tail of a linked list?",options:["First node","Last node","Middle node","Head"],answer:1},
    {q:"Deleting a node requires updating?",options:["Array index","Previous node's pointer","Hash table","Stack"],answer:1},
    {q:"What is a sentinel node?",options:["Data node","Dummy boundary node","Last node","Root node"],answer:1}
  ]},
  {id:7,title:"Stacks & Queues",description:"LIFO and FIFO abstract data types",icon:"📚",color:"#06b6d4",questions:[
    {q:"What principle does a stack follow?",options:["FIFO","LIFO","LILO","Random"],answer:1},
    {q:"What principle does a queue follow?",options:["FIFO","LIFO","LILO","Random"],answer:0},
    {q:"Which operation adds to a stack?",options:["Enqueue","Dequeue","Push","Pop"],answer:2},
    {q:"Which operation removes from a stack?",options:["Enqueue","Dequeue","Push","Pop"],answer:3},
    {q:"Which operation adds to a queue?",options:["Push","Pop","Enqueue","Dequeue"],answer:2},
    {q:"What is stack overflow?",options:["Empty stack","Stack exceeds capacity","Queue error","Memory leak"],answer:1},
    {q:"What real-world example models a queue?",options:["Undo feature","Waiting line","Book stack","Recursion"],answer:1},
    {q:"What is a priority queue?",options:["FIFO queue","Elements served by priority","Stack variant","Circular queue"],answer:1},
    {q:"Which data structure is used in BFS?",options:["Stack","Queue","Tree","Hash"],answer:1},
    {q:"Which data structure is used in DFS?",options:["Queue","Array","Stack","Hash"],answer:2}
  ]},
  {id:8,title:"Algorithms: Searching",description:"Linear search, binary search, and hashing",icon:"🔍",color:"#8b5cf6",questions:[
    {q:"What is the time complexity of linear search?",options:["O(1)","O(log n)","O(n)","O(n²)"],answer:2},
    {q:"What is required for binary search?",options:["Linked list","Sorted array","Hash table","Stack"],answer:1},
    {q:"What is the time complexity of binary search?",options:["O(n)","O(1)","O(log n)","O(n²)"],answer:2},
    {q:"Binary search divides the array into?",options:["Three parts","Two halves","Four parts","N parts"],answer:1},
    {q:"What is a hash function?",options:["Sorting function","Maps keys to indices","Search function","Print function"],answer:1},
    {q:"What is a hash collision?",options:["Two keys map to same index","Empty hash","Sorted hash","Hash overflow"],answer:0},
    {q:"Which search is best for unsorted data?",options:["Binary","Interpolation","Linear","Jump"],answer:2},
    {q:"What is interpolation search?",options:["Random search","Improved binary for uniform data","Linear variant","Hash search"],answer:1},
    {q:"What is sentinel search?",options:["Search with guard element","Binary search","Hash search","Random search"],answer:0},
    {q:"Jump search has complexity of?",options:["O(n)","O(log n)","O(√n)","O(1)"],answer:2}
  ]},
  {id:9,title:"Algorithms: Sorting",description:"Bubble, selection, insertion, merge, and quick sort",icon:"📈",color:"#f43f5e",questions:[
    {q:"What is the time complexity of bubble sort?",options:["O(n)","O(n log n)","O(n²)","O(1)"],answer:2},
    {q:"Which sort has best average case O(n log n)?",options:["Bubble","Selection","Quick sort","Insertion"],answer:2},
    {q:"What is merge sort's approach?",options:["Greedy","Divide and conquer","Dynamic","Brute force"],answer:1},
    {q:"Which sort is stable?",options:["Quick sort","Heap sort","Merge sort","Selection sort"],answer:2},
    {q:"What is the best case for insertion sort?",options:["O(n²)","O(n log n)","O(n)","O(1)"],answer:2},
    {q:"Selection sort finds the?",options:["Maximum","Minimum","Median","Mode"],answer:1},
    {q:"Quick sort uses a?",options:["Sentinel","Pivot","Stack","Queue"],answer:1},
    {q:"Which sort is in-place?",options:["Merge sort","Counting sort","Quick sort","Radix sort"],answer:2},
    {q:"Heap sort uses which data structure?",options:["Stack","Queue","Heap","Array only"],answer:2},
    {q:"What is the space complexity of merge sort?",options:["O(1)","O(n)","O(log n)","O(n²)"],answer:1}
  ]},
  {id:10,title:"Recursion",description:"Recursive thinking, base cases, and stack frames",icon:"🔄",color:"#14b8a6",questions:[
    {q:"What is recursion?",options:["Loop","Function calling itself","Goto statement","Iteration"],answer:1},
    {q:"What must every recursive function have?",options:["Loop","Base case","Array","Pointer"],answer:1},
    {q:"What happens without a base case?",options:["Returns 0","Infinite recursion","Compilation error","Nothing"],answer:1},
    {q:"Factorial of 5 is?",options:["25","60","120","720"],answer:2},
    {q:"Which data structure tracks recursive calls?",options:["Queue","Array","Stack","Heap"],answer:2},
    {q:"What is tail recursion?",options:["First call","Last operation is recursive call","Middle call","No recursion"],answer:1},
    {q:"Fibonacci sequence uses?",options:["Single recursion","Double recursion","No recursion","Triple recursion"],answer:1},
    {q:"What is memoization?",options:["Caching results","Deleting data","Sorting","Searching"],answer:0},
    {q:"Tower of Hanoi minimum moves for 3 disks?",options:["3","5","7","9"],answer:2},
    {q:"Recursion vs iteration: recursion uses more?",options:["CPU only","Memory (stack)","Disk","Network"],answer:1}
  ]}
]
