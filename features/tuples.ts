// object version of drink
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// tuple version of drink: specify specific order for the tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];
// pepsi[0] = 7 will not work.

// also, can create type to apply.
type Drink = [string, boolean, number];
const coke: Drink = ['brown', true, 50];
const sprite: Drink = ['clear', true, 40];