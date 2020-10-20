function sortNumbers(num1, num2, num3) {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var num3 = parseInt(document.getElementById('num3').value);
    if(num1 > num2 && num1 > num3) {
        if(num2 > num3) {
            alert(num1 + ", " + num2 + ", " + num3);
        } else {
            alert(num1 + ", " + num3 + ", " + num2);
        }
    } else if(num2 > num1 && num2 > num3) {
        if(num1 > num3) {
            alert(num2 + ", " + num1 + ", " + num3);
        } else {
            alert(num2 + ", " + num3 + ", " + num1);
        }
    } else if(num3 > num1 && num3 > num2) {
        if(num1 > num2) {
            alert(num3 + ", " + num1 + ", " + num2);
        } else {
            alert(num3 + ", " + num2 + ", " + num1);
        }
    }
}
var sortNums = document.getElementById('sortNums');
sortNums.addEventListener("click", sortNumbers);