let express = require ( 'express' );
let app = express ();
app.listen(3000);

// create node class 
class Node { 
    // constructor 
    constructor(element)  { 
        this.element = element; 
        this.next = null
    } 
} 

// create a linked list with two methods
class LinkedList { 
    constructor() {   // constructor set default to null
        this.head = null; 
        this.length = 0; 
    } 

    // adding node in the Linked list
     add(element) { 
    let node = new Node(element); 
    let current; 
  
    if (this.head == null) // if list is empty , the current is the first node
        this.head = node; 

    else { 
        current = this.head; 
  
        while (current.next) { 
            current = current.next; 
        } 
        current.next = node; 
    } 
    this.length++; 
  }

 // retiver the nodes from link
    printList() 
  { 
    let currentPrint = this.head; 
    let record = "" ; 
    while (currentPrint) { 
        record = record + currentPrint.element;
        currentPrint = currentPrint.next; 
    } 

// retiver all the records  in the list 
    app . get ( '/' , function ( req , res ) {
    res.send(record)
    })

//  retriever a records by ID 
    app.get ( '/byId' , function ( req , res ) {
        let id=req.query.id;
        for( let account of accounts ){
            if (account.id == id){
                res.json(account)
            }
    }
    })
  } 
} 

// object of LinkedList 
let linked = new LinkedList()
let accounts =[
    { id: 1 , name: 'alex' , deposit: 5 },
    { id: 2 , name: 'sarah' , deposit: 5 },
    { id: 3 , name: 'jim' , deposit: 15 },
    { id: 4 , name: 'hussam' , deposit: 9 },
    { id: 5 , name: 'petar' , deposit: 44 }]

// add all the records  to LinkedList
for (i = 0; i < accounts.length; i++)
linked.add(JSON.stringify(accounts[i]));// stringify convert the data into a string.

linked.printList();

/*Why do we use a linked list instead of an array ?


Arrays are fixed-size memory. On the other hand, Linked lists are dynamic size memory and flexible 
and can extend by adding new nodes without wasting a new block of memory.
for example, adding and deleting a node in an array take more time ,
but at the other hand, these operations perform fast in Linked lists.*/