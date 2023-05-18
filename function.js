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

// contoh lain Function parameter
const user = {
  id: 24,
  displayName: "kren",
  fullName: "kylo Ren",
};

function introduce({ displayName, fullName }) {
  console.log(`${displayName} is ${fullName}`);
}

introduce(user);

myParamFunc("parameter 1", "parameter 2");

// Return Keyword
function square(number1, number2) {
  return number1 * number2;
}

console.log("Luas Segitiga : ", square(3, 4));

// Arrow function
const myArrowFunc = () => {
  return "Ini adalah arrow function saya";
};

console.log(myArrowFunc());

// 4. Default Parameter = memberikan nilai di awal pada parameter
function segitigaSamakaki(sisi1, sisi2 = 2) {
  return sisi1 * sisi2;
}

console.log(segitigaSamakaki(2)); // pada parameter 2 telah diberikan nilai default pada parameter nya

// 5. rest parameter
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));
