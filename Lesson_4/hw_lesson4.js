/* Task - 1 (Not required)
    Написати свою реалізацію функції isNaN. 
    
    Нагадування: це глобальна функція в JavaScript, яка використовується для перевірки, чи є значення NaN (Not-a-Number). 
*/

let x = "Hello!";
if (isNaN(x)){
    console.log(x +" - це не число");
}else{
    console.log(x +" - це число");
}



/* Task - 2
    Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні 
    від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. 
    Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). 
    Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

    Функція виводить інформацію
    Кількість згенерованих чисел: кількість чисел
    Парних чисел: кількість парних чисел
    Не парних чисел: кількість не парних чисел
    Відсоток парних до не парних
*/

// function getRandomInt(min, max) {
//     // The maximum is exclusive and the minimum is inclusive
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   const randomInt = getRandomInt(1, 10);
//   console.log(randomInt);
  

function countPairedUnpairedNumbers(quantity, min, max) {
    let pairedCount = 0;
    let unpairedCount = 0;
  
    for (let i = 0; i < quantity; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // Generate a random number between 1 and 100
  
      if (randomNumber % 2 === 0) {
        // Check if the number is even
        pairedCount++;
      } else {
        // The number is odd
        unpairedCount++;
      }
    }
  
    return { paired: pairedCount, unpaired: unpairedCount };
  }
 
  const numberOfRandomNumbers = 20; // Replace with the desired quantity of random numbers
  const result = countPairedUnpairedNumbers(numberOfRandomNumbers, 100, 1000);
  const percentagePaired = (result.paired / numberOfRandomNumbers) * 100;
  const percentageUnpaired = (result.unpaired / numberOfRandomNumbers) * 100;
//   const maxNumber = Math.max(result.paired, result.unpaired)
//   const minNumber = Math.min(result.paired, result.unpaired)
  
  console.log(`Even numbers: ${result.paired}`);
  console.log(`Odd numbers: ${result.unpaired}`);
  console.log("Відсоток парних до непарних: " + percentagePaired + " % " + percentageUnpaired);
 
  

  
/* Task - 3
    Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), яка приймає чотири аргументи:

    рядок, до якого буде додаватися символ.
    символ, який буде додаватися.
    Скільки додавати символів
    булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
    Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6, то додаєте тільки один символ
*/

function pad(){
    if (isNaN(number)){
        console.log('qwerty'.padStart(8, '+'));
    }else{
        console.log('qwerty'.padEnd(9, '+'))
    }
}
const number = 5;
//const number = "Hi";
const result2 = pad(number);

