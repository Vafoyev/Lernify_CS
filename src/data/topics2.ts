import type { Topic } from './types'

export const topics2: Topic[] = [
  {id:11,title:"Trees & Binary Trees",description:"Tree structures, traversal, and binary search trees",icon:"🌳",color:"#22c55e",questions:[
    {q:"What is the root of a tree?",options:["Leaf node","Topmost node","Any node","Null node"],answer:1},
    {q:"A binary tree node has at most how many children?",options:["1","2","3","N"],answer:1},
    {q:"What is in-order traversal order?",options:["Root-Left-Right","Left-Root-Right","Left-Right-Root","Right-Root-Left"],answer:1},
    {q:"What is pre-order traversal?",options:["Root-Left-Right","Left-Root-Right","Left-Right-Root","Right-Left-Root"],answer:0},
    {q:"What is a leaf node?",options:["Root node","Node with no children","Node with one child","Internal node"],answer:1},
    {q:"In a BST, left child is?",options:["Greater","Equal","Smaller","Random"],answer:2},
    {q:"Height of a single-node tree?",options:["0","1","2","-1"],answer:0},
    {q:"A complete binary tree has all levels filled except?",options:["Root","Last level","First level","Middle"],answer:1},
    {q:"Post-order traversal visits root?",options:["First","Second","Last","Never"],answer:2},
    {q:"BST search time complexity (balanced)?",options:["O(n)","O(1)","O(log n)","O(n²)"],answer:2}
  ]},
  {id:12,title:"Graphs",description:"Graph representations, BFS, DFS, and shortest paths",icon:"🕸️",color:"#6366f1",questions:[
    {q:"A graph consists of?",options:["Arrays","Vertices and edges","Stacks","Queues"],answer:1},
    {q:"What is an undirected graph?",options:["One-way edges","Two-way edges","No edges","Weighted only"],answer:1},
    {q:"What is an adjacency matrix?",options:["List of edges","2D array of connections","Tree structure","Stack"],answer:1},
    {q:"BFS uses which data structure?",options:["Stack","Queue","Heap","Array"],answer:1},
    {q:"DFS uses which data structure?",options:["Queue","Stack","Heap","Hash"],answer:1},
    {q:"What is a weighted graph?",options:["All edges equal","Edges have values","No edges","Directed only"],answer:1},
    {q:"Dijkstra's algorithm finds?",options:["MST","Shortest path","DFS order","BFS order"],answer:1},
    {q:"A cycle in a graph means?",options:["Dead end","Path back to start","No edges","Isolated node"],answer:1},
    {q:"What is a connected graph?",options:["All nodes reachable","No edges","One node","Directed"],answer:0},
    {q:"Adjacency list is better for?",options:["Dense graphs","Sparse graphs","Complete graphs","No graphs"],answer:1}
  ]},
  {id:13,title:"Object-Oriented Programming",description:"Classes, objects, inheritance, polymorphism, encapsulation",icon:"🎯",color:"#f97316",questions:[
    {q:"What is encapsulation?",options:["Hiding data","Inheriting","Overloading","Abstracting"],answer:0},
    {q:"What is inheritance?",options:["Data hiding","Deriving from parent class","Function overloading","Memory allocation"],answer:1},
    {q:"What is polymorphism?",options:["One form","Many forms","No form","Single inheritance"],answer:1},
    {q:"What is a class?",options:["Object instance","Blueprint for objects","Function","Variable"],answer:1},
    {q:"What is an object?",options:["Class definition","Instance of a class","Function","Data type"],answer:1},
    {q:"What is abstraction?",options:["Showing all details","Hiding complexity","Inheritance","Overloading"],answer:1},
    {q:"What is a constructor?",options:["Destructor","Initializes object","Static method","Abstract method"],answer:1},
    {q:"What is method overriding?",options:["Same method different class","Same method same class","New method","Delete method"],answer:0},
    {q:"What is 'this' keyword?",options:["Parent object","Current object","Static reference","Null"],answer:1},
    {q:"Multiple inheritance means?",options:["One parent","Inheriting from multiple classes","No inheritance","Single class"],answer:1}
  ]},
  {id:14,title:"Database Fundamentals",description:"SQL, relational databases, normalization",icon:"🗄️",color:"#0ea5e9",questions:[
    {q:"What does SQL stand for?",options:["Structured Query Language","Simple Query Language","Standard Query Logic","System Query Language"],answer:0},
    {q:"What is a primary key?",options:["Any column","Unique identifier","Foreign key","Index"],answer:1},
    {q:"What does SELECT do?",options:["Delete data","Insert data","Retrieve data","Update data"],answer:2},
    {q:"What is a foreign key?",options:["Primary key","References another table's key","Unique key","Index"],answer:1},
    {q:"What is normalization?",options:["Adding redundancy","Reducing redundancy","Deleting tables","Merging databases"],answer:1},
    {q:"What does JOIN do?",options:["Delete tables","Combine rows from tables","Create tables","Drop columns"],answer:1},
    {q:"What is a transaction?",options:["Single query","Unit of work","Table","Index"],answer:1},
    {q:"ACID stands for?",options:["Add Create Insert Delete","Atomicity Consistency Isolation Durability","All Commands In Database","Auto Commit In Database"],answer:1},
    {q:"What is an index?",options:["Primary key","Speeds up queries","Table type","Column type"],answer:1},
    {q:"What does WHERE clause do?",options:["Sort data","Filter rows","Group data","Join tables"],answer:1}
  ]},
  {id:15,title:"Operating Systems",description:"Processes, threads, memory management, scheduling",icon:"🖥️",color:"#a855f7",questions:[
    {q:"What is an operating system?",options:["Hardware","System software managing resources","Application","Compiler"],answer:1},
    {q:"What is a process?",options:["Program in execution","Static code","Hardware","Memory"],answer:0},
    {q:"What is a thread?",options:["Process","Lightweight process","Hardware","Memory unit"],answer:1},
    {q:"What is virtual memory?",options:["RAM only","Extends RAM using disk","Cache","Register"],answer:1},
    {q:"What is a deadlock?",options:["Fast execution","Processes waiting forever for each other","Memory leak","CPU idle"],answer:1},
    {q:"FCFS scheduling stands for?",options:["Fast CPU First Serve","First Come First Served","First CPU First Schedule","Fast Come Fast Serve"],answer:1},
    {q:"What is paging?",options:["Sorting","Dividing memory into fixed blocks","Printing","Networking"],answer:1},
    {q:"What is context switching?",options:["Changing OS","Saving/loading process state","Rebooting","Installing"],answer:1},
    {q:"What is a semaphore?",options:["Timer","Synchronization tool","Memory type","CPU register"],answer:1},
    {q:"What is the kernel?",options:["Shell","Core of OS","Application","Driver"],answer:1}
  ]},
  {id:16,title:"Computer Networks",description:"OSI model, TCP/IP, protocols, and routing",icon:"🌐",color:"#06b6d4",questions:[
    {q:"How many layers in the OSI model?",options:["5","6","7","4"],answer:2},
    {q:"What does TCP stand for?",options:["Transfer Control Protocol","Transmission Control Protocol","Total Control Protocol","Transport Control Protocol"],answer:1},
    {q:"What layer is HTTP on?",options:["Transport","Network","Application","Data Link"],answer:2},
    {q:"What is an IP address?",options:["Physical address","Logical network address","MAC address","Port number"],answer:1},
    {q:"What does DNS do?",options:["Encrypts data","Translates domain to IP","Routes packets","Manages sessions"],answer:1},
    {q:"What is a MAC address?",options:["IP address","Physical hardware address","Domain name","Port"],answer:1},
    {q:"What protocol is connectionless?",options:["TCP","UDP","FTP","HTTP"],answer:1},
    {q:"What device connects networks?",options:["Hub","Switch","Router","Repeater"],answer:2},
    {q:"What is a firewall?",options:["Router","Network security system","Cable","Protocol"],answer:1},
    {q:"What port does HTTP use?",options:["21","22","80","443"],answer:2}
  ]},
  {id:17,title:"Web Development Basics",description:"HTML, CSS, JavaScript fundamentals",icon:"🌍",color:"#f43f5e",questions:[
    {q:"What does HTML stand for?",options:["Hyper Text Markup Language","High Text Machine Language","Hyper Tool Multi Language","Home Text Markup Language"],answer:0},
    {q:"What is CSS used for?",options:["Logic","Styling","Database","Server"],answer:1},
    {q:"What is JavaScript primarily used for?",options:["Styling","Structure","Interactivity","Databases"],answer:2},
    {q:"What tag creates a hyperlink?",options:["<link>","<a>","<href>","<url>"],answer:1},
    {q:"What does the DOM represent?",options:["Database model","Document Object Model","Data Output Method","Display Object Manager"],answer:1},
    {q:"Which is a CSS property for text color?",options:["font-color","text-color","color","foreground"],answer:2},
    {q:"What is responsive design?",options:["Fast loading","Adapts to screen size","Server-side","Database design"],answer:1},
    {q:"What is an API?",options:["Application Programming Interface","Advanced Protocol Interface","Auto Program Integration","Application Process Integration"],answer:0},
    {q:"What does JSON stand for?",options:["JavaScript Object Notation","Java Standard Object Notation","JSON Script Object Name","JavaScript Online Network"],answer:0},
    {q:"What is a SPA?",options:["Server Page Application","Single Page Application","Static Page App","Simple Program Application"],answer:1}
  ]},
  {id:18,title:"Cybersecurity Fundamentals",description:"Encryption, authentication, threats, and defenses",icon:"🔒",color:"#ef4444",questions:[
    {q:"What is encryption?",options:["Deleting data","Converting data to unreadable form","Compressing data","Backing up data"],answer:1},
    {q:"What is a firewall?",options:["Antivirus","Network barrier","Router","Protocol"],answer:1},
    {q:"What is phishing?",options:["Fishing game","Fraudulent attempt to obtain info","Virus type","Encryption"],answer:1},
    {q:"What does HTTPS add to HTTP?",options:["Speed","Security (SSL/TLS)","Headers","Cookies"],answer:1},
    {q:"What is a brute force attack?",options:["Social engineering","Trying all possible passwords","SQL injection","Phishing"],answer:1},
    {q:"What is two-factor authentication?",options:["One password","Two verification methods","Two passwords","Double encryption"],answer:1},
    {q:"What is malware?",options:["Good software","Malicious software","Hardware","Firmware"],answer:1},
    {q:"What is SQL injection?",options:["Database backup","Inserting malicious SQL","Normal query","Data export"],answer:1},
    {q:"What is a VPN?",options:["Virtual Private Network","Very Private Network","Virtual Public Network","Verified Private Network"],answer:0},
    {q:"Symmetric encryption uses?",options:["Two different keys","One shared key","No keys","Public key only"],answer:1}
  ]},
  {id:19,title:"Software Engineering",description:"SDLC, Agile, testing, and design patterns",icon:"⚙️",color:"#8b5cf6",questions:[
    {q:"What does SDLC stand for?",options:["Software Development Life Cycle","System Design Logic Control","Software Design Language Code","Standard Development Logic Cycle"],answer:0},
    {q:"What is Agile methodology?",options:["Waterfall","Iterative incremental approach","Single phase","No planning"],answer:1},
    {q:"What is unit testing?",options:["Testing whole system","Testing individual components","User testing","Performance testing"],answer:1},
    {q:"What is a design pattern?",options:["UI design","Reusable solution template","Database schema","Algorithm"],answer:1},
    {q:"What is the Waterfall model?",options:["Iterative","Sequential linear phases","No phases","Random"],answer:1},
    {q:"What is version control?",options:["Backup tool","Tracking code changes","Testing tool","Deployment tool"],answer:1},
    {q:"What is Git?",options:["Language","Distributed version control","Database","Framework"],answer:1},
    {q:"What is code review?",options:["Deleting code","Peer examination of code","Compiling","Testing"],answer:1},
    {q:"What is CI/CD?",options:["Code Integration/Code Delivery","Continuous Integration/Continuous Delivery","Computer Interface/Computer Design","Code Inspection/Code Debug"],answer:1},
    {q:"What is refactoring?",options:["Adding features","Improving code without changing behavior","Deleting code","Rewriting from scratch"],answer:1}
  ]},
  {id:20,title:"Complexity & Big-O Notation",description:"Time and space complexity analysis",icon:"📐",color:"#14b8a6",questions:[
    {q:"What does O(1) represent?",options:["Linear","Constant time","Quadratic","Logarithmic"],answer:1},
    {q:"What does O(n) represent?",options:["Constant","Linear time","Quadratic","Exponential"],answer:1},
    {q:"Which is faster: O(n) or O(n²)?",options:["O(n²)","Same","O(n)","Depends"],answer:2},
    {q:"What is O(log n)?",options:["Linear","Logarithmic","Quadratic","Constant"],answer:1},
    {q:"Binary search has which complexity?",options:["O(n)","O(n²)","O(log n)","O(1)"],answer:2},
    {q:"What is space complexity?",options:["Time used","Memory used","Disk used","Network used"],answer:1},
    {q:"What is worst case analysis?",options:["Best scenario","Maximum time/space","Average case","No analysis"],answer:1},
    {q:"O(n log n) is typical for?",options:["Linear search","Efficient sorting","Constant operations","Brute force"],answer:1},
    {q:"What is amortized analysis?",options:["Worst case only","Average over operations","Best case","No analysis"],answer:1},
    {q:"O(2^n) is?",options:["Polynomial","Linear","Exponential","Logarithmic"],answer:2}
  ]}
]
