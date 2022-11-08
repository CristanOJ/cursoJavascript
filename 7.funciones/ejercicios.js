//fuwnción contadora de vocales
//contadore('eucalipto')//5

function Contare(palabra){
    const vocales = "aeiou";
    let cantidadVocales = 0;
    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
}
console.log(Contare("Eucalipto"))


//function calculadora(num1s,num2s,operaciion){return total}
//calculadora(42,12,'resta')//33

function calculadora(num1,num2,operacion){
    if(operacion=="resta"){
        total=num1-num2
    }
    if(operacion=="suma"){
        total=num1+num2
    }
    if(operacion=="multiplicación"){
        total=num1*num2
    }
    if(operacion=="division"){
        total=num1/num2
    }
    return total
}
console.log(calculadora(10,6,"suma"))