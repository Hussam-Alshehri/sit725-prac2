const express = require ( 'express' )
let app = express ()
let app2 = express()

app.use(express.static('public'))

// respond with "hello world" when a GET request is made to the homepage
app . get ( '/' , function ( req , res ) {
res . send ( 'hello world' )
})


app . get ( '/test' , function ( req , res ) {
    res . send ( 'test page' )
    })



    let addition = function(num1,num2){
        let result = num1+num2;
        return result;
    }


app.get('/adder', function(req,res){
    let num1=parseInt(req.query.num1);
    let num2=parseInt(req.query.num2);
    console.log(num1)
    console.log(num2)
   // let myRseult=addition(4,5);
    
   let myRseult=addition(num1,num2);
    
res.send('result = ' + myRseult)
 
})











app.listen(3000)