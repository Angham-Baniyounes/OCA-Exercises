function calculateMarks() {
    var math, english, arabic, bio, computer, religion;
    var studentName = " ";
    const subNum = 6;
    var sumMarks = 0;
    name = prompt("Please Enter Your Name: ");
    debugger;
    math = parseInt(prompt("Enter your Math score from the 100%"));
    if(math > 0 && math <= 100) {
        sumMarks += math;
    } else {
        math = parseInt(prompt("Enter your Math score from the 100%"));
        sumMarks += math;
    }
    english = parseInt(prompt("Enter your English score from the 100%"));
    if(english > 0 && english <= 100) {
        sumMarks += english;
    } else {
        english = parseInt(prompt("Enter your English score from the 100%"));
        sumMarks += english;
    }
    arabic = parseInt(prompt("Enter your Arabic score from the 100%"));
    if(arabic > 0 && arabic <= 100) {
        sumMarks += arabic;
    } else {
        arabic = parseInt(prompt("Enter your Arabic score from the 100%"));
        sumMarks += arabic;
    }
    bio = parseInt(prompt("Enter your Bio score from the 100%"));
    if(bio > 0 && bio <= 100) {
        sumMarks += bio;
    } else {
        bio = parseInt(prompt("Enter your Bio score from the 100%"));
        sumMarks += bio;
    }
    computer = parseInt(prompt("Enter your Computer score from the 100%"));
    if(computer > 0 && computer <= 100) {
        sumMarks += computer;
    } else {
        computer = parseInt(prompt("Enter your Computer score from the 100%"));
        sumMarks += computer;
    }
    religion = parseInt(prompt("Enter your Religion score from the 100%"));
    if(religion > 0 && religion <= 100) {
        sumMarks += religion;
    } else {
        religion = parseInt(prompt("Enter your Religion score from the 100%"));
        sumMarks += religion;
    }
    var avg = sumMarks / subNum;
    if(avg >= 90 && avg <=100) {
        alert(name + " your average is : Excellent")
    } else if(avg >= 80 && avg < 90) {
        alert(name + " your average is : Very Good")
    } else if(avg >= 70 && avg < 80) {
        alert(name + " your average is : Good")
    } else if(avg >= 60 && avg < 70) {
        alert(name + " your average is : Average")
    } else if(avg >= 50 && avg < 60) {
        alert(name + " your average is : Pass")
    } else {
        alert("Hard Luck");
    }
}
calculateMarks();