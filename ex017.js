function tripleTheChances(chances) {
    // Write your code here
    var newChances = [];
    for(var index = 0; index < chances.length; index++){
        newChances.push(chances[index] * 3);
    }
    return newChances;
}
var teste = [1, 2, 4,5]
console.log(tripleTheChances(teste))