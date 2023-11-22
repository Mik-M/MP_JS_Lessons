/*  Task - 1
    Напишіть регулярний вираз, який допоможе знайти принаймні шість символів і не містяти літери А (великої або малої)
*/

var str = "Новий день";
var re = /[^Аа]/;
console.log(re.test(str));

/*  Task - 2

    var text = 'cat car can';

    Напишіть regex, котрий знайде cat та can, але не знайде car
 
*/

var text = 'cat car can';
var re = /^cat/;
var re = /can$/;
console.log(re.test(text));
console.log(re.test(text));


/*  Task - 3

    text = 'I would like 8 cups of coffee, please.';

    Напишіть regex, котрий знайде кількість чашок кофе.
 
*/

var  text = 'I would like 8 cups of coffee, please.';
var regex = /\d/g;
const result = text.match(regex);
console.log(result);


/*  Task - 4

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова котрі починаются на h
 
*/

var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
var regex = /\bh\w+/gi;
var result = text.match(regex);
console.log(result);


/*  Task - 5 (Not required)

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова від 4 до 6 символів
 
*/

var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
var regex = /\b\w{4,6}\b/gi;
var result = text.match(regex);
console.log(result);


/*  Task - 6 (Not required)

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова більше ніж 5 символів
 
*/

var text = 'Hello peopleeeeee of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
var regex = /\b\w{6,}\b/gi;
var result = text.match(regex);
console.log(result);

/*  Task - 7 (Not required)

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова довжина котрих 6 смиволів
 
*/

var text = 'Hello peopleeeee of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
var regex = /\b\w{6}\b/gi;
var result = text.match(regex);
console.log(result);


/*  Task - 8. Paranoya (Not required)
    В нас є масив обєктів в яких міститься email.

    var arr = [
        {
            userName:"Test",
            lastName:"Test",
            email:"test.test@gmail.com"
        },
        {
            userName:"Dmitro",
            lastName:"Porohov",
            email:"dmitro.porohov@yahoo.com"
        },
        {
            userName:"Andrii",
            lastName:"",
            email:"andrii@mail.ru" // Нам такі не підходять
        },
    ];


    У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.

    За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @

    - одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.
*/

var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

var trustedEmails = arr.filter(item => {
    // Використовуємо регулярний вираз для перевірки формату email та домену
    var emailRegex = /^[a-z0-9]+(\.[a-z0-9]+)?@(gmail\.com|yahoo\.com)$/i;
    return emailRegex.test(item.email);
});

console.log(trustedEmails);



/*  Task - 9 (Not required)

    У нас є масив рядків, давайте знайдемо посилання.

    var strings = [
	'https://https://github.com/',
	'this is not a URL',
	'https://google.com/',
	'123461',
	'https://google.com/search?q=cats',
	'http://not a valid url',
	'abc http://invalid.url/'
];

*/


var strings = [
    'https://https://github.com/',
    'this is not a URL',
    'https://google.com/',
    '123461',
    'https://google.com/search?q=cats',
    'http://not a valid url',
    'abc http://invalid.url/'
];

// Регулярний вираз для пошуку URL
var urlRegex = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

// Фільтруємо масив, залишаючи тільки рядки, які містять посилання
var links = strings.filter(str => urlRegex.test(str));

console.log(links);

/* Task - 10  (Not required)

    Поміняйте місцями ім'я та прізвище

    var name = 'John Smith';

*/

var name = 'John Smith';
var re = /(John) (Smith)/;
var res = name.replace(re, "$2 $1");
console.log(res);


