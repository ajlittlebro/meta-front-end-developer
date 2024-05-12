function addTwoNumbers(a, b) {
  try {
    if (typeof a !== "number") {
      throw new ReferenceError("The first argument must be a number");
    } else if (typeof b !== "number") {
      return ReferenceError("The second argument must be a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log("Error!", err);
  }
}

addTwoNumbers(5, "5");

console.log("It still works!");


