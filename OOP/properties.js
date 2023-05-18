/* 
    Properties
    -> Nilai-nilai yang terkandung dalam sebuah instance class.

    Data Property
    -> Property yang langsung menampung sebuah nilai di dalam sebuah objek.

    Accessor Property
    -> Property yang di kontrol oleh sebuah getter dan setter. Nilai 
    yang didapatkan dari properti tersebut di kontrol oleh method GET dan
    cara mendapatkan nilai tersebut di kontrol oleh method SET
*/

class Car {
  constructor(brand, color, maxSpeed, chassisNumber) {
    // ini adalah properties Car (Data Property)
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
}

class Email {
  constructor(sender, receiver, subject, body) {
    // ini adalah properties Email (Data Property)
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }
}

// Membuat instance dari class
const car1 = new Car('BMW', 'Merah', 500, 'BMW-Sport1');
const car2 = new Car("Ferrari", "Biru", 600, "Ferrari-Sport2");

console.log(car1);
console.log(car2);

// contoh Accessor Property
