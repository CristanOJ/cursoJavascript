//con la estructura de ciclo for
//mostrar los numeros pares entre 1 y 20
for (let i=2;i<=20;i+=2){
    console.log(i)
}

for (let inicial=1;inicial<=20;inicial++){
    if (inicial%2==0){   
    console.log(inicial)
}   else {
    console.log(inicial)
}
}

let vocales="aeiou"
console.log(vocales.length)
console.log(vocales[0])
for (let i=0;i<vocales.length;i++){
    console.log(vocales[i])
}

let texto="hola como estas como te llamas"
let contadore=0
for (let i=0;i<texto.length;i++){
    if (texto[i]=="a"){
        contadore+=1
    }
}
 console.log("tienes",contadore,"vocales a")
//--------------------------------------------------------------------------------

 let cantidad="eucalipto"
 let contador=0
 for (let i=0;i<cantidad.length;i++){
    switch(cantidad[i]){
        case "a": case "e": case "i": case "o": case "u":
            contador+=1
    }
}
console.log("tienes",contador,"vocales")