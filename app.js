var combine = function (input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
var combinedNums = combine(12, 293, "as-number");
console.log(combinedNums);
var combinedStringNums = combine("12", "293", "as-string");
console.log(combinedStringNums);
var combinedNames = combine("Dave", "Big John", "as-string");
console.log(combinedNames);
