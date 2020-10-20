// task 2
var nums2 = [1, 2, 3, 8, 9, 77];
function aveArray(x) {
    var sumNum = 0;
    var avg = 0;
    var len = x.length;
    for (var i = 0; i < len; i++) {
        sumNum += x[i];
    }
    avg = parseFloat(sumNum / len);
    console.log(avg);
}
aveArray(nums);
aveArray(nums2);