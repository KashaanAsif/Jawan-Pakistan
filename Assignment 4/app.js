const arrays = [
  42,
  true,
  "Hello, World!",
  { name: "John", age: 24, isStudent: false },
  false,
  3.14,
  "JavaScript is fun!",
];

let newarr = arrays.map((e, i) => {
  return e.toString();
});
console.log(newarr);

let newarr2 = arrays.filter((e, i) => {
  return typeof e === "number";
});
console.log(newarr2);

let newarr3 = arrays.forEach((e, i) => {
  console.log(` Type of ${e} is ${typeof e} `);
});

let newarr4 = arrays.reduce((sum, element) => {
  if (typeof element === "number") {
    return sum + element;
  }
  return sum;
}, 0);
console.log(newarr4);

let newarr5 = arrays.find((e, i) => {
  if (typeof e === "boolean") {
    return e;
  }
});
console.log(newarr5);

let newarr6 = arrays.findIndex((e, i) => {
  if (typeof e === "object" || e !== null) {
    return i;
  }
});
console.log(newarr6);

let newarr7 = arrays.some((e, i) => {
  return typeof e === "number";
});
console.log(newarr7);

let newarr8 = arrays.every((e, i) => {
  return typeof e === "string";
});
console.log(newarr8);
