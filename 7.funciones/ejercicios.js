//fuwnción contadora de vocales
//contadore('eucalipto')//5


const contarVocales = palabra => {

    const vocales = "aeiou";
    let cantidadVocales = 0;
    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
};


const contar = "eucalipto";
const vocales = contarVocales(contar);
console.log(contar,"tiene", vocales);


//function calculadora(num1s,num2s,operaciion){return total}
//calculadora(42,12,'resta')//33

function calculadora(num1,num2,operacion){
    let total=(num1)
    return total
}

//console.log(saludo("rafael"," olarte"))