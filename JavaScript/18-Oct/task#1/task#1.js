var stars = "";
for (var i = 1; i <= 5; i++) {
    stars += "*";
    console.log(stars);
}
console.log("--------------------------");
for (var i = 1; i <= 5; i++) {
    var star = "";
    var space = "";
    for (var j = 1; j <= 5 - i; j++) {
        space += " ";
    }
    for (var j = 1; j <= i; j++) {
        star += "*";
    }
    console.log(space+star);
}
console.log("--------------------------");
for (var i = 1; i <= 3; i++) {
    var star = "";
    var space = "";
    for (var j = i; j < 3; j++) {
        space += " ";
    }
    for (var a = 1; a <= (2 * i - 1); a++) {
        star += "*";
    }
    console.log(space+star);
}