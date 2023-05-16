/*
    
Array -> "Struktur data dari kumpulan nilai yang memiliki index 
    dan dapat disimpan pada sebuah variabel"
*/
// 1. Membuat Array

const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
console.log("Sebelum ditambahkan Datanya : ", days);

// 2. Elemen di array di akses atau diubah melalui key (index).

console.log("Hari ini adalah : ", days[0]); // Menampilkan data array berdasarkan index

// Mengubah data array berdasarkan index.
days[0] = "Ahad";
console.log("Berubah hari menjadi : ", days[0]);

// Menambahkan data array
days.push("Sabtu");
// Menghapus data array
days.pop();

console.log("Sesudah ditambahkan Datanya : ", days);

// 3. Element boleh memiliki tipe data yang berbeda.
const myArray = ["1", "Dev Choacing", true];

// 4. Tipe data array adalah object
console.log(typeof myArray); // tidak bisa mengecek type data array
console.log(Array.isArray(myArray)); // cara untuk mengecek type data array

// 5. looping sepanjang elemen menggunakan for of, foreach, dan lainnya.
// Cara 1 (Menggunakan for of)
for (const day of days) {
    console.log(day);
}

// Cara 2 (Menggunakan foreach)
days.forEach(day => {
    console.log(day);
});

// 6. Memiliki properto length yang menyimpan jumlah dari elemen.
console.log(days.length);
