/*
    Pure Function
    -> pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada
    diluar fungsi atau parameternya.
*/

// code impure function
let pi = 3.14;

const hitungLuasLingkaran = (jariJari) => {
  return pi * (jariJari * jariJari);
};

console.log(hitungLuasLingkaran(4));

pi = 5; // nilai variabel tidak sengaja berubah
console.log(hitungLuasLingkaran(4));

/* Note:
 -> Fungsi tersebut tidak bisa dikatakan pure function karena ia membutuhkan nilai yang berada di 
 luar dari fungsinya, yakni nilai PI. Bila nilai PI berubah, maka penggunaan fungsi menghasilkan 
 nilai yang berbeda walaupun diberikan nilai parameter yang sama.
*/

// code pure function
const hitungLuasLingkaran2 = (jariJari) => {
  return 3.14 * (jariJari * jariJari);
};
console.log(hitungLuasLingkaran2(4));

/*Note :
-> Dengan memindahkan nilai PI secara konstan di dalam fungsi, maka dapat dipastikan nilai tersebut 
tidak akan berubah atau tak sengaja diubah. Dengan begitu fungsi selalu menghasilkan nilai yang sama 
bila nilai parameter yang diberikan sama.

Agar lebih mudah dalam mengetahui apakah fungsi yang Anda buat sudah pure atau belum, pastikan 3 
konsep ini ada pada fungsi yang Anda buat: 

1. Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
2. Hanya bergantung pada argumen yang diberikan.
3. Tidak menimbulkan efek samping.
*/