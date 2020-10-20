var nums = [1, 2, 3, 8, 9];
oddNumber = [];
function oddArrays(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 != 0) {
            oddNumber.push(x[i]);
        }
    }
    console.log(oddNumber);
}
oddArrays(nums);