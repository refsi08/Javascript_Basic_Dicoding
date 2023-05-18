/*
    Object -> "Struktur data dari kumpulan nilai dalam
    bentuk key-value dan dapat disimpan pada sebuah
    variabel".
*/

// 1. Membuat Objek
const car = {
    brand : "Honda",
    model : "Sedan",
    color : "White",
    "jumlah roda" : 4, // apabilah key tidak berbentuk string maka harus di jadikan string dulu.
    2 : true
};

// 2. Mengubah nilai objek properti
car.brand = "BMW";
console.log(car);

// 3. Nilai properti dapat diakses dengan object.propertyName atau object[propertyName].
console.log(car); // mengakses seluruh data objek
console.log(car.color); // mengakses data objek berdasarkan key nya
console.log(car["jumlah roda"]); // mengakses data objek apabila key nya ada spasi.

// 4. Properti dan nilainya dapat dihapus dengan operator delete.
delete car.brand; // menghapus elemen brand pada array
delete car['jumlah roda']; // menghapus elemen yang property nya ada spasi
delete car['2'];
console.log(car);

