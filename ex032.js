//Classe, construtor e o 'this'


class Rectangle{
    constructor(_width, _height, _color){
        console.log("Um retangulo foi criado!")

        this.width = _width
        this.height = _height
        this.color = _color
    }

    getArea(){
        this.area = this.width * this.height
        return this.area
        
    }

    printDescription(){
        console.log(`Sou um retângulo de ${this.width} X ${this.height} e uma área de ${this.area} m^2`)
    }
}


let retangulo01 = new Rectangle(3, 5, 'blue')
let retangulo02 = new Rectangle(5, 8, 'red')

console.log(retangulo01)
console.log(retangulo02)

console.log(retangulo01.getArea())
console.log(retangulo02.getArea())

console.log(retangulo02.printDescription())

console.log(retangulo01.printDescription())