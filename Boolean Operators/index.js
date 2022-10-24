var costOfMilk = 2.85;

if (costOfMilk < 2) {
    console.log('We will buy 2 gallons')
} else if (costOfMilk < 3) {
    console.log('We will buy only 1 gallon');
} else {
    console.log('No thanks, way too expensive!');
}

var grade = 'B';

switch (grade) {
    case 'A':
        console.log('90-100');
        break;
    case 'B':
        console.log('80-89');
        break;
    case 'C':
        console.log('70-79');
        break;
    default:
        console.log('0-69');
             
}


// 
var a = 5;
var b = 6;

if (a == 5) {
    if (b == 6) {
        console.log('a is 5 and b is 6.');
    } else {
        console.log('a is 5 but b is not 6.');
    }
}
// same code much cleaner always flatten like this***above is not flattened same code ^^^
if (a == 5 && b == 6) {
    console.log("a is 5 and b is 6.");
}

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var numberGrade = parseInt(input[0]);
var letterGrade;
  

//write your code here
 if(numberGrade >= 90){
     letterGrade = 'A';
 } else if(numberGrade >= 80){
     letterGrade = 'B';
 } else if(numberGrade >= 70){
     letterGrade = 'C';
 } else if(numberGrade >= 60){
     letterGrade = 'D';
 } else {
     letterGrade = 'F';
 }
 
 console.log(letterGrade);