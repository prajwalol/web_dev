function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return `${number} is an even number.`;
  } else {
    return `${number} is an odd number.`;
  }
}

function multiplicationTable(number) {
  let result = [];

  for (let i = 1; i <= 10; i++) {
    result.push(`${number} x ${i} = ${number * i}`);
  }

  return result.join("\n");
}

function fizzBuzzChallenge() {
  let result = [];

  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result.join("\n");
}

function printSquarePattern(n) {
  let result = [];

  for (let row = 1; row <= n; row++) {
    result.push("*".repeat(n));
  }

  return result.join("\n");
}

function printRightTriangle(n) {
  let result = [];

  for (let row = 1; row <= n; row++) {
    result.push("*".repeat(row));
  }

  return result.join("\n");
}

if (typeof document !== "undefined") {
  const output = document.getElementById("output");

  if (output) {
    output.textContent = [
      checkEvenOrOdd(7),
      checkEvenOrOdd(8),
      "",
      multiplicationTable(5),
      "",
      fizzBuzzChallenge(),
      "",
      printSquarePattern(5),
      "",
      printRightTriangle(5),
    ].join("\n");
  }
}

if (typeof module !== "undefined") {
  module.exports = {
    checkEvenOrOdd,
    multiplicationTable,
    fizzBuzzChallenge,
    printSquarePattern,
    printRightTriangle,
  };
}
