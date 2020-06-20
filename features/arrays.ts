// type is inferred below.
const carMakers = ['ford', 'Toyota', 'Tesla'];

// in below case, need to specify type (unless you want any type)
let myFruits: string[] = [];
myFruits = ['apple', 'banana', 'grape'];

const carModels = [ // type will be automatically inferred as string[][] below
  ['focus'],['corolla'], ['Model X']
];

// Arrays
// if you instantiate an empty array without specifying type, it will be default to 'any[]'
const myArr = [];

// type inference
const importantDates = [ new Date(), '2020-06-25'];

// specified types below
let scheduledDates: (Date | string)[] = [new Date()];