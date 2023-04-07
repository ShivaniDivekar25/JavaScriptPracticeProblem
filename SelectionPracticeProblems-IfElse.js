//UC1-Find min and max of 5 three digit random numbers
let num1 = Math.floor(Math.random()*999)%100+100;
let num2 = Math.floor(Math.random()*999)%100+100;
let num3 = Math.floor(Math.random()*999)%100+100;
let num4 = Math.floor(Math.random()*999)%100+100;
let num5 = Math.floor(Math.random()*999)%100+100;
if(num1>num2 && num1>num3 && num1>num4 && num1>num5){
    console.log("The max number is num1: " + num1);
}
else if(num2>num3 && num2>num4 && num2>num5){
    console.log("The max number is num2: " + num2);
}
else if(num3>num4 && num3>num5){
    console.log("The max number is num3: " + num3);
}
else if(num4>num5){
    console.log("The max number is num4: " + num4);
}
else{
    console.log("The max number is num5: " + num5);
}

if(num1<num2 && num1<num3 && num1<num4 && num1<num5){
    console.log("The min number is num1: " + num1);
}
else if(num2<num3 && num2<num4 && num2<num5){
    console.log("The min number is num2: " + num2);
}
else if(num3<num4 && num3<num5){
    console.log("The min number is num3: " + num3);
}
else if(num4<num5){
    console.log("The min number is num4: " + num4);
}
else{
    console.log("The min number is num5: " + num5);
}

//UC2
{
const prompt = require("prompt-sync")({sigint: true});
let date = parseInt(prompt("Enter a date"));
let month = parseInt(prompt("Enter a month"));
if(month<=6 && date<=20){
    return "Date and Month is: " + true;
}
else if((month>=3 && month<6) && date<31){
    return "Date and Month is: " + true;
}
else{
    return false;
}
}

//UC3-Find leap year
const prompt = require("prompt-sync")({sigint: true});
let year = parseInt(prompt("Enter an year"));
if((year%4==0 || year%100!=0) && (year%400==0)){
    console.log("Year is leap year " + year);
}
else{
    console.log("Year is not leap year " + year);
}

//UC4- Flip coin
var flipCoin = Math.floor(Math.random()*10)%2;
if(flipCoin == 0){
    console.log("Tail");
}
else{
    console.log("Head");
}

//UC5-Read single digit number in words
var number = Math.floor(Math.random()*10)%10;
if(number == 0)
    console.log(number + " Zero");
else if(number == 1)
    console.log(number + " One");
else if(number == 2)
    console.log(number + " Two");
else if(number == 3)
    console.log(number + " Three");
else if(number == 4)
    console.log(number + " Four");
else if(number == 5)
    console.log(number + " Five");
else if(number == 6)
    console.log(number + " Six");
else if(number == 7)
    console.log(number + " Seven");
else if(number == 8)
    console.log(number + " Eight");
else 
    console.log(number + " Nine");

//UC6-Read number and display day
var number = Math.floor(Math.random()*10)%7;
if(number == 0)
    console.log("Sunday");
else if(number == 1)
    console.log("Monday");
else if(number == 2)
    console.log("Tuesday");
else if(number == 3)
    console.log("Wednesday");
else if(number == 4)
    console.log("Thursday");
else if(number == 5)
    console.log("Friday");
else 
    console.log("Saturday");

//UC7-Display unit, tens, hundred 
{
const prompt = require("prompt-sync")({sigint: true});
var number = parseInt(prompt("Enter number based on places"));
if(number == 1)
    console.log("Unit place");
else if(number == 10)
    console.log("Tens place");
else if(number == 100)
    console.log("Hundreds place");
else
    console.log("Thousand place");
}

//UC8-Find min and max of Arithmatic operation
var n1 = 10;
var n2 = 15;
var n3 = 20;
var a = n1 + n2 * n3;
var b = n1 % n2 + n3;
var c = n3 + n1 / n2;
var d = n1 * n2 + n3;
if(a>b && a>c && a>d)
    console.log("Maximum: " + a);
else if(b>c && b>d)
    console.log("Maximum: " + b);
else if(c>d)
    console.log("Maximum: " + c);
else
    console.log("Maximum: " + d);
//Minimum
if(a<b && a<c && a<d)
    console.log("Minimum: " + a);
else if(b<c && b<d)
    console.log("Minimum: " + b);
else if(c<d)
    console.log("Minimum: " + c);
else
    console.log("Minimum: " + d);
