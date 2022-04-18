//métodos estáticos

class Square {
    constructor (_side){
        this.side = _side
    }

    static equals(_a, _b){
        return _a.side**2 == _b.side**2 
    }

    static isValidDimensions(_width, _height){
        return _width == _height;
    }
}

let square01 = new Square(5)
let square02 = new Square(5)

console.log(Square.equals(square01, square02))

console.log(Square.isValidDimensions(4,5))

//são metodos de uma classe mas que não precisam 
//de uma instância dela para funcionar
