var express = require ( 'express' );
var app = express ();
app.listen(3000);

// the homepage welecoming massage 
app . get ( '/' , function ( req , res ) {
res . send ( 'SIT725 Welecome page' );
})


// function to add two numbers
let addition = function(num1,num2) {
    let result = num1+num2;
    return result;
}

//EndPoint for addind two numbers 
app.get ('/adding', function(req , res){
    let num1=parseInt(req.query.num1);
    let num2=parseInt(req.query.num2);
    let result=addition(num1,num2);
res.send(' the result of adding '+ num1 + ' + ' + num2 + " = " + result)
})


//data stored into an array
let accounts =[
    { id: 1 , name: 'alex' , deposit: 5 },
    { id: 2 , name: 'sarah' , deposit: 5 },
    { id: 3 , name: 'jim' , deposit: 15 }]


// retrieves all the data in the array
app.get('/allAccounts', function(req, res) {
    res.json(accounts);
})

//retrieve the data by id 
    app.get ( '/accountById' , function ( req , res ) {
        let id=req.query.id;
        for( let account of accounts ){
            if (account.id == id){
                res.json(account)
            }
        }
        })



    




        