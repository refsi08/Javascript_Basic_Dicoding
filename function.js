// 1. Deklarasi regular function
function myFunc() {
  console.log("Ini adalah function saya");
}

// 2. Menjalankan function
// - Secara terprogram
myFunc();

// - Event terjadi
document.addEventListener("click", function () {});

// terpanggil otomatis
(function () {
  console.log("Function ini terpanggil otomatis");
})();

// 3. Parameter function
function myParamFunc(param1, param2) {
  console.log("param 1 adalah : ", param1);
  console.log("param 2 adalah : ", param2);
}

myParamFunc("parameter 1", "parameter 2");

// Return Keyword
function square(number1, number2) {
  return number1 * number2;
}

console.log("Luas Segitiga : ", square(3, 4));

// Arrow function
const myArrowFunc = () => {
    return 'Ini adalah arrow function saya';
};

console.log(myArrowFunc());