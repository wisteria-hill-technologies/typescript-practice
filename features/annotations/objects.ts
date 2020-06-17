const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// annotation if necessary when destructuring
// but for the below case, annotation is not necessary as it is automatically inferred.
const { age, name: username }: { age: number, name: string } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number, lng: number }} = profile;

