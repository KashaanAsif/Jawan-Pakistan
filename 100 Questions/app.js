// //1
// var a = "var";
// let b = "let";
// const c = "const";
// {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// //2
// function func() {
//     var a = "var"
//     let b = "let"
//     const c = "const"
// }
// console.log(a);
// console.log(b);
// console.log(c);

// //3
// if (true) {
//     let a ="var"
//     let b ="let"
//     const c ="const"
// }
// console.log(a);
// console.log(b);
// console.log(c);

// //4
// console.log(a);
// var a ="var"

// //5
// console.log(a);
// console.log(b);
// let a = "let"
// const b ="const"

// //6
// var a;
// var a;

////7
// let b;
// let b;

// const c;
// const c;
////Var can be redeclared while let and const can't be redeclared

// //8
// var a = "var"
// a ="redeclared Var"

// let b = "let"
// b = "redeclared Let"

// const c = "const"
// c = "redeclared Const"
// //var and let can be reassigned while const cant be reassigned

// //9
// {
//     let a;
//     console.log(a);
//     a="let"
// }
// //undefined
// {
//     const b;
//     console.log(b);
//     b="const"
// }
// //Uncaught SyntaxError: Missing initializer in const declaration because const needs to be initialized with its declaration

// //10
// var global="Gloabally accessable var"
// {
//     console.log(global);
//     let local = "locally accessable var"
//     console.log(local);
// }
// const pi = 3.142
// console.log(pi);

// //11
// let firstName = "Kashaan"
// let lastName = "Asif"
// console.log(`My name is ${firstName} ${lastName} `);

// //12
// let address = `My name is Kashaan Asif and i live on
// Jamshed Road, Karachi, Pakistan`
// console.log(address);

// //13
// let a = 47
// let b = 53
// console.log(`The sum of these two variables is: ${a+b}`);

// //14
// function multiplication(a, b) {
//     return a*b
// }
// console.log(`The product of numbers a and b: ${multiplication(10,10)} `);

// //15
// let fullName = "Kashaan Asif";
// let age = 22;

// function tagFunc(a,b){
//     console.log(`Template string: ${a}`);
//     console.log(`Second template string: ${b}`);
// }
// tagFunc(`Hello my name is ${fullName}`, `I am ${age} years old`);

// //16
// let fullName= "Kashaan Asif"
// function upperCase(a) {
//     console.log(a.toUpperCase());
// };
// upperCase(`My name is ${fullName}`);

// //17
// const getDate = new Date();
// let getHour = getDate.getHours();
// function time(getHour) {
//   if (getHour >= 0 && getHour <= 12) {
//     console.log("Its Morning");
//   } else if (getHour > 12 && getHour <= 24) {
//     console.log("Its Afternoon");
//   } else {
//     console.log("Invalid Time");
//   }
// }
// time(getHour);

// //18
// let items = ["Bread", "Butter", "Ketchup", "Cheese", "Tomatoes", "Lentils"];
// function addItems() {
//   let itemsList = document.getElementById("shoppingList");
//   if (itemsList) {
//     itemsList.innerHTML = "";
//     for (let i = 0; i < items.length; i++) {
//       itemsList.innerHTML += `<li>${items[i]}</li>`;
//     }
//   } else {
//     console.error("Element with ID 'shoppingList' not found.");
//   }
// }

// //19
// let str = "Muhammad `Kashaan` Asif"
// console.log(str);


// //21
// let age = +prompt("Enter your age")
// let canVote = age >= 18 ? "You are eligible for voting" : age < 18? "You are not eligible for voting": "Invalid Input";
// console.log(canVote);

// //22
// let inputNumber = +prompt("Enter any number");
// let evenOrOdd = inputNumber % 2 == 0 ? "Number is even" : inputNumber % 2 >= 1 ? "Number is odd" : "Invalid number";
// console.log(evenOrOdd);

// //22
// let score = +prompt("Enter your score for grading");
// let grade = score >= 90 ? "A"
//     : score >= 80 && score < 90 ? "B"
//     : score >= 70 && score < 80 ? "C"
//     : score >= 60 && score < 70 ? "D"
//     : score >= 50 && score < 60 ? "E"
//     : score >= 40 && score < 50 ? "F"
//     : "Invalid input";
// console.log(grade);

// //23
// let isLoggedIn = true;
// let statusMessage =
//   isLoggedIn == true
//     ? "Welcome Back"
//     : isLoggedIn == false
//     ? "Please Log in"
//     : "Invalid value";
// console.log(statusMessage);

// //24
// let isMember = true;
// let purchaseAmount = 500;
// let totalAmount = 0;
// let discount = isMember && purchaseAmount > 100 ? `Your total amount is ${purchaseAmount/100*90} and discount offered is ${purchaseAmount-purchaseAmount/100*90}rs`
//     : "You are not eligible for discount"
// ;
// console.log(discount);

// //25
// function maxValue(a,b){
//     let maxValue = 0;
//     if(a>b){
//         maxValue = a
//     }
//     else{
//         maxValue = b
//     }
//     return maxValue;
// }
// let maxval = maxValue(100,200);
// console.log(`Max value is: ${maxval}`);

// //26
// function greet(name){
//     if(name == ""){
//         console.log("Hello guest!");
//     }
//     else{
//         console.log(`Hello ${name}!`);
//     }
// }
// greet("Kashaan")

// //27
// let nums = [10,12,15,26,38,59,67];
// let newArr = nums.map(item => {
//     return item % 2 == 0 ?
//     item * 2
//     : item * 3
// });
// console.log(newArr)

// //28
// let strArr = ["Kashaan", "Asif", "abc", "22", "JWPak", "D"]
// let filteredArray = strArr.filter(item => {
//     return item.length > 3
// })
// console.log(filteredArray);

// // 29
// let originalArray = [1, 2, 3, 4, 5];
// let copiedArray = [...originalArray];
// console.log('Original Array:', originalArray);
// console.log('Copied Array:', copiedArray);

// //30
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// const mergedArray = [...array1, ...array2];
// console.log('Merged Array:', mergedArray);

// //31
// const numbers = [2, 3, 4, 5];
// const updatedArray = [1, ...numbers, 6];
// console.log('Updated Array:', updatedArray);

// //32
// const originalObject = { name: 'Kashaan', age: 22, city: 'Karachi' };
// const copiedObject = { ...originalObject };
// console.log('Original Object:', originalObject);
// console.log('Copied Object:', copiedObject);

// //33
// const object1 = { name: 'Kashaan', age: 22, city: 'Karachi' };
// const object2 = { age: 30, profession: 'Software Engineer', city: 'Lahore' };
// const mergedObject = { ...object1, ...object2 };
// console.log('Merged Object:', mergedObject);

// //34
// const user = { name: 'Kashaan', age: 22, email: 'kashaanasif162@gmail.com' };
// const updatedUser = { ...user, email: 'newemail@example.com', address: 'Jamshed road Karachi' };
// console.log('Updated User:', updatedUser);

// //35
// function sum(a,b,c) {
//     return a+b+c;
// }
// let arr=[1,2,3];
// let res= sum(...arr);
// console.log(res);

// //36
// function combineArrays(...arrays){
//     return [].concat(...arrays);
// }
// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let combinedArrays=combineArrays(arr1,arr2)
// console.log(combinedArrays);

// //37
// function multiply(a, ...rest) {
//     const result = rest.map(e => a * e);
//     return result;
//   }
// const output = multiply(3, 1, 2, 3, 4);
// console.log(output);

// // 38
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const copiedArray = [...nestedArray];
// copiedArray[0][0] = 50;
// console.log("Original Array:", nestedArray);
// console.log("Copied Array:", copiedArray);

// //39
// function sum(...rest){
//     return rest.reduce((total,num)=> total+num,0);
// }
// console.log(sum(1,2,3));
// console.log(sum(4,5,6));
// console.log(sum(7,8,9));

// //40
// function average(...rest){
//     let sum= rest.reduce((total, num)=>total+num,0);
//     return sum/rest.length;
// }
// console.log(average(1,2,3));
// console.log(average(10,20,30));
// console.log(average(100,200,300));

// //41
// let arr = [1, 2, 3, 4, 5, 6];
// let [firstElem, ...rest] = arr;
// console.log(firstElem);
// console.log(rest);

// //42
// let colors =["black","blue","red","green","orange"]
// let [,,...remainingColors]=colors;
// console.log(remainingColors);

// //43
// const person = {
//     name: 'Kashaan Asif',
//     age: 22,
//     email: 'kashaanasif162@gmail.com',
//     address: {
//         street: 'Jamshed Road',
//         city: 'Karachi',
//     }
// };
// const { name, email, ...rest } = person;

// console.log(name);
// console.log(email);
// console.log(rest);

// //44
// const student = {
//     id: 163,
//     name: 'Kashaan Asif',
//     grades: [85, 90, 88],
//     info: {
//         age: 22,
//         major: 'Software Engineer'
//     }
// };
// const { id, name, info: { major }, ...rest } = student;
// console.log(id);
// console.log(name);
// console.log(major);
// console.log(rest);

// //45
// const filterEven = (...numbers) => {
//     return numbers.filter(e => e % 2 === 0);
// };
// console.log(filterEven(1, 2, 3, 4, 5, 6));
// console.log(filterEven(100, 154, 202, 258, 301));

// //46
// const combineAndSort = (...arrays) => {
//   const combinedArray = [].concat(...arrays);
//   return combinedArray.sort((a, b) => a - b);
// };
// console.log(combineAndSort([3, 1, 4], [2, 5], [8, 7, 6]));
// console.log(combineAndSort([10, 30], [20, 40], [15, 25]));
// console.log(combineAndSort([9, 1], [2], [8, 5, 3]));

// //47
// const fruits = ["apple", "banana", "cherry"];
// const [firstFruit, secondFruit, thirdFruit] = fruits;
// console.log(firstFruit);
// console.log(secondFruit);
// console.log(thirdFruit);

// //48
// const colors = ["red", "green", "blue", "yellow"];
// const [primaryColor, , tertiaryColor] = colors;
// console.log(primaryColor);
// console.log(tertiaryColor);

// //49
// const numbers = [1, 2, 3, 4, 5];
// const [firstNumber, ...remainingNumbers] = numbers;
// console.log(firstNumber);
// console.log(remainingNumbers);

// //50
// let person = {
//     name: "Kashaan Asif",
//     age:22,
//     city: "Karachi"
// }
// let {name,age,city}=person
// console.log(name);
// console.log(age);
// console.log(city);

// //51
// const car = { make: 'AUDI', model: 'Etron', year: 2020 };
// const { make: carMake, model: carModel, year: carYear } = car;
// console.log(carMake);
// console.log(carModel);
// console.log(carYear);

// //52
// const settings = { theme: 'dark' };
// const { theme, language = 'English' } = settings;
// console.log(theme);
// console.log(language);

// //53
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const [[a, ], [b, ], [c, ]] = nestedArray;
// console.log(a);
// console.log(b);
// console.log(c);

// //54
// const profile = {
//     username: 'Kashaan Asif',
//     details: {
//       email: 'kashaanasif162@gmail.com',
//       address: 'Jamshed road'
//     }
//   };

//   const { username, details: { email, address } } = profile;

//   console.log(username);
//   console.log(email);
//   console.log(address);

// //55
// const data = {
//     id: 1,
//     info: [{ name: 'Alice' }, { age: 25 }]
//   };
//   const { id, info: [{ name }, { age }] } = data;
//   console.log(id);
//   console.log(name);
//   console.log(age);

// //56
// function printCoordinates([x, y]) {
//   console.log(x);
//   console.log(y);
// }

// printCoordinates([10, 20]);
// printCoordinates([30, 40]);

// //57
// function displayUser({ name, age }) {
//     console.log(name);
//     console.log(age);
//   }

//   displayUser({ name: 'Alice', age: 25 });
//   displayUser({ name: 'Bob', age: 30 });

// //58
// const book = {
//     title: 'Rich Dad Poor Dad',
//     author: 'Robert Kiyosaki',
//     year: 1997
//};
//const propertyNames = Object.keys(book);
//console.log(propertyNames);

// //59
// const student = {
//   name: "Kashaan",
//   age: 22,
//   grade: "A",
//   school: "SSUET",
// };
// const property = Object.keys(student);
// const propertyCount = Object.keys(student).length;
// console.log(property);
// console.log(propertyCount);

// //60
// const product = {
//     name: 'TV',
//     price: 120000,
//     category: 'Electronics'
// };
// const keys = Object.keys(product);
// keys.forEach(key => {
//     console.log(`${key}: ${product[key]}`);
// });

// //61
// const movie = {
//     title: 'Inception',
//     director: 'Christopher Nolan',
//     year: 2010,
//     genre: 'Science Fiction'
// };
// const values = Object.values(movie);
// console.log(values);

// //62
// const scores = {
//   math: 100,
//   science: 92,
//   english: 88,
// };
// const values = Object.values(scores);
// const total = values.reduce((acc, curr) => acc + curr, 0);
// console.log(total);

// //63
// const user = {
//   username: "KashaanAsif",
//   email: "kashaanasif162@gmail.com",
//   location: "Karachi, Pakistan",
// };
// const values = Object.values(user);
// values.forEach((value) => {
//   console.log(value);
// });

// //64
// const car = {
// make: "Audi",
// model: "Etron",
// year: 2020,
// };
// const entries = Object.entries(car);
// console.log(entries);

// //65
// const person = {
//   firstName: "Kashaan",
//   lastName: "Asif",
//   age: 22,
// };
// const entries = Object.entries(person);
// console.log(entries);

// //66
// const settings = {
//   theme: "dark",
//   notifications: true,
//   privacy: "high",
// };
// const entries = Object.entries(settings);
// for (const [key, value] of entries) {
//   console.log(`${key}: ${value}`);
// }

// //67
// const inventory = {
//   apple: 15,
//   banana: 5,
//   orange: 12,
//   kiwi: 20,
// };
// const a = Object.keys(inventory).filter((key) => inventory[key] > 10);
// console.log(a);

// //68
// const temperature = {
//   morning: 20,
//   afternoon: 25,
//   evening: 15,
// };
// let objEntries = Object.entries(temperature).map((time, celcius) => {
//   let fahrenheit = (celcius * 9) / 5 + 32;
//   return [time, fahrenheit];
// });
// let temperatureInFahrenheit = Object.fromEntries(objEntries);
// console.log(temperatureInFahrenheit);

// //69
// const roles = {
//   admin: "Kashaan",
//   editor: "Owais",
//   viewer: "Kabeer",
// };

// let objectEnt = Object.entries(roles).map(([key, value]) => {
//   return [value, key];
// });

// let roleSwap = Object.fromEntries(objectEnt);
// console.log(roleSwap);

// //70
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filterAndMap = (array, filterFn, mapFn) => {
//   return array.filter(filterFn).map(mapFn);
// };
// const result = filterAndMap(
//   numbers,
//   (num) => num % 2 !== 0,
//   (num) => num * num
// );
// console.log(result);

// //71
// const words = ["apple", "banana", "cherry", "date"];
// const sortAndReduce = (array, sortFn, reduceFn) => {
//   return array.sort(sortFn).reduce(reduceFn, '');
// };
// const result = sortAndReduce(words,(a, b) => a.sort(),(acc, word) => acc + word);
// console.log(result);

// //72
// function greet(name, callback) {
//   const message = `Hello, ${name}!`;
//   callback(message);
// }
// function printGreeting(message) {
//   console.log(message);
// }
// greet("Kashaan", printGreeting);

// //73
// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { message: "Data fetched from server" };
//     callback(data);
//   }, 2000);
// }
// function displayData(data) {
//   console.log(data);
// }
// fetchData(displayData);

// //74
// const add = (a, b) => {
//   return a + b;
// };
// let res =add(3, 5)
// console.log(res);

// //75
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers);

////76
// function outer() {
//   let x = 10;

//   function inner() {
//     console.log(x);
//   }
//   inner();
// }
// outer();

//77
// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// const counter1 = createCounter();
// const counter2 = createCounter();
// counter1();
// counter1();
// counter2();
// counter2();

// //78
// function greet(name, message = "Hello") {
//   console.log(`${message}, ${name}!`);
// }
// greet("Kashaan", "Good Morning");
// greet("Owais");

// //79
// function calculateArea(width = 10, height = 5) {
//   return width * height;
// }
// console.log(calculateArea(20, 15));
// console.log(calculateArea());

// //80
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(number => number * number);
// console.log(squaredNumbers);


// //81
// const words = ["apple", "banana", "cherry"];
// const uppercasedWords = words.map(word => word.toUpperCase());
// console.log(uppercasedWords);

