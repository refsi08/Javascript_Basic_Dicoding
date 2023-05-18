/*
    Member Visibility
    -> Cara dalam menetapkan hak akses private pada properti dan 
    method objeck, yakni dengan menambahkan tanda # di awal penamaan
    properti atau method.

    Khusus untuk properti yang sifatnya private, Anda harus 
    mendeklarasikan propertinya di enclosing class seperti dibawah ini.
*/

class Car {
  #chassisNumber = null; //enclosing class

  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.#chassisNumber = this.#generateChassisNumber();
  }

  get chassisNumber() {
    return this.#chassisNumber;
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

  #generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}
