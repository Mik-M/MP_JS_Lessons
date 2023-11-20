/* Task - 1 
Створіть об'єкт "Людина" з щонайменше трьома властивостями (рік, ім'я, прізвище). 

Завдання:
- Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
- Напишіть метод getFullName(), який виводитиме повне ім'я. 
*/
//getInfo
var human = {
    name: "Mark",
    sName: "Stain",
    age: 35,
  
}
console.log(human);
// let getInfo = Object.entries(human);   // or like this with 'entries'
// console.log(getInfo);


// 2nd option as function
var person = {
    name: 'Alice',
    sName: "Brooks",
    age: 30,
    getInfo: function() {
      return `Name: ${this.name}, Last Name: ${this.sName}, Age: ${this.age}`;
    }
  };
  
  console.log(person.getInfo()); 


//getFullName
var human = {
    name: "Mark",
    sName: "Stain",
    age: 35,

    get fullName(){
        return 'The full name is ' + this.name + ' ' + this.sName + '.'
    }
        
}
console.log(human.fullName);

// 2nd option as function
var person = {
    name: 'Alice',
    sName: "Brooks",
    age: 30,
    getFullName: function() {
      return `The full name is ${this.name} ${this.sName}.`;
    }
  };
  
  console.log(person.getFullName()); 
  


/* Task - 2 (Not required)
   Створіть функцію createRobot, яка створить об'єкт "robot" з об'єкта "person", 
   додавши додаткову властивість до об'єкта "person". 
   "Robot" повинен мати властивість "batteryEnergy" (наприклад, batteryEnergy = 50)

 * ПРИМІТКА: використовуйте метод присвоєння об'єктів (Object.assign)
*/

function createRobot() {
    const person = {
      name: "John",
      is: "person"
    };

    const robot = {};
    Object.assign(robot, {...person, is: "robot", batteryEnergy: 50  });

   //const robot = {...person, is: "robot", batteryEnergy: 50 };
    return robot;
  }
  
  const myRobot = createRobot();
  console.log(myRobot);
  


/* Task - 3 
   Створіть isARobot, який буде перевіряти, чи є об'єкт роботом
   перевіркою наявності у об'єкта властивості (batteryEnergy)
*/

var isARobot = {
    name: "Rob",
    is: "robot",
    batteryEnergy: 50
}
    if ('batteryEnergy' in isARobot){
        console.log("Це робот!");
    } else {
        console.log("Це не робот!"); 
    }
        
  

/* Task - 4 (Not required)

Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:

var services = {
	"стрижка": "60",
	"гоління": "80",
	"Миття голови": "100"
};

Завдання:
- створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
- створити метод minPrice() - який повертає мінімальний price
- створити метод maxPrice() - який повертає максимальний price
*/

var services = {    //як тут прописати return, щоб додавав, а не склеював?
	haircut: "60",
	shaving: "80",
	hair_wash: "100",

    get price(){
        return 'The total of the servises provided is ' + parseInt(this.haircut) + parseInt(this.shaving) + parseInt(this.hair_wash) + '.'
    }
};

console.log(services.price);



const services = {   //як тут прописати return, щоб додавав, а не склеював?
    haircut: 60,
	shaving: 80,
	hair_wash: 100,

    get price(){
        return 'The total of the servises provided is ' + this.haircut + this.shaving + this.hair_wash + '.'
    }
};

console.log(services.price)

////////


function calculateSum(obj) { // це GPT так порішав
    let sum = 0;
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && typeof obj[key] === "number") {
        sum += obj[key];
      }
    }
  
    return sum;
  }
  
  const services = { 
    haircut: 60,
	shaving: 80,
	hair_wash: 100,
  };
  
  const result = calculateSum(services);
  console.log(result); 

  //////////////////

  var services = {  // тільки сума, коли умова як str
    "haircut": "60",
    "shave": "80",
    "Washing the head": "100",
    // More services can be added here
    price: function() {
      let totalCost = 0;
      for (let service in this) {
        if (typeof this[service] === 'string' && parseInt(this[service])) {
          totalCost += parseInt(this[service]);
        }
      }
      return totalCost;
    },
  };

console.log("The total cost of the services provided is " + services.price());

//Для перебору всіх властивостей об’єкта використовується цикл for..in. Цей цикл відрізняється від вивченого раніше циклу for(;;)
/* for (let key in objjjjj){
    console.log(key + ': ' + objjjjj[key]);
} */


// all in one from GPT
  var services = {
    "haircut": "60",
    "shave": "80",
    "Washing the head": "100",
    // More services can be added here
    price: function() {
      let totalCost = 0;
      for (let service in this) {
        if (typeof this[service] === 'string' && parseInt(this[service])) {
          totalCost += parseInt(this[service]);
        }
      }
      return totalCost;
    },
    minPrice: function() {
      let min = Infinity;
      for (let service in this) {
        if (typeof this[service] === 'string' && parseInt(this[service])) {
          min = Math.min(min, parseInt(this[service]));
        }
      }
      return min;
    },
    maxPrice: function() {
      let max = -Infinity;
      for (let service in this) {
        if (typeof this[service] === 'string' && parseInt(this[service])) {
          max = Math.max(max, parseInt(this[service]));
        }
      }
      return max;
    }
  };
  
  // Example usage:
  console.log("Total Cost:", services.price()); // Output: 240
  console.log("Minimum Price:", services.minPrice()); // Output: 60
  console.log("Maximum Price:", services.maxPrice()); // Output: 100
  
