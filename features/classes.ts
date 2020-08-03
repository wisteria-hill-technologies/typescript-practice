// classes
// modifiers - public, private, protected

class Vehicle {
  // color: string;
  //
  // constructor(color?: string) {
  //   this.color = color;
  // }
  // // below is a short cut
  constructor(public color?: string) {
  }

  private startDrivingProcess(): void {
    console.log('chugga chugga');
    this.turbo();
  }

  public drive(): void {
    this.startDrivingProcess();
  }

  protected turbo(): void {
    console.log('zoom!');
  }
}


class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);  // super is the reference to constructor in parent class. pass its argument.
  }
  // private drive(): void {
  //   console.log('vroom!');
  // }
  public honk(): void {
    console.log('beep!')
    this.turbo();
  }
}

const vehicle = new Vehicle('green');
console.log(vehicle.color);
vehicle.drive();
// vehicle.turbo();

const myCar = new Car(4, 'purple');

myCar.drive();
myCar.honk();
console.log(myCar.wheels);
console.log(myCar.color);
// myCar.turbo();