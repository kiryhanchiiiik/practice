// const secret = Math.floor(Math.random() * 100) + 1;
// let attempts = 0;

// function guessNumber(num) {
//   attempts++;

//   if (num === secret) {
//     return `Good job u a guessed that was a ${num} in ${attempts} tries.`;
//   }

//   if (num > secret) {
//     console.log(secret);
//     return "Too big";
//   } else {
//     console.log(secret);
//     return "Too small";
//   }
// }

// document.getElementById("guessBtn").addEventListener("click", () => {
//   const input = document.getElementById("guessInput");
//   const value = Number(input.value);
//   const result = guessNumber(value);
//   document.getElementById("result").textContent = result;
// });

// const nums = [3, 7, 2, 10, 5];
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 19 },
//   { name: "Clara", age: 32 },
// ];

// nums.forEach((n) => console.log(n * 2)); // return nothing

// nums.map((n) => console.log(n * 2)); // new array with double

// const adults = users.filter((adult) => adult.age >= 21); // return filtered array

// const found = users.find((u) => u.name === "Bob"); // return first element

// const sum = nums.reduce((acc, n) => acc + n, 0); // 27

const nums = [3, 8, 11, 4, 7, 2];

const evenNumbers = filter((n) => n % 2 === 0).map((n) => n ** 2);
