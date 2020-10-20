function factorial(x) {
    let factNum = 1;
    for (var i = x; i >= 1; i--) {
        factNum = factNum * i;
    }
    console.log(factNum);
}
factorial(2);
factorial(4);