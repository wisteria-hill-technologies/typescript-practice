const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};

// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
// };
//
// printVehicle(oldCivic);

interface Reportable {
  summary(): string;
}

const newCivic = {
  name: 'civic',
  year: 2020,
  broken: false,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `The drink contains ${this.sugar} grams of suger.`;
  }
}

// as long as the above objects contain interface's key-values, ok to have additional key value pairs, when passing arguments to the function.
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken: ${vehicle.broken}`);
};

printSummary(newCivic);
printSummary(drink);