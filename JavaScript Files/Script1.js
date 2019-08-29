
function calculateCelsius(numb){
    numb = parseInt(document.getElementById('Degrees-To-Celsius').value);
    let celsius;
    celsius = (numb - 32) * 5 / 9;
    document.getElementById('Celsius').innerHTML = `The temperature in Celsius is:${celsius}`;
}

function stringReversal(str){
    str = document.getElementById("ReversalInput").value;
    let reversed;
    reversed = str.split('').reverse().join('');
    document.getElementById('Reversed').innerHTML = "Your word Reversed is:" + reversed;
}

function factorialise(number){
number = parseInt(document.getElementById("FactorialiseInput").value);
let factor;

factor = number.constructor

}

 function LoveScore(){
   var usersname = prompt("What is your name");
   var lovename = prompt("What is their name");
   var lovescore = Math.random() * 100;
   lovescore = Math.floor(lovescore) * 1;

   if(lovescore <= 25){
     alert("Unlucky, your Love score is: " + lovescore + "%");
     document.getElementById('LoveScoreDiv').innerHTML = "Unlucky, your Love score is: " + lovescore + "%"
   }
   else if(lovescore > 25 && lovescore < 75){
     alert("You've got a shot! Your Love score is: " + lovescore + "%");
     document.getElementById('LoveScoreDiv').innerHTML = "You've got a shot! Your Love score is: " + lovescore + "%"
   }
   else{
     alert("You're in there! Your Love score is: " + lovescore + "%");
     document.getElementById('LoveScoreDiv').innerHTML = "You're in there! Your Love score is: " + lovescore + "%"
   }

 }

 /**function BMICalculator(){
   function bmiCalculator (weight, height) {
    height = prompt("What is your height");
    weight = prompt ("What is your weight?");

    var BMI = weight/ (Math.pow(height, 2));

//if() {
}

}//18.5 underweight, 20 normal, 22.5 overweight

    return interpretation;
} //TO BE COMPLETED
**/


 function fizzbuzz(){
   var output = [];
  for (var i = 1; i < 100; i++){
    if (i % 3 === 0 && i % 5 === 0 ){
    output.push("FizzBuzz");
    }
    else if(i % 3 === 0){
      output.push("Fizz");
    }
    else if(i % 5 === 0){
      output.push("Buzz");
    }
    else{
      output.push(i);
    }
  }
  console.log(output);

 }


 function fibonacci() {
     n = prompt("Enter the amount of numbers in your Fibonacci Sequence")
     var fibArray = [];
     for (var i = 0; i < n; i++){
         if (fibArray.length < 2) {
             fibArray.push(i);
         } else if (fibArray.length >= 2 && fibArray.length < n){
             fibArray.push((fibArray[i-1] + fibArray[i-2]));
         }
     }

     document.getElementById('FibonacciOutput').innerHTML = fibArray;
     //Return an array of fibonacci numbers.
 }
