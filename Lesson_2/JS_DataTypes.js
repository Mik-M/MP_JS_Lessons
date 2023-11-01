//Вам необхідно вказати, яким буде результат операції та описати крок за кроком у вигляді коментарів, як відбувається перетворення в кожному прикладі:

console.log('number' + 3 + 3)  // number33 - це конкатинація, так як перший доданок - це string
console.log(null + 3) // 3 - null прирівняно до 0
console.log(5 && "qwerty") // qwerty - тому що це останнє true
console.log(+'40' + +'2' + "hillel") // 42hillel - + перед string перетворив 40 і 2 в строку і далі склеів
console.log('10' - 5 === 6) // false - 5 не рівно 6
console.log(true + false) // 1, томущо 1+0=1
console.log('4px' - 3) // NaN - він не розуміє що таке 4px
console.log('4' - 3) // 1, томущо 4-3=1
console.log('6' + 3 ** 0) // 1, томущо конкатинація 6 і 1
console.log(12 / '6') // 2, томущо 12:6=2
console.log('10' + (5 === 6)) // 10false - конкатинація 10 і false, томущо 5!=6
console.log(null == '') // false, томущо null!=string
console.log(3 ** (9 / 3)) // 27, томущо 3 в 3 степені
console.log(!!'false' == !!'true') // true, томущо falsy string = falsy string
console.log(0 || '0' && 1) // 1, томущо 1 останнє true
console.log((+null == false) < 1) // false, томущо +null == false - це буде 0==false (це true), a true (1) не менше 1
console.log(false && true || true) // true, томущо true - це останнє true
console.log(false && (false || true)) // false, томущо false and true = false (not all operands true)
console.log((+null == false) < 1 ** 5) // false, томущо true не менше 1