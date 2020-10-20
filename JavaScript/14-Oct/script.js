var arr = [];
var oddNum = 0, evenNum = 0;
for (var i = 1; i <= 10; i++) {
    debugger;
    arr[i - 1] = i;
    sumNumbers(arr[i-1]);
}
function sumNumbers(i) {
    debugger;
    if (i % 2 == 0) {
        evenNum += i;
    } else {
        oddNum += i;
    }
}
console.log("The sum of Even Numbers is equal = ", evenNum);
console.log("The sum of Odd Numbers is equal = ", oddNum);