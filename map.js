/*
    Map -> "Sama seperti object,
    tetapi key bisa berupa apapun".
*/

// 1. membuat map
const stockOfFruits = new Map([
  ["Melon", "2"],
  ["Anggur", "3"],
]);

console.log(stockOfFruits); 

// 2. menggunakan method map.get(key) untuk mengakses nilai.
// akses nilai menggunakna keyword get
const stockOfMelon = stockOfFruits.get('Melon');
console.log(stockOfMelon);

// merubah nilai menggunakan keyword set
stockOfFruits.set('Melon', 5);
console.log(stockOfFruits.get('Melon'));