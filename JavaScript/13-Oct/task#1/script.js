function getLargerNum(fNum, sNum) {
    var fNum = parseInt(document.getElementById('fNum').value);
    var sNum = parseInt(document.getElementById('sNum').value);
    var result = document.getElementById('screen');
    //debugger;
    if(fNum == sNum) {
        result.innerHTML = "The Numbers are equals";
    } else if(fNum > sNum) {
        result.innerHTML = "The Larger Number is = " + fNum;
    } else {
        result.innerHTML = "The Larger Number is = " + sNum;
    }
}
var getResult = document.getElementById('result');
getResult.addEventListener("click", getLargerNum);