/*Task - 1
  Replace the "for" loop with a "while" loop


for (let i = 0; i < 8; i++) {
  console.log( `число - ` + i);
}

*/

let i = 0;

while (i < 8){
    console.log(`число - ` + i)
    i ++;
}


/*Task - 2
  Implement algorithm which will calculate sum of numbers from 0 to 50 (included) not divisible by 3.
  Use 3 different cycles: for | while | do..while */

//цикл for
let sum = 0;
for (let x = 0; x <= 50; x++){
    if (x % 3 !== 0){
        sum += x;
    }
}
console.log("Сумма = " + sum);

// цикл while
let sum = 0;
let x = 0;
while (x <= 50){
    if (x % 3 !== 0){
        sum += x;
    }
    x ++;
}
console.log("Сумма = " + sum);

// цикл do... while
let sum = 0;
let x = 0;
do {
    if (x % 3 !== 0){
        sum += x;
    } 
    x ++;
} while (x <= 50);
console.log("Сумма = " + sum);



/* Task - 3
  Implement algorithm which will
  calculate sum of numbers from firstNumber to secondNumber (included)
  Use for loop  
*/

let firstNumber = -100;
let secondNumber = 250;
let sum = 0;

for (let x = firstNumber; x <= secondNumber; x++){
    sum += x;
}
console.log("Сумма цифр від -100 до 250 = " + sum);

  

/* Task - 4
  Make a timer that will count from 10 to 0

  For example,
  10 seconds left
  9 seconds left
  8 seconds left 
*/

let a = 10;
for (; a >= 0; a--) console.log(a + " seconds left")

/* Task - 5
  Create program to display the following sequence: 7 14 21 28 35 42 49 */

  for (let i = 7; i <= 49; i += 7) {
    console.log(i);
  }
  

/* Task - 6
  implement algorithm which calculates factorial for 
  using for, while, do..while operators
  assign the result to corresponding variable
  what is factorial: https://www.mathsisfun.com/numbers/factorial.html 
*/

// for
let a = 6;
let result = 1;
for (let b = 1; b <= a; b++){
    result *= b;
}
console.log(result);

//while
let a = 6;
let result = 1;
let b = 1;
while (b <= a){
    result *= b;
    b++;
}
console.log(result);

//do... while
let a = 6;
let result = 1;
let b = 1;
do {
    result *= b;
    b++;
} while (b <= a);
console.log(result);

/* Task - 7
  implement algorithm filling a bathtub using buckets. 
  we know how many liters the bathtub holds and the capacity of one bucket, but we don't know how many buckets we need. 
  We need to fill the bathtub without overflowing it.
  Use while loop 
*/

let bucket = 5; //capacity of one bucket
let initialBathState = 0; //the initial value of the amount of water in the bathroom
let bathCapacity = 60;
let result; //
while (initialBathState !== bathCapacity){
    initialBathState += bucket
} result = initialBathState/bucket;
console.log("We need " + result + " buckets to fill out a bathtub.");