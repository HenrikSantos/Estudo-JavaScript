class Animal{
    constructor (_name){
        this.name = _name;
    }

    makeSound(){
        console.log("Generic Animal Sound!");
    }
}

class Dog extends Animal{
    constructor (_name){
        super(_name);
    }
    makeSound(){
        super.makeSound()
        console.log("Woff! Woff!")
    }
}

const a1 = new Animal("DOM")

a1.makeSound()

const a2 = new Dog("Zelda")

a2.makeSound()