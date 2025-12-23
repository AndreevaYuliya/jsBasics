// # Task1

// Написати програму, яка виводить числа від 1 до 10, використовуючи цикли for і while. "

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let j = 1;

while (j <= 10) {
  console.log(j);
  j++;
}

// # Task2

// Створити масив, що складається з елементів різних типів (примітивів) (число, рядок, булева змінна) довжиною 10 елементів.
// Вивести їх тип за допомогою typeof у консоль.
// Виведення здійсніть за допомогою перебору масиву різними способами: методом forEach, циклами for, while і do while.

const mixedArray = [
  12,
  "Hello world!",
  "cat",
  true,
  4.7,
  "dog",
  false,
  0,
  true,
  false,
];

// for

for (let i = 0; i < mixedArray.length; i++) {
  console.log(typeof mixedArray[i]);
}

// while

let k = 0;

while (k < mixedArray.length) {
  console.log(typeof mixedArray[k]);
  k++;
}

// do while

let l = 0;

do {
  console.log(typeof mixedArray[l]);
  l++;
} while (l < mixedArray.length);

mixedArray.forEach((element) => {
  console.log(typeof element);
});

// # Task3

// Створити масив об'єктів (приклад об'єкта {name: ‘’, age: xx, pets: [cat, dog]})
// і використати метод filter, щоб вивести всіх, кому більше 20 років.

const people = [
  { name: "Yuliia", age: 25, pets: ["parrot", "cat"] },
  { name: "Kate", age: 15, pets: ["dog", "fish"] },
  { name: "Petro", age: 5, pets: ["parrot", "cat", "dog"] },
  { name: "Vika", age: 45, pets: ["cat"] },
];

const filteredArr = people.filter((item) => item.age > 20);

console.log(filteredArr);

// # Task4

// За допомогою map пройтися по масиву із завдання вище та додати кожному домашню тварину.
// Результат вивести у консоль.

const updatedArr = people.map((item) => {
  return {
    ...item,
    pets: [...item.pets, "hamster"],
  };
});

console.log(updatedArr);

// # Task5

// Створити масив із 10 елементів і заповнити його числом 42 за допомогою відповідного методу
// (завдання знайти його в документації, посилання в описі до лекції).
// За допомогою splice вставити на 5-ту позицію слово 'answer'.
// За допомогою find знайти це слово і вивести його у консоль.

const arr2 = new Array(10).fill(42);

arr2.splice(4, 0, "answer");

const foundElement = arr2.find((item) => item === "answer");

console.log(foundElement);

// # Task6

// Створіть об'єкт із кількома ключами на ваш розсуд.
// І наведіть приклади використання keys, hasOwn, values.

const movies = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  genre: "Sci-Fi",
};

const keys = Object.keys(movies);
console.log("Keys:", keys);

const hasDirector = movies.hasOwnProperty("director");
console.log("Has 'director' key:", hasDirector);

const values = Object.values(movies);
console.log("Values:", values);
