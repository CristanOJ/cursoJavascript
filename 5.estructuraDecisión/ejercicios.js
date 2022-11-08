let Carro = 'Rojo';

if (Carro) {
  console.log("Es mi color favorito.");
} else {
  console.log("No me gusta el carro");
}

Numeros=2
switch(Numeros){
case 1:
console.log("uno")
break
case 2:
console.log("dos")
break
case 3:
console.log("tres")
break
case 4:
console.log("cuatro")
break
default:
console.log("Error number")
}

//<------------------------------------------------->
Letras="e"
switch(Letras){
case "a":case "e":case "i":case "o":case "u":
console.log("la letra "+ Letras +", es vocal")
break
case "z":
console.log("No es vocal")
break
default:
console.log("Error number")
}
//hacer un programa que me muestre el factorial de un numero
5!=4*3*2*1
5!=120

7!=7*6*5*4*3*2*1
//hacer un programa que me determine si un texto es palimdromo
//<------Se lee de igual forma de cualquier lado "ADA"

function palindromo(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
  }
  return true;
 }
 console.log(palindromo("ojo"))

//hacer un programa que me muestre los n numeros de la serie fibonacci
1,2,3,5,8,13 //para encontrar el numero siguiente, suma el anterior

const getFibonacciIndex = n => {
  if (n <= 1) {
    return n;
  }
   
  let a = 0, b = 1, c = 1, result = 1;
  
  while (c < n) {
    c = a + b;
    a = b;
    b = c;
    result++;
  }
  
  return result;
}