let clr = document.getElementById("clear");
let localBtn = document.getElementById("local");
let sessionBtn = document.getElementById("session"); 
let keyIn = document.getElementById("keyIn");
let valueIn = document.getElementById("valueIn");
let result = document.getElementById("result");
localBtn.addEventListener("click", createItemsLocal);
sessionBtn.addEventListener("click", createItemsSession);

function createItemsLocal() {
    localStorage.setItem(keyIn.value, valueIn.value);
    getresult(localStorage);
}  
function createItemsSession() {
    sessionStorage.setItem(keyIn.value, valueIn.value);
    getresult(sessionStorage);

}
clr.addEventListener("click", clearItems);
function clearItems() {
    localStorage.clear();
    sessionStorage.clear();
    keyIn.value = "";
    valueIn.value = "";
    result.innerHTML = "";
}
function getresult(objName) {
    var len = objName.length;
    for (var i = 0; i < len; i++) {
        result.innerHTML = `<li>${keyIn.value} : ${valueIn.value} </li>`;
    }
    return result.innerHTML;
}