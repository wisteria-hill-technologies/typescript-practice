// functions
// for functions arguments, always add types as you do not get type inference for the arguments.
const add = (a: number, b: number): number => {  // defining arguments and returning type here
  return a + b;
};

const subtract = (a: number, b: number): number => {  // defining arguments and returning type here
  return a - b;
};

function divide (a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const someFunc = (message: string): string => {
  if(!message) {
    throw new Error(message);
  }
  return message;
};

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
//   console.log(date);
//   console.log(weather);
// };

logWeather(forecast);