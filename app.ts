const add = (n1: number, n2: number) => {
  return n1 + n2;
};

// void return type
// a function with no explicit return
const printResult = (num: number): void => {
  console.log("Result is: " + num);
};

console.log(printResult(add(3, 5)));

// function type declaration, this function
// will take in two numbers and return a number
// it can therefore be reassigned to the add funtion
let combinedValues: (a: number, b: number) => number;

combinedValues = add;

console.log(combinedValues(2, 3));
