//UC1-Read single digit number in words
var number = Math.floor(Math.random()*10)%10;
switch(number){
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5: 
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    default:
        console.log("Nine");
        break;
}

//UC2-Read number and display day
var day = Math.floor(Math.random()*10)%7;
switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    default:
        console.log("Saturday");
        break;
}

//UC3-Display unit, tens, hundred 
const prompt = require("prompt-sync")({sigint: true});
var number = parseInt(prompt("Enter number based on places"));
switch(number){
    case 0:
        console.log("Unit place");
        break;
    case 1:
        console.log("Tens place");
        break;
    case 2:
        console.log("Hundreds place");
        break;
    default:
        console.log("Thousand place");
        break;
}

//UC4-Unit Conversion
{
const prompt = require("prompt-sync")({sigint: true});
var number = parseInt(prompt("Enter number based on places"));
const feetToInch =0;
const feetToMeter =1;
const inchesToFeet =2;
var num = Math.floor(Math.random()*10)%4; 
switch(num){
    case feetToInch:
        var inches = number/12;
        console.log("Feet to Inches conversion: " + inches);
        break;
    case feetToMeter:
        let meter = number*0.3048;
        console.log("Feet to Meter conversion: " + meter);
        break;
    case inchesToFeet:
        let feet = number/0.0833;
        console.log("Inches to Feet conversion: " + feet);
        break;
    default:
        let meterFeet = number*3.2808;
        console.log("Meter to Feet conversion: " + meterFeet);
        break;
    }
}