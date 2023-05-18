/* Object -> Properti -> Method
- contoh :
*/

const car = {
  // properties
  brand: "Ford",
  color: "Red",
  maxSpeed: "200",
  chassisNumber: "F-1",

  // methods
  drive: () => {
    console.log("Driving");
  },

  reverse: () => {
    console.log("Reversing");
  },

  turn: () => {
    console.log("Turning");
  },
};

console.log(`Merk Mobil : `, car.brand);
console.log(`Warna Mobil : `, car.color);
console.log(`Kecepatan Mobil : `, car.maxSpeed);
console.log(`No Chasis Mobil : `, car.chassisNumber);
car.drive();
car.reverse();
car.turn();
