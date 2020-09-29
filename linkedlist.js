let express = require ( 'express' );
const { json } = require('express');
let app = express ();
app.listen(3000);

class Node { 
    // constructor 
    constructor(element)  { 
        this.element = element; 
        this.next = null
    } 
} 

class LinkedList { 
    constructor() { 
        this.head = null; 
        this.length = 0; 
    } 

    add(element) { 
    let node = new Node(element); 
    
  
    if (this.head == null) 
        this.head = node; 
    else { 
        let current; 
        current = this.head; 
  
        while (current.next) { 
            current = current.next; 
        } 
        current.next = node; 
    } 
    this.length++; 
  }
    
    printList() 
  { 
    let currentPrint = this.head; 
    let str = ""; 
    while (currentPrint) { 
        str += currentPrint.element + " "; 
        currentPrint = currentPrint.next; 
    } 

    app . get ( '/' , function ( req , res ) {
    res.send(str)
    })

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

// object of LinkedList /////
let linked = new LinkedList()
let accounts =[
    { id: 1 , name: 'alex' , deposit: 5 },
    { id: 2 , name: 'sarah' , deposit: 5 },
    { id: 3 , name: 'jim' , deposit: 15 },
    { id: 4 , name: 'hussam' , deposit: 9 },
    { id: 5 , name: 'petar' , deposit: 44 },]

for (i = 0; i < accounts.length; i++)
linked.add(JSON.stringify(accounts[i]));

linked.printList();