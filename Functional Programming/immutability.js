/*
Immutability
-> objek tidak boleh diubah setelah objek tersebut dibuat. kontras dengan mutable yang artinya objek boleh diubah
seteleh objek tersebut dibuat.
*/

const user = {
  firstName: "Harry",
  lastName: "Protter", // ups, typo1
};

const createUserWithNewLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName };
};

const newUser = createUserWithNewLastName("Potter", user);

console.log(newUser);
