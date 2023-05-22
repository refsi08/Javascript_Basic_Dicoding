// imperatif code.
const names = ["Harry", "Ron", "Jeff", "Thomas"];

const newNameWithExcMark = [];

for (let index = 0; index < names.length; index++) {
  newNameWithExcMark.push(`${names[index]} !`);
}

console.log(newNameWithExcMark);

// deklaratif code.
const names2 = ["Refsi", "Maulana", "Siregar", "Thomas"];
const newNames = names2.map((name) => `${name}`);

console.log(newNames);
