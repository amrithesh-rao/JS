

function bmiCalculator (weight, height) {
    var bmi = weight/(height*height);
    
    if(bmi<18.5)
    return "Your BMI is "+bmi+", so you are underweight.";
    else if(bmi>24.9)
    return "Your BMI is "+bmi+", so you are overweight.";
    else
    return "Your BMI is "+bmi+", so you have a normal weight.";
    
}


const readline = require('readline-sync'); 
var weight = Number(readline.question("Enter weight: "));
var height = Number(readline.question("Enter height: "));

console.log(bmiCalculator(weight,height));
