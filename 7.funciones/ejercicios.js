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

function calc(num1, num2, sign){
    if (num1 === typeof (10) && num2 === typeof (5) && sign === "+" || "-" || "*" || "/" ){
        return parseInt.num1, parseInt.sign, parseInt.num2;
}
}
console.log(calc(10, 5, "*"))

//console.log(saludo("rafael"," olarte"))