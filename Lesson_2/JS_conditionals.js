// 'if' conditional

/* Task - 1
 Create a program that will store the value of the cat's weight. 
If the cat weighs less than 5 kg, then the cat is small and still needs to be fed, 
if it weighs more than 5, then the cat is very fluffy and needs to be combed :) */

let catWeight = 4;
if (catWeight < 5){
    console.log("Please feed the cat so he won't be so skinny!")
} else {
    console.log("Please brush the fluffy cat!")
}


/* Task - 2
Write an if condition to check if the age value is NOT between 18 and 50 inclusive, if it is not, then hire */

let age = 15;
if ( age >= 18 && age <= 50){
    console.log("Congratulations! You are hired!")
} else {
    console.log("Sorry, you are not a right candidat for this position.")
}

/* Task - 3
Write a program for checking grades.
If the grade is A and B, the student has passed the exam
If C and D - we send them for a retake
If E - expulsion. */

let grade = "D";              
if (grade === "A"|| grade === "B") {
    console.log("Congrats! You passed the exam!");
} else if (grade === "C" || grade === "D") {
    console.log("You need to retake the exam!");
} else if (grade === "E"){
    console.log("We are sorry, but you are expelled.");
} else {
    console.log("It's not the correct grade.");
}

// не просили, але спробую ще через switch
// let grade = "g";
// switch (grade) {
//     case "A":
//         console.log("Congrats! You passed the exam!");
//         break;
//     case "B":
//         console.log("Congrats! You passed the exam!");
//         break;
//     case "C":
//         console.log("You need to retake the exam!");
//         break;
//     case "D":
//         console.log("You need to retake the exam!");
//         break;
//     case "E":
//         console.log("We are sorry, but you are expelled.");
//         break;
//     default:
//         console.log("It's not the correct grade.");
// }


/* Task - 4
 Write a small program "Guess the number", where you need to enter a number from the console and tell the user whether he entered less or more or guessed the number. */

let myNumber = 7;
let userNumber = 45;
if (userNumber < myNumber){
    console.log("You entered less");
} else if (userNumber > myNumber){
    console.log("You entered more");
} else if (userNumber === myNumber){
    console.log("You guessed the number")
}

 /* Task - 5
Rewrite the if statement using the conditional operator '?

if (height < 140) {
  console.log("Заборонено на атракціон");
} else {
    console.log("Проходьте, будь ласка!");
}
 */
let height = 175;
let answer = (height < 140) ? "Заборонено на атракціон" : "Проходьте, будь ласка!";
console.log(answer)


/* Task - 6

Rewrite if..else using several ternary operators '? 

if (height < 50) 
{
     console.log("Forbidden to use attraction"); 
    } else if (height >= 50 && height < 80) {
         console.log("Permit - attraction №1");
         } else if (height >= 80 && height < 120) {
             console.log("Permit - attraction №1 or №2"); 
            } else { 
                console.log("Permit - All"); }
*/

let height = 145;
let permit = (height < 50) ? "Forbidden to use attraction"
    : (height >= 50 && height < 80) ? "Permit - attraction №1"
    : (height >= 80 && height < 120) ? "Permit - attraction №1 or №2"
    :"Permit - All"
console.log(permit)


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 'switch' conditinal

/* Task - 7
 Create a program that will print the day of the week according to the day number. */

let day = 4;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log('There are only 7 days in a week.');
}


/* Task - 8
 Make a program that will display the time of year a particular month number belongs to (for example, I enter "1" and it tells me that it is winter, I enter "5" - spring, etc.) */

let month = 8;
switch (month) {
    case 1:
        console.log('Winter');
        break;
    case 2:
        console.log('Winter');
        break;
    case 3:
        console.log('Spring');
        break;
    case 4:
        console.log('Spring');
        break;
    case 5:
        console.log('Spring');
        break;
    case 6:
        console.log("Summer");
        break;
    case 7:
        console.log("Summer");
        break;
    case 8:
        console.log("Summer");
        break;
    case 9:
        console.log("Fall");
        break;
    case 10:
        console.log("Fall");
        break;
    case 11:
        console.log("Fall");
        break;
    case 12:
        console.log("Winter");
        break;
    default:
        console.log('Please enter a valid month number.');
}

 /* Task - 9
 Rewrite the "switch" into an "if"
 
 switch (browser) {
  case 'Edge':
    console.log( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    console.log( 'We hope that this page looks ok!' );
}
 */

let browser = "HI";   //Чому не працює?????????
if (browser === "Edge"){
    console.log("You've got the Edge!");
} else if (browser === "Chrome"||"Firefox"||"Safari"||"Opera"){
    console.log('Okay, we support this browser too');
} else {
    console.log('We hope this page looks ok!')
}

/* Task - 10
Rewrite "if" into "switch" 

let age = 16;
if (age < 16) {
    console.log( 'We cant hire u!' );
}
if (age >= 18) {
  console.log( 'U can take full time job' );
}

if (age == 16 || a == 17) {
  console.log( 'U can take part time job' );
}
*/

let age = 14; 
switch (true) {
    case age < 16:
        console.log('We cant hire u!');
        break;
    case age >= 18:
        console.log('U can take full time job');
        break;
    case age === 16 || age === 17:
        console.log('U can take part time job');
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Task - 11
Create a program  - https://take.ms/mN65i 

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

Use only what've learned!

*/

let userName = "Admin";

if (userName === 'Admin') {

  let pass = 'TheMaster';

  if (pass === 'TheMaster') {
    console.log('Welcome!');
  } else if (pass === '' || pass === null) {
    console.log('Canceled');
  } else {
    console.log('Wrong password');
  }

} else if (userName === '' || userName === null) {
  console.log('Canceled');
} else {
  console.log("I don't know you");
}