//Завдання 1. Створіть функцію для обчислення факторіалу числа. Створіть функцію calculateFactorial(n), яка приймає аргумент n (ціле число) і виводить в консоль факторіал цього числа. Використовуйте цикл для обчислення факторіалу.


function calculateFactorial(n) {
    if (n < 0) return undefined
    let result = 1
    for (let i = 2; i <= n; i++) {
        result *= i
    }
    return result

}
let input = prompt("Enter number  for faсtorial:")
let number = Number(input)

if (number >= 0 && Number.isInteger(number)) {
    let result = calculateFactorial(number)
    console.log("Factorial  number " + number + " is equel to " + result)
} else {
    console.log("Еnter correct number (for example:4)")
}

calculateFactorial()

//Завдання 2 Підрахунок кількості слів у рядку.Створіть функцію countSymb(sym), яка приймає рядок через prompt і виводить в консоль кількість букв у цьому рядку.Використовуйте умови та цикли для підрахунку букв.

function countSymb(sym) {
    let  count = 0
    for (let i = 0; i < sym.length; i++) {
        if ((sym[i] >= 'a' && sym[i] <= 'z') || (sym[i] >= 'A' && sym[i] <= 'Z')) {
            count++
        }
    }
    console.log(" Number of letters in  line:", count)
}

const usInput = prompt("Enter line:")
countSymb(usInput)

//Завдання 3 Створіть функцію для визначення простого числа (ціле число це число без коми: 1, 44, 100 ітд).Створіть функцію isPrime(number), яка приймає аргумент number і повертає (return) true,якщо число є простим, і false, якщо не є. 

function isPrime(num) {
    if (!Number.isInteger(num) || num <= 1) {
        return false
    }
    
    for  (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

const  userInput = prompt("Enter number :")
const num = parseInt(userInput)

if (isPrime(num)) {
    console.log(num + " is prime number")
} else {
     console.log(num + " is not prime number ")
}

//завдання4 Запит на пароль.Створіть функцію passwordPrompt(), яка приймає пароль і повторення паролю через prompt().Після цього викликайте цю функцію, якщо паролі співпадають має вивестись (console): Успіх, а в іншому випадку: Невдача.

function passwordPrompt() {

    const password = prompt("Enter your password:")
    const againPass = prompt("Enter again your password:")

    if (password === againPass) {
        console.log(" It is good luck")
    } else {
        console.log("It is bad luck")
    }
}

passwordPrompt()

//завдання5 Факторіал чисел в діапазоні.Створіть функцію factorialRange(num1, num2, num3),яка приймає 2 числа.Функція має обчислити факторіали всіх чисел і повернути (return) результат у вигляді об'єкта {num1: num2, num3: } і вивести

function factorialRange(num1, num2) {
    const result = {}

    for (let i = num1; i <= num2; i++) {
        result[i] = factorial(i)
    }

    return result
}
function factorial(n) {
    if (n === 0 || n === 1) return 1
    let fact = 1
    for (let i = 2; i <= n; i++) {
        fact *= i
    }
    return fact
}

const num1 = prompt(" Enter the starting number of the range:")
const num2 = prompt("Enter the ending number of the range:")

const result = factorialRange(num1,num2)
console.log( result)

//завдання6 Калькурятор.Створіть функцію calc(num1, num2, action), яка приймає 2 числа з promp та знак по якому потірбно порахувати приклад. Мусять бути наступні дії: (+, -, /, *)Результат повернути (return) і вивести
function calc(numm1, numm2, action) {
    let resultt

    if (action === '+') {
        resultt = numm1 + numm2
    } else if (action === '-') {
        resultt = numm1 - numm2
    } else if (action === '*') {
        resultt = numm1 * numm2
    } else if (action === '/') {
        if (numm2 === 0) {
            return "Error! Division by zero is not possible"
        }
        resultt = numm1 / numm2
    } else {
        return "it is not popular operation!"
    }

    return resultt
}

const numm1 = parseFloat(prompt("]Enter firtst number:"))
const numm2 = parseFloat(prompt("Enter second number :"))
const action = prompt("Введіть операцію (+, -, *, / ):")


const resultt = calc(numm1, numm2, action)
console.log("Result is :", resultt)
