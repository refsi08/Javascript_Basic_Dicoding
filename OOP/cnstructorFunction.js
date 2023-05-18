// Membuat constructor function sebelum sintaks ES6 (menggunakan keyword function)
function Car(brand, color, maxSpeed, chassisNumber) {
  this.brand = brand;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function () {
  console.log(`${this.brand} ${this.color} is driving`);
};

Car.prototype.reverse = function () {
  console.log(`${this.brand} ${this.color} is reversing`);
};

Car.prototype.turn = function () {
  console.log(`${this.brand} ${this.color} is turning`);
};

// Membuat objek mobil dengan constructor function Car
const car1 = new Car("Toyota", "Silver", 200, "to-1");
const car2 = new Car("Honda", "Black", 180, "ho-1");
const car3 = new Car("Suzuki", "Red", 220, "su-1");

console.log(car1);
console.log(car2);
console.log(car3);

car1.drive();
car2.drive();
car3.drive();

// Membuat constructor function Setelah sintaks ES6 (menggunakan keyword class)
class Cars {
  constructor(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }

  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn() {
    console.log(`${this.brand} ${this.color} is turning`);
  }
}

// Membuat objek mobil dengan constructor function Car
const carNew1 = new Cars("Toyota", "Silver", 200, "to-1");
const carNew2 = new Cars("Honda", "Black", 180, "ho-1");
const carNew3 = new Cars("Suzuki", "Red", 220, "su-1");

console.log(carNew1);
console.log(carNew2);
console.log(carNew3);

carNew1.drive();
carNew2.drive();
carNew3.drive();
