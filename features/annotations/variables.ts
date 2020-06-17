let apples: number = 5;

apples = 12;

let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

const now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2.5,3];
let myBooleans: boolean[] = [ false, true, true ];

// class
class Car {

}

let car: Car = new Car();

// Object literal
let point: { x: number, y: number, greeting: string }= {
  x: 10,
  y: 20,
  greeting: "Hello"
}

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number, y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initialise it later
let myBoolean: boolean;
myBoolean = true;

// 3) Variables whose type cannot be inferred correctly.
let numbers = [ -10, -1, 12 ];
let numberAboveZero: boolean | number = false;  // type can be boolean or number

for (let i = 0; i < numbers.length; i++) {
  numberAboveZero = numbers[i];
}
