// Declara un enum Color con los valores "Red", "Green", y "Blue". Crea una función
// que tome un argumento de tipo Color y devuelva un mensaje con el color. 


enum Color {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue'
}

function getColor(color: Color): string {
    return `The color is ${color}`;
}