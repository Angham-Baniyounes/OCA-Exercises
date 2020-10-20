// 3 classes (person, car, animal)
class Person {
    constructor(fname, age, lname) {
        this.fname = fname;
        this.age = age;
        this.lName = lname;
    }
    getFullName() {
        return this.fname + " " + this.lName;
    }
}
class Car {
    constructor(brandName, modelNum, color) {
        this.brandName = brandName;
        this.modelNum = modelNum;
        this.color = color;
    }
    getSpeed(distancex, timex) {
        let distance = parseFloat(distancex);
        let time = parseFloat(timex);
        let speedCar = (distance * 10 / time * 10) * 10;
        console.log(speedCar, "s\\t");
    }
}
class Animal {
    constructor(animalName, animalColor) {
        this.animalName = animalName;
        this.animalColor = animalColor;
    }
    displaySound(animalSound) {
        console.log(animalSound);
    }
}
var attribute = function(className, objName) {
    console.log(className[objName]);
}
//6 objects, 2 objects instance for each class (2 objects from the person, 2 from the car, 2 from the animal)
let person1 = new Person("Angham", 28, "Bani-Younes");
let person2 = new Person("Nagham", 29, "Aslan");
let car1 = new Car("Mercedes", 2020, "White");
let car2 = new Car("Ford", 2019, "Yellow");
let animal1 = new Animal("Cat", "white");
let animal2 = new Animal("Fish", "orange");
car1.getSpeed(1000, 6);
animal1.displaySound("meo");