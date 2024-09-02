// Escribe una función genérica identity que tome un argumento de tipo T y devuelva
// el mismo valor. Usa esta función con diferentes tipos de datos.



function identity<T>(arg: T): T {
    return arg;
}


console.log(identity('Person'));
console.log(identity('Dog'));
console.log(identity(42));