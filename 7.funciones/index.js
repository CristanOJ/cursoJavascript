//arrow function o funciones flecha

//ppasos para construir una función
//1. Palabra reservada
//2. Ponerle un nombre que describa el trabajo
    //que realizará la función
//3. La función puede recibir parametros
    //pero si o si indica que tendrá parametros
    //()
    //(ListaAmigos)
    //(nombre,edad)
//4. Dato Importante. una función siempre tiene que
    //retornar un tipo de dato
//ejemplo:
function saludo(nombre,apellido){
    let saludo="hola como estas "+ nombre+apellido
    return saludo
}
//para usar la funcion debo llamar a la función

console.log(saludo("rafael"," olarte"))