/* Task - 1
    Створіть масив (array1) з 5 любих елементівю
    Створіть функцію, яка буде повертати другий елемент з масиву
*/

var array1 = [10, "John", true, "Mike", false];
console.log(array1[1]);


/* Task - 2
    Створіть функцію, який додасть 1 елемент до масиву з попередньої задачи (array1) (наприклад, "new item")
*/

var array1 = [10, "John", true, "Mike", false];  //додала в кінець
array1[5] = "new item";
console.log(array1);

//або напочатку
var array1 = [10, "John", true, "Mike", false];
var v = array1.unshift("new item");
console.log(array1);


/* Task - 3
    Створіть другий масив (array2), потім створить функцію, яка отримує 2 масиви і повертає масив, що містить елементи з масивів array1 та array2
*/

var array1 = [10, "John", true];
var array2 = [22, 45, "hi"];
var sum = array1.concat(array2);
console.log(sum);


/* Task - 4 (Not required)
    Створіть функцію, яка буде повертає новий масив заданої довжини, заповнений заданим значенням
    https://www.w3schools.com/jsref/jsref_fill.asp
*/

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
console.log("Початковий масив = " + days)
console.log("Змінений масив = " + days.fill('Friday', 2, 4));



/* Task - 5 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає кількість людей, чиє ім'я "John" або вік менший за 30
     не використовуйте цикли
*/

const people = [
    { name: "John Snow", age: 45 },
    { name: "Cersei Lannister", age: 32 },
    { name: "Daenerys Targaryen", age: 18 },
    { name: "Jorah Mormont", age: 28 }
  ];
  
  const count = people.map(person => (person.name.includes("John") || person.age < 30) ? 1 : 0).reduce((acc, val) => acc + val, 0);
  
  console.log(count); // Output: 3
  

/* Task - 6 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає кількість людей, чиє ім'я "John" або вік менший за 30
    * не використовуйте цикли
    * https://www.w3schools.com/jsref/jsref_filter.asp
*/

const people = [
    { name: "John Snow", age: 45 },
    { name: "Cersei Lannister", age: 32 },
    { name: "Daenerys Targaryen", age: 18 },
    { name: "Jorah Mormont", age: 28 }
  ];
  
  const result = people.filter(person => person.name.includes("John") || person.age < 30).length;
  
  console.log(result); 


/* Task - 7 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає новий масив усіх людей, старших за 30 років
*/

const people = [
    { name: "John Snow", age: 45 },
    { name: "Cersei Lannister", age: 32 },
    { name: "Daenerys Targaryen", age: 18 },
    { name: "Jorah Mormont", age: 28 }
  ];
  
  const result = people.filter(person => person.age > 30);
  
  console.log(result); 


/* Task - 8 (Not required)

    Створіть функцію, яка буде приймати масив об'єктів
    наприклад, [{ім'я: "Jane", вік: 45}, {ім'я: "Peter", вік: 18}].
    та поверне новий масив об'єктів, що містить додаткову властивість "state"
    state = "baby", якщо вік дорівнює 0 або 3,
    state = "preschooler", якщо вік від 4 до 5,
    state = "teenager", якщо вік від 13 до 18 років

 https://www.w3schools.com/jsref/jsref_map.asp
*/

const people = [
    { name: "Jane", age: 45 },
    { name: "Peter", age: 18 },
    { name: "Alice", age: 3 },
    { name: "Bob", age: 5 },
  ];

function peopleWithState(people) {
    return people.map(person => {
      let state;
      
      if (person.age >= 0 && person.age <= 3) {
        state = "baby";
      } else if (person.age >= 4 && person.age <= 5) {
        state = "preschooler";
      } else if (person.age >= 13 && person.age <= 18) {
        state = "teenager";
      } else {
        state = "unknown"; 
      }
  
      return { ...person, state };
    });
  }
  console.log(peopleWithState(people));
  


/* Task - 9 (Not required)

    Створити функцію для знаходження індексу мінімального елементу масиву;
    наприклад,  console.log(minItem([6,8,2,9,1,3])) // 4
*/

const array = [6, 8, 2, 9, 1, 3];
const indexOfMin = minItem(array);

function minItem(arr) {

    const minElement = Math.min(...arr);
    const minIndex = arr.indexOf(minElement);
  
    return minIndex;
  }

  console.log("Index of the minimum element:", indexOfMin);
  

/* Task - 10 (Not required)

   Створити функцію, яка поверне кількість допустимих (НЕ not null/undefined) значень масиву
*/

function countValidValues(arr) {
    return arr.filter(value => value !== null && value !== undefined).length;
  }
  
const array = [1, null, 3, undefined, 5, "valid"];
const validCount = countValidValues(array);
  
console.log("Number of valid values:", validCount);
  

/* Task - 11 (Not required)

   Створити функцію, яка відфільтрує нульові та невизначені значення
  якщо кількість невірних записів більше 3 - потрібно згенерувати помилку "Дані потрібно переглянути"
*/

function filterAndReviewData(arr) {
    const incorrectCount = arr.filter(value => value === null || value === undefined).length;
  
    if (incorrectCount > 3) {
      console.log("Data needs to be reviewed");
    }
    return arr.filter(value => value !== null && value !== undefined);
  }

const data = [1, null, 3, undefined, 5, "valid", null, null];
const filteredData = filterAndReviewData(data);
console.log("Filtered Data:", filteredData);
  
