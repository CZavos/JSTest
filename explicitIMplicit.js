/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/



let result = "5" - 2;
console.log("The result is: " + result);//This converts it implicitly to a string with concatenation

let isValid = false //to make false into a boolean makes it a truthy
if (isValid) {
    console.log("This is valid!");
}


let age = Number("25");//change the string to a number
let totalAge = age + 5;
console.log("Total Age: " + totalAge);//This converts it implicitly to a string with concatenation

let score = 42;
let scoreText = String(score);  // Explicitly converting number to string
console.log(scoreText + " points");  // Output: "42 points"

let total = "10" - 5; // implicit conversion to Number
console.log(total);  // Output: 5
