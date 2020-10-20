function reverseArr() {
    var arr = [[0, 1, 2],[3, 4, 5]];
    for(var i = 0; i < 2; i++) {
        for(var j = 0; j < 3; j++) {
            console.log(arr[i][j]);
        }
    }
    console.log(arr);
    console.log(arr.reverse());
    var revArr = [[], []];
    for(var i = 1; i >= 0; i--) {
        for(var j = 0; j < 3; j++) {
            if(i == 1) {
                revArr[i-1].push(arr[i-1][j]);
                console.log(revArr[i-1]);
            }else if(i == 0) {
                revArr[i+1].push(arr[i+1][j]);
                console.log(revArr[i+1]);
            }
        } 
    }            
    console.log(revArr);
}
reverseArr();

// another solution
var arrNum = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(arrNum);
console.log(arrNum.reverse());