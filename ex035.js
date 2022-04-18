//herança - provém de uma classe generica e se 
// transforma em algo mais especializado mantendo 
// suas características anteriores

class Person{
    constructor (_name, _age){
        this.name = _name
        this.age = _age
    }

    describe(){
        console.log(`I am ${this.name} and I am ${this.age} years old`)
    }
}

class Programmer extends Person {
    constructor(_name, _age, _yearsOfExperience){
        super(_name, _age)

        //Custom behavior os Programmers
        this.yearsOfExperience = _yearsOfExperience
    }

    code(){
        console.log(`${this.name} is coding`)
    }
}

let pessoa01 = new Person('Sarah', 15)
let programador01 = new Programmer('Henrik', 20, 4)


programador01.code()

console.log(pessoa01.describe())
console.log(programador01.describe())

const programmers = [
    new Programmer('Vitor', 25, 7),
    new Programmer('Lucas', 19, 3)
]

// Desenvolvedor de Software
function developSoftware (programmers){
    // O 'for of' percorre um array e o 'for in' percorre um objeto  
    for (let programmer of programmers){
        programmer.code();
    }
}

developSoftware(programmers)
