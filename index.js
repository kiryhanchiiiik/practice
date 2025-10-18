const secret = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guessNumber(num) {
  attempts++;

  if (num === secret) {
    return `Good job u a guessed that was a ${num} in ${attempts} tries.`;
  }

  if (num > secret) {
    console.log(secret);
    return "Too big";
  } else {
    console.log(secret);
    return "Too small";
  }
}

document.getElementById("guessBtn").addEventListener("click", () => {
  const input = document.getElementById("guessInput");
  const value = Number(input.value);
  const result = guessNumber(value);
  document.getElementById("result").textContent = result;
});
