//UC1-Use Random function
let result = Math.floor(Math.random()*10);
console.log("The random number is: " + result);

//UC2-Get dice number between 1-6
const getRandomNumber=(min,max)=> Math.floor(Math.random()*(max-min+1))+min;
console.log("The dice number after rolled is: " + getRandomNumber(1,6));
//Another way of doing
let dice = Math.floor(Math.random()*6)%7+1;
console.log("The dice number after rolled is: " + dice);

//UC3-Add two random dice numbers
let dice1 = Math.floor(Math.random()*6)%7+1;
let dice2 = Math.floor(Math.random()*6)%7+1;
let res = dice1 + dice2;
console.log("Dice 1: " + dice1 + " and Dice 2: " + dice2);
console.log("Addition of two dice numbers: " + res);

//UC4-5 random number sum and avg
let num1 = Math.floor(Math.random()*99)%100+10;
let num2 = Math.floor(Math.random()*99)%100+10;
let num3 = Math.floor(Math.random()*99)%100+10;
let num4 = Math.floor(Math.random()*99)%100+10;
let num5 = Math.floor(Math.random()*99)%100+10;
let sum = num1 + num2 + num3 + num4 + num5;
let avg = sum/5;
console.log("Sum of 5 random two digit number is: " + sum);
console.log("Average of 5 random two digit number is: " + avg);

//UC5- Unit Conversion
//UC5.1
var feet = 42 /12;
console.log("Conversion inches into Feet: " + feet);
//UC5.2
let number1=60;
let number2=40;
let area = number1*number2;
let meter =area/3.281;
console.log("The area of rectangle in meters: " + meter);
//UC5.3
area=731.4843;
//For such 25 plots
let acers = area*4047;
let totalPlot = acers*25;
console.log("The area of 25 plots in acers is: " + totalPlot);