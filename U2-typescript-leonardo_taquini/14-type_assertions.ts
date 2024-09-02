// 14. Type assertions
// Declara una variable de tipo any con un valor numérico y usa una aserción de tipo
// para tratarla como un string. Usa la propiedad “.length” en esta variable.


let anyValue: any = 42;

let stringValue: string = anyValue as string;

console.log(stringValue.length);
