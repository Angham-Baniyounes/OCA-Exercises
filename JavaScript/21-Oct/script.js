let clr = document.getElementById("clear");
let localBtn = document.getElementById("local");
let sessionBtn = document.getElementById("session"); 
let keyIn = document.getElementById("keyIn");
let valueIn = document.getElementById("valueIn");
let result = document.getElementById("result");
localBtn.addEventListener("click", createItemsLocal);
sessionBtn.addEventListener("click", createItemsSession);
clr.addEventListener("click", clearItems);


function createItemsLocal() {
    localStorage.setItem(keyIn.value, valueIn.value);
    result.innerHTML += `<li>${keyIn.value} : ${localStorage.getItem(keyIn.value)} </li>`;
}  
function createItemsSession() {
    sessionStorage.setItem(keyIn.value, valueIn.value);
    result.innerHTML += `<li>${keyIn.value} : ${sessionStorage.getItem(keyIn.value)} </li>`;
}

function clearItems() {
    localStorage.clear();
    sessionStorage.clear();
    keyIn.value = "";
    valueIn.value = "";
    result.innerHTML = "";
}
