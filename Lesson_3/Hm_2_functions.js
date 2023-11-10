/* Task - 0
    Create a function task1Func which will always return true
*/

function task1Func() {
    return console.log(true)
}
task1Func();

/* Task 1
    Write a function min(a, b) that returns the lesser of two numbers a and b.

    For example,
    min(2, 5) == 2
    min(3, -1) == -1
    min(1, 1) == 1
*/

function min(a, b) {
    if (a > b){
        return console.log("Lesser number is " + b);
    } else {
        return console.log("Lesser number is " + a);
    }   
}
min(5,2);

/* Task 2
    Write a function pow(x, n) that returns the number x raised to the power of n. 
    In other words, it multiplies the number x by itself n times and returns the result.

    For example,
    pow(3, 2) = 3 * 3 = 9
    pow(3, 3) = 3 * 3 * 3 = 27
    pow(1, 100) = 1 * 1 * ...* 1 = 1
*/

function pow(x, n) {
    return console.log(x ** n)
}
pow(2, 3);

/* Task 3
    Remake a function from the task 2
    * just make second parameter to have a default value equal 5

*/

let n = 5;
function pow(x, n) {
    
    return console.log(x ** n);
}
pow(2, n);

/* Task 4
   Create a variable  which will return a function
    which will take parameter pet as a number (where 1 stands for pizza, 2 is spagetti and 0 is other)
    and returns text ee.g. "My lunch for today is pizza"
    Use function expression with arrow function notation
*/


let food = (pet) => {
    let lunch = pet === 1 ? "pizza" : pet === 2 ? "spagetti" : "other";
    return console.log("My lunch for tuday is " + lunch);
}
food(1);

/* Task 5
    You need to draw a rectangular triangle of stars (or pluses, or some other symbol) in the console: one star on the first line, two on the second, and so on. 
    Write your solution in the form of a function that takes two parameters: the height of the triangle and the symbol you want to use to draw it.

    Example, 
    drawTriangle(5, *);
*
**
***
****
*****

*/

function drawRectangularTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        console.log(symbol.repeat(i));
    
    }
}
drawRectangularTriangle(9, "@");

/* Task 6
    Callback
    Create a function (e.g. function1)  which will take another function (e.g. function2) as an argument
    and returns result of execution of that another function in string format
 
    Example,
    if function2  returns "THIS IS THE RESULT OF CALLBACK FUNCTION"
    than function1 should return "The result = THIS IS THE RESULT OF CALLBACK FUNCTION"
*/

function firstFunction(b){
        console.log(b);
    }
    function secondFunction(myCallback){
        let a = "THIS IS THE RESULT OF CALLBACK FUNCTION"
        myCallback(a);
    }
    secondFunction (firstFunction);
 

/* Task 7
    Create a function task13Func which returns word google with given numbers of "o" symbols
    Example
    funcName(7) // => gooooooogle
*/

function task13Func(x) {
    if (x < 0) {
      return "Invalid input";
    } else {
      return "g" + "o".repeat(x) + "gle";
    }
  }
  console.log(task13Func(5));

  // or like this

  function task13Func(x, symble) {
    if (x < 0) {
      return "Invalid input";
    } else {
      return "g" + symble.repeat(x) + "gle";
    }
  }
  console.log(task13Func(5, "o"));