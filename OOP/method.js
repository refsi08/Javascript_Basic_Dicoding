/*
Method juga biasa dibuat ketika kita perlu mengekstraksi sebuah kode agar 
lebih mudah untuk dibaca dan method tersebut hanya digunakan untuk kebutuhan i
nternal saja.
*/

// Method
class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = this._generateChassisNumber(); // memanggil method agar lebih ringkas
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }

  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }

  // membuat method sendiri untuk nilai properti chassis number
  _generateChassisNumber() {
    return `${this.brand} - ${Math.floor(Math.random() * 1000)}`;
  }
}

const car1 = new Car("BMW", "Red", 300);
console.log(car1);
car1._chassisNumber = "BMW-01";
console.log(car1._chassisNumber);

