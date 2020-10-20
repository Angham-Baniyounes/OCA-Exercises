class Person {  
    constructor(name, id, age) {
        this.name = name;
        this.id = id;
        this.age = age;
        this.Greeting();
    }
    Greeting() {
        console.log(`"Hello " + ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, sMark, classNum) {
        super(name);
        this.stdMark = sMark;
        this._classNum = classNum;
    }
    get mark() {
        return this.stdMark;
    }
    set mark(mark) {
        this.stdMark = mark / 100;
    }

    get subject() {
        return this._classNum;
    }
    set subject(numClass) {
        this._classNum = numClass;
    }
    Greeting() {
        console.log(`Hello Teacher: ${this.name}`);
    }
    
      
}
/////////////////////Class Car//////////////////////////
class Car {
    constructor(id, type, year) {
        this.id = id;
        this.type = type;
        this.year = year;
        this.sTime = 0;
    }
    start() {
        console.log(`${this.type} is running`);
    }
    timeStart() {
        this.sTime += 120;
    }
}
/////////////////////Class Animal//////////////////////////
class Animal {
    constructor(id, name, isPet) {
        this.id = id;
        this.name = name;
        this.isPet = isPet;
    }
    homeAnimal() {
        if (this.isPet == true) {
            console.log(this);
        }
    }
}


/////////////////////Object//////////////////////////
let angham = new Person("Angham", 1, 28);
let nagham = new Person("Nagham", 2, 18);
let Sobhi = new Teacher("Sobhi");
let Mohammad = new Teacher("Mohammad");
//cars
let toyota = new Car(1254, "Toyota", 2020);
let ford = new Car(6987, "Ford", 2019);
//animals
let bird = new Animal(120, "BlueBird", false);
let fish = new Animal(103, "uglyFish", true);

//methods
const printObject = (objName) => console.log(objName);
printObject(angham);
printObject(nagham);
printObject(Sobhi);
printObject(Mohammad);
Mohammad.Greeting();
toyota.start();
ford.start();
bird.homeAnimal();
fish.homeAnimal();