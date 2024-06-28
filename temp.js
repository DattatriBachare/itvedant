/* let toll_amount_paid = true
if(toll_amount_paid == true)
    {
        document.write("<b> Let vehical to go <b>");
    }
else
    {
        document.write("Stop the vehical");
    }
*/
/*
 x = prompt("Enter value of x : ");
 y = prompt("Enter value of y : ");
 x = parseFloat(x);
 y = parseFloat(y);
window.alert("The sum of x and y is : " + (x + y))*/

/* alert("Welcome to RTO");

let input = parseInt(prompt("Type 1. for light Licence \n        2. for heavy Licence : "));

if (input == 1){
    let age = parseInt(prompt("Enter age : "));
    if (age >= 18){
        alert("You are eligible for light Licence ..!");
    }
    else{
        alert("You are not eligible.");
    }
}
else if (input == 2){
    let age = parseInt(prompt("Enter your age : "));
    if (age > 21){
        alert("You are eligible ..!");
    }
    else{
        alert("Wait for "+(21 - age)+" more years");
    }
}
else{
    alert("Enter a valid input")
}
console.log("Hello world")  */

// let fullname = prompt("Enter your full name without space : ")
// document.write("@"+ fullname + fullname.length)

function areaofrect(x,y){
    let z =  x**x * y;
    console.log(z + 2);
}
areaofrect(2,3);