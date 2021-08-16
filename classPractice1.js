// OOP - Inheritance 

// Create a class called Fish 
// Define a method Swim( )
// Create a class Nemo that inherits from Fish
// Define an attribute color
// Create a Nemo object. Can it swim? 
// Find the difference between abstract class and an interface
// Which of the two can have implementation of a method in the class?


// //SuperClass
class Fish {
    constructor(color){
        this.color = color
    }
    swim(){
       console.log('I can swim')
    }
}


//Inheritance 

// Nemo is a subClass
class Nemo extends Fish {
    constructor (color, speed){
        super(color)
        this.speed = 'slow'
    }
    swim() {
        console.log('I have evolved')
    }
}

// const mako = new Nemo ('orange')
// mako.swim()
// console.log(mako)

// // let nemoObject = new Nemo ('blue')
// // console.log(nemoObject)

// // nemoObject.swim()



// LAB 2
// Create an Animal class. 
// The class will have name, age, color, legs, superPower attributes
// Create two objects of this class - both with a unique superPower

// create three methods for this class - include one method named useSuperPower()
// the other two can be anything that you want
// Create two more extra objects for this class


class Animal {
    constructor(name, age, color, legs, superPower){
        this.name = name,
        this.age = age,
        this.color = color,
        this.legs = legs,
        this.superPower = superPower
    }
    useSuperPower(){
        console.log(this.superPower)
    }
    eat(){
        console.log('is eating')
    }
    sleep(){
        console.log('is sleeping')
    }
}

let dog = new Animal ('spot', 2, 'brown', 4, 'can fly')
let cat = new Animal ('Viktor', 3, 'grey', 3, 'is_a_Cat')

let monkey = new Animal('tarzan', 3, 'white', 4, 'can fight humans')
let dolphin = new Animal ('reek', 50, 'black', 0, 'invisible')
// console.log(cat)
// dolphin.useSuperPower()
dog.eat()


// =====================
// Create a class name User
// This class with have firstName, lastName, department attributes 
// a method name changeDepartment()
// Create three instances of this class = objects
// Change department for two of the instances => polymorphism
// Create three objects for this class


// class User {
//     constructor(firstName, lastName, department){
//         this.firstName = firstName,
//         this.lastName = lastName,
//         this.department = department
//     }
//     changeDepartment(){
//         console.log('I am getting out of here')
//     }
// }

// let accounting = new User ('Marco', 'Polo', 'Accounting')

// class newUser extends User {
//     constructor(firstName, lastName, department){
//     super(firstName, lastName, department)
//     this.department = 'Special Ops'
//     }
    
// }

// let marketing = new newUser ('Marcus', 'Tafford')
// let maintenance = new newUser ('Engle', 'Devin')

// console.log(marketing)
// console.log(maintenance)