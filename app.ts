type Combineable = number | string;
type ConversionDiscriptor = "as-number" | "as-string";

const combine = (
  input1: Combineable,
  input2: Combineable,
  resultConversion: ConversionDiscriptor
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combinedNums = combine(12, 293, "as-number");
console.log(combinedNums);

const combinedStringNums = combine("12", "293", "as-string");
console.log(combinedStringNums);

const combinedNames = combine("Dave", "Big John", "as-string");
console.log(combinedNames);
