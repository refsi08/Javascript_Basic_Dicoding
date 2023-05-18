/*
    Catatan penting yang perlu Anda ketahui mengenai getter setter adalah:

    1. method getter harus mengembalikan sebuah nilai dan nilai tersebut akan menjadi nilai properti;
    2. method setter harus menerima satu argumen yang nilainya diambil dari operand ke dua ketika melakukan assignment operator.
*/

// Getter
class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand} - ${Math.floor(Math.random() * 1000)}`;
  }

  // Method Getter chassisNumber() -> mengembalikan nilai
  get chassisNumber() {
    return this._chassisNumber;
  }

  // Method Setter -> Mendapatkan nilai property
  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }
}
// instances class Car
const myCar = new Car("BMW", "Silver", 200);
const myCar2 = new Car("BMW", "Silver", 200);
console.log(myCar);
console.log(myCar2);
myCar.chassisNumber = 'BMW-Sp1';
console.log(myCar.chassisNumber);
