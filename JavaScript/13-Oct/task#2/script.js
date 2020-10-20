function getSpecifiedSign(fNum, sNum, thNum) {
    var fNum = parseInt(document.getElementById('fNum').value);
    var sNum = parseInt(document.getElementById('sNum').value);
    var thNum = parseInt(document.getElementById('thNum').value);
    debugger;
    if(fNum * sNum * thNum >= 0) {
        alert("The Sign is : +");
    } else {
        alert("The Sign is : -");
    } 
}
var displaySign = document.getElementById('displaySign');
displaySign.addEventListener("click", getSpecifiedSign);
