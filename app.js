var add = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    console.log("Result is: " + num);
};
console.log(printResult(add(3, 5)));
var combinedValues;
combinedValues = add;
console.log(combinedValues(2, 3));
