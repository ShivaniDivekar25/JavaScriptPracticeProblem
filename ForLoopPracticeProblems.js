//UC1-Table of power of two
{
const prompt = require("prompt-sync")({sigint: true});
var number = parseInt(prompt("Enter number based on places"));
let num =1;
for(let i=1; i<=number; i++){
    num = num*2;
    console.log(num);
}
}

//UC2-Find harmonics number series
let sum=0;
for(let i=1; i<=5; i++){
    sum = sum + 1/i;
    console.log("Harmonic series: " + sum);
}

//UC3-Find prime number
let flag =0;
let temp=32;
for(let i=2; i<=32/2; i++){
    if(temp%i==0){
        flag++;
        break;
    }
}
if(flag == 1){
    console.log("Number is non prime");
}
else{
    console.log("Number is prime");
}

//UC4-Find prime number in given range
const prompt = require("prompt-sync")({sigint: true});
var number = parseInt(prompt("Enter input range"));
for(let i=2; i<=number; i++){
    let flag1 =0;
    for(let j=2; j<number; i++){
        if(number%i==0){
            flag1=1;
            break;
        } 
    }
    if(flag == 0){
        console.log(number + " ");
    }
}

//UC5-Find factorial number
let fact=1;
for(let i=1; i<=5; i++){
    fact = fact*i;
}
console.log(fact);
