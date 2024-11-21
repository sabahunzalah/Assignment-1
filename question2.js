


//  Q2: Students using this below image you have to create each variable keyword apply at least one
// example for tasks executing. I share the output everyone must same as in the image.



 //---------------------------- example of variable var , let  and const as globel scope  and block scope-------------
// -------------------------------------example var-----------------------------------------------------------
// var varVariable1 = "Hunzalah";
// console.log(varVariable1)


// {
//     var varVariable2 = "Humza"
  

// }

// console.log(varVariable2)
// in the above example you can see varaible var is a global scope  not a block scope,
//  we make varVariable2 inside the bracket 
// but it can be consoled outside the bracket

//-----------------------------------------------------------example let------------------------------------------
// {
//     let letVariable1 = "Hunzalah";
//     console.log(letVariable1 )
// }



// {
//     let letVariable2  = "Humza"
// }
// console.log(letVariable2 )
// in the above examples you can see varaible let  is not a global scope ,it is  block scope ,if you make a variable inside the block so it can be consoled 
// only the specific block not outside the block and throw an error  Uncaught ReferenceError: letVariable2 is not defined.

//-------------------------------------------example const---------------------------------------------------

// {
//     const constVariable1= "Hunzalah";
//     console.log(constVariable1)
// }

// {
//     const constVariable2 = "Humza"  

// }
// console.log(constVariable2)
// in the above examples you can see varaible const  is  also not a global scope ,it is  block scope like let , it can be consoled 
// only the specific block  like let not outside the block and throw an error  Uncaught ReferenceError: constVariable2 is not defined.


//  -----------------------------------function scope-----------------------------------------------


// --------------------------------------Function Scope var------------------------------------------


// function exampleVar1() {
//     var greet1 = "Hello World";
//     console.log(greet1); 
// }

// exampleVar1();
// function exampleVar2() {
//     var greet2 = "Hello World";
     
// }

// exampleVar2();
// console.log(greet2);

//----------------------------------------Function Scope Let-----------------------------------------

// function exampleLet1() {
//     var greet1 = "Hello World";
//     console.log(greet1); 
// }

// exampleLet1();
// function exampleLet2() {
//     var greet2 = "Hello World";
     
// }

// exampleLet2();
// console.log(greet2);
//---------------------------------------Function Scope Const-------------------------------------------

// function exampleConst1() {
//     var greet1 = "Hello World";
//     console.log(greet1); 
// }

// exampleConst1();
// function exampleConst2() {
//     var greet2 = "Hello World";
     
// }

// exampleConst2();
// console.log(greet2);
/* in the above examples you can see two funtions using varaible var,let and const .
first function from all variables are consoled inside the function that show result greet1 "hello world" 
but second functions from all varables are consoled outside the function ,
which  are throwed an error "greet2 is not defined" its mean var ,let and const are 
 function scope you can not consoled them outside the function"*/




 // ---------------------------------------------------example varaible var ----------------------------------------------------
// here i am declared a varaible using var which name is num and assigned value 100
//  var num = 100;
// // here i am redeclared varaible  num and reassigned value 200 ,its mean varaible var can be reassigned and redeclared
 
//  var num = 200; 
//  console.log(num);
//  //according to the result shown in console varaible var can be reassigned and redeclared



//  -----------------------------------------------------example varaible let -------------------------------------------------------------

//  let greeting = "Hello Pakistan";
// //  let greeting ="hi"
//  console.log(greeting)
//  // let cannot be redeclared in the same scope it throw a error "syntaxerror greeting already been declared"
//  greeting =" hi everyone"
//  console.log(greeting)// Let can be reassigned that's why it can update its value

// ----------------------------------------------------example variable const---------------------------------------------------------
//  const message = "welcome to jawan pakistan";
// //  const message = "Hello user";
//  console.log(message) // variable const can not be redeclared it throw an syntax error "message has already been declared"

//  message =" good morning"
//  console.log(message)
 // variable const can not be reassigned ,if we reassigned value in the same scope the error is typeerror
  
 
 
 //=------------------------------------------------------Hoisting--------------------------------------------------------------------- 
//Hoisting means in javascript in which  variable using "var" and function using name "function" declarations are moved to the top of their scope
//    console.log(abc)
//    var abc = "letters"
   // in the above example i console var "abc" before decleration and initialization but answer is undefined it's mean the varalible var is declared on the top
   //only declarations are hoisted, not the initializations

// example 2

//    test()
//    function test(){
//     var myName ="saba shakeel"
//     console.log(myName)
//    }
// in the above example you can see the function name test call before its declaration but it give answer in console its mean it can be hoisted also
