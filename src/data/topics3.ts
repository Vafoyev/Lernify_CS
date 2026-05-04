import type { Topic } from './types'

export const topics3: Topic[] = [
  {id:21,title:"Programming Paradigms",description:"Procedural, functional, and logic programming",icon:"🧬",color:"#d946ef",questions:[
    {q:"What is procedural programming?",options:["Object-based","Step-by-step instructions","Event-driven","Functional"],answer:1},
    {q:"What is functional programming?",options:["Using loops","Using pure functions","Using classes","Using pointers"],answer:1},
    {q:"What is a pure function?",options:["Has side effects","No side effects, same input = same output","Uses global vars","Modifies state"],answer:1},
    {q:"What is declarative programming?",options:["How to do","What to do","When to do","Where to do"],answer:1},
    {q:"Which language is purely functional?",options:["Java","C","Haskell","Python"],answer:2},
    {q:"What is event-driven programming?",options:["Sequential","Responds to events","Recursive","Parallel only"],answer:1},
    {q:"What is a lambda function?",options:["Named function","Anonymous function","Class method","Constructor"],answer:1},
    {q:"What is immutability?",options:["Changeable data","Unchangeable data","Deleted data","Null data"],answer:1},
    {q:"What is higher-order function?",options:["Fast function","Takes/returns functions","Recursive only","Main function"],answer:1},
    {q:"Prolog is an example of?",options:["OOP","Functional","Logic programming","Procedural"],answer:2}
  ]},
  {id:22,title:"Python Programming",description:"Python syntax, data types, and core features",icon:"🐍",color:"#facc15",questions:[
    {q:"Python is which type of language?",options:["Compiled","Interpreted","Assembly","Machine"],answer:1},
    {q:"How do you print in Python?",options:["console.log()","System.out.println()","print()","cout<<"],answer:2},
    {q:"What is a Python list?",options:["Immutable sequence","Mutable ordered collection","Dictionary","Set"],answer:1},
    {q:"What is a dictionary in Python?",options:["Ordered list","Key-value pairs","Tuple","Array"],answer:1},
    {q:"What does 'len()' return?",options:["Type","Size/length","Value","Index"],answer:1},
    {q:"What is a tuple?",options:["Mutable list","Immutable sequence","Dictionary","Set"],answer:1},
    {q:"How are blocks defined in Python?",options:["Braces","Indentation","Parentheses","Keywords"],answer:1},
    {q:"What is list comprehension?",options:["Looping","Concise list creation","Dictionary method","String method"],answer:1},
    {q:"What is PEP 8?",options:["Python version","Style guide","Library","Framework"],answer:1},
    {q:"What does 'self' refer to in Python classes?",options:["Class itself","Instance of class","Parent class","Module"],answer:1}
  ]},
  {id:23,title:"Java Programming",description:"Java OOP, JVM, and core APIs",icon:"☕",color:"#f97316",questions:[
    {q:"Java is which type of language?",options:["Interpreted only","Compiled only","Compiled and interpreted","Scripting"],answer:2},
    {q:"What does JVM stand for?",options:["Java Virtual Machine","Java Version Manager","Java Visual Mode","Java Variable Manager"],answer:0},
    {q:"What is the entry point of a Java program?",options:["init()","start()","main()","run()"],answer:2},
    {q:"What is Java bytecode?",options:["Machine code","Intermediate code for JVM","Source code","Assembly"],answer:1},
    {q:"Which keyword creates an object?",options:["class","this","new","create"],answer:2},
    {q:"What is garbage collection?",options:["Manual memory free","Automatic memory management","File deletion","Cache clearing"],answer:1},
    {q:"What is an interface in Java?",options:["Class","Abstract contract","Object","Package"],answer:1},
    {q:"What is exception handling?",options:["Ignoring errors","Managing runtime errors","Debugging","Testing"],answer:1},
    {q:"What does 'static' mean?",options:["Instance-level","Class-level","Local","Global"],answer:1},
    {q:"What is a package in Java?",options:["Library","Namespace for organizing classes","Object","Method"],answer:1}
  ]},
  {id:24,title:"C/C++ Programming",description:"Pointers, memory management, and systems programming",icon:"⚡",color:"#3b82f6",questions:[
    {q:"What is a pointer?",options:["Variable value","Variable storing memory address","Function","Array"],answer:1},
    {q:"What does malloc() do?",options:["Free memory","Allocate memory","Print","Sort"],answer:1},
    {q:"What is a segmentation fault?",options:["Normal","Invalid memory access","Syntax error","Warning"],answer:1},
    {q:"What is the difference between C and C++?",options:["Same language","C++ adds OOP","C has OOP","No difference"],answer:1},
    {q:"What does free() do?",options:["Allocate","Deallocate memory","Print","Copy"],answer:1},
    {q:"What is a struct in C?",options:["Class","Custom data type grouping variables","Function","Array"],answer:1},
    {q:"What is a header file?",options:["Source code","Declarations and macros","Executable","Object file"],answer:1},
    {q:"What does #include do?",options:["Defines variable","Includes header file","Creates loop","Exits program"],answer:1},
    {q:"What is a dangling pointer?",options:["Valid pointer","Points to freed memory","Null pointer","Array pointer"],answer:1},
    {q:"What is operator overloading in C++?",options:["Deleting operators","Redefining operator behavior","Creating operators","Default operators"],answer:1}
  ]},
  {id:25,title:"Data Science & Analytics",description:"Statistics, data processing, and visualization",icon:"📊",color:"#10b981",questions:[
    {q:"What is data science?",options:["Web design","Extracting insights from data","Hardware design","Networking"],answer:1},
    {q:"What is the mean?",options:["Middle value","Average value","Most frequent","Range"],answer:1},
    {q:"What is the median?",options:["Average","Middle value when sorted","Most frequent","Sum"],answer:1},
    {q:"What is standard deviation?",options:["Average","Spread of data","Median","Mode"],answer:1},
    {q:"What is a DataFrame?",options:["Image format","2D labeled data structure","Database","File format"],answer:1},
    {q:"Which library is used for data analysis in Python?",options:["React","Pandas","Express","Django"],answer:1},
    {q:"What is data cleaning?",options:["Deleting all data","Fixing errors and inconsistencies","Encrypting","Compressing"],answer:1},
    {q:"What is a histogram?",options:["Pie chart","Bar chart showing distribution","Line graph","Scatter plot"],answer:1},
    {q:"What is correlation?",options:["Causation","Statistical relationship between variables","Randomness","Error"],answer:1},
    {q:"What is regression analysis?",options:["Classification","Predicting continuous values","Clustering","Sorting"],answer:1}
  ]},
  {id:26,title:"Machine Learning Basics",description:"Supervised, unsupervised learning, and neural networks intro",icon:"🤖",color:"#8b5cf6",questions:[
    {q:"What is machine learning?",options:["Manual programming","Systems learning from data","Hardware design","Networking"],answer:1},
    {q:"What is supervised learning?",options:["No labels","Learning with labeled data","Reinforcement","Clustering"],answer:1},
    {q:"What is unsupervised learning?",options:["With labels","Finding patterns without labels","Supervised","Testing"],answer:1},
    {q:"What is classification?",options:["Regression","Predicting categories","Clustering","Sorting"],answer:1},
    {q:"What is a neural network?",options:["Network cable","Computing system inspired by brain","Database","Router"],answer:1},
    {q:"What is overfitting?",options:["Good generalization","Model memorizes training data","Underfitting","Normal"],answer:1},
    {q:"What is training data?",options:["Test data","Data used to train model","Output data","Random data"],answer:1},
    {q:"What is a feature in ML?",options:["Bug","Input variable","Output","Error"],answer:1},
    {q:"What is k-means?",options:["Supervised","Clustering algorithm","Regression","Classification"],answer:1},
    {q:"What is deep learning?",options:["Shallow networks","ML with many neural layers","Simple ML","No ML"],answer:1}
  ]},
  {id:27,title:"Cloud Computing",description:"IaaS, PaaS, SaaS, and cloud architecture",icon:"☁️",color:"#0ea5e9",questions:[
    {q:"What is cloud computing?",options:["Local storage","On-demand computing via internet","Hardware only","Offline computing"],answer:1},
    {q:"What does IaaS stand for?",options:["Internet as a Service","Infrastructure as a Service","Integration as a Service","Information as a Service"],answer:1},
    {q:"What does SaaS stand for?",options:["Software as a Service","System as a Service","Storage as a Service","Server as a Service"],answer:0},
    {q:"What is AWS?",options:["A programming language","Amazon Web Services","A database","A framework"],answer:1},
    {q:"What is scalability?",options:["Fixed resources","Ability to handle growth","Speed only","Cost reduction"],answer:1},
    {q:"What is a virtual machine?",options:["Physical computer","Software-emulated computer","Router","Switch"],answer:1},
    {q:"What is containerization?",options:["Physical packaging","Lightweight virtualization","Hardware upgrade","Cloud storage"],answer:1},
    {q:"What is Docker?",options:["Language","Container platform","Database","OS"],answer:1},
    {q:"What is serverless computing?",options:["No servers exist","Cloud manages servers","Offline computing","Local only"],answer:1},
    {q:"What is a CDN?",options:["Central Database Network","Content Delivery Network","Cloud Data Node","Computer Design Network"],answer:1}
  ]},
  {id:28,title:"Version Control & Git",description:"Git workflow, branching, merging, and collaboration",icon:"📂",color:"#f43f5e",questions:[
    {q:"What is version control?",options:["File backup","Tracking changes to code","Compiling","Testing"],answer:1},
    {q:"What does 'git init' do?",options:["Clone repo","Initialize new repository","Push code","Pull code"],answer:1},
    {q:"What does 'git commit' do?",options:["Upload code","Save snapshot of changes","Delete code","Merge branches"],answer:1},
    {q:"What is a branch?",options:["Main code only","Parallel development line","File type","Commit"],answer:1},
    {q:"What does 'git merge' do?",options:["Delete branch","Combine branches","Create branch","Clone repo"],answer:1},
    {q:"What is a merge conflict?",options:["Normal merge","Competing changes","Branch deletion","Push error"],answer:1},
    {q:"What does 'git clone' do?",options:["Initialize","Copy remote repository","Push","Commit"],answer:1},
    {q:"What is GitHub?",options:["Git itself","Platform for hosting Git repos","Language","Database"],answer:1},
    {q:"What does 'git push' do?",options:["Download","Upload commits to remote","Delete","Merge"],answer:1},
    {q:"What is a pull request?",options:["Downloading code","Proposing changes for review","Deleting branch","Reverting"],answer:1}
  ]},
  {id:29,title:"Ethical & Social Issues in CS",description:"Privacy, intellectual property, digital ethics",icon:"⚖️",color:"#a855f7",questions:[
    {q:"What is digital privacy?",options:["Public data","Protection of personal data online","No internet","Encryption only"],answer:1},
    {q:"What is intellectual property?",options:["Physical property","Creations of the mind protected by law","Hardware","Software only"],answer:1},
    {q:"What is open source software?",options:["Paid software","Source code freely available","Closed source","Hardware"],answer:1},
    {q:"What is the digital divide?",options:["Internet speed","Gap in technology access","Programming language","Software type"],answer:1},
    {q:"What is data ethics?",options:["Ignoring data","Responsible data handling","Data deletion","Data selling"],answer:1},
    {q:"What is software piracy?",options:["Legal copying","Unauthorized copying of software","Open source","Freeware"],answer:1},
    {q:"What is net neutrality?",options:["Paid internet tiers","Equal treatment of internet traffic","No internet","VPN"],answer:1},
    {q:"What is GDPR?",options:["Programming language","EU data protection regulation","Database","Protocol"],answer:1},
    {q:"What is algorithmic bias?",options:["Fair algorithms","Systematic unfairness in algorithms","Fast algorithms","No algorithms"],answer:1},
    {q:"What is digital citizenship?",options:["Internet ban","Responsible technology use","Hacking","Programming"],answer:1}
  ]},
  {id:30,title:"AI Fundamentals",description:"Artificial intelligence concepts, applications, and future",icon:"🧠",color:"#00f0ff",questions:[
    {q:"What does AI stand for?",options:["Automated Internet","Artificial Intelligence","Advanced Integration","Auto Implementation"],answer:1},
    {q:"What is the Turing Test?",options:["Speed test","Can machine exhibit human intelligence","Memory test","Network test"],answer:1},
    {q:"What is NLP?",options:["New Logic Programming","Natural Language Processing","Network Layer Protocol","No Logic Process"],answer:1},
    {q:"What is computer vision?",options:["Monitor display","Machines interpreting visual data","Graphics design","VR"],answer:1},
    {q:"What is reinforcement learning?",options:["Supervised","Learning through rewards/penalties","Unsupervised","Clustering"],answer:1},
    {q:"What is a chatbot?",options:["Hardware","AI conversational program","Database","Router"],answer:1},
    {q:"What is expert system?",options:["Gaming AI","AI mimicking human expert decisions","Robot","Compiler"],answer:1},
    {q:"What is generative AI?",options:["Classifying data","Creating new content","Sorting data","Deleting data"],answer:1},
    {q:"What is robotics?",options:["Software only","Building and programming robots","Networking","Database"],answer:1},
    {q:"What is AGI?",options:["Automated General Internet","Artificial General Intelligence","Advanced Graphics Interface","Auto Generated Image"],answer:1}
  ]}
]
