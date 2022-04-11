function vezesLetraAparece(frase, letra) {
    // Escreva seu código aqui
    var cont = 0;
    for(var index = 0; index < frase.length; index++){
        if(frase[index] === letra){
            cont++
        }
    }
    return cont;
}
frase = 'testando aqui'
letra = 'a'

console.log(vezesLetraAparece(frase, letra));