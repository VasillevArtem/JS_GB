// 1. Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = Number(prompt("Введите первое число"));
let num2 = Number(prompt("Введите второе число"));

if (num1 <= 1) {
  console.log("Проверка по первому числу пройдена");
} else {
  console.log("Проверка по первому числу не пройдена");
}

if (num2 >= 3) {
  console.log("Проверка по второму числу пройдена");
} else {
  console.log("Проверка по второму числу не пройдена");
}


// 2. Перепишите код с использованием тернарного оператора
// let test = true;
// if (test === true) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

let test = true;
test === true ? console.log("+++") : console.log("---");


// 3. В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = 15;
if (day > 0 && day <= 10) {
  console.log(`Первая декада`);
} else if (day > 10 && day <= 20) {
  console.log(`Вторая декада`);
} else if (day > 20 && day <= 31) {
  console.log(`Третья декада`);
} else {
  console.log(`Введено некорректное число`);
}