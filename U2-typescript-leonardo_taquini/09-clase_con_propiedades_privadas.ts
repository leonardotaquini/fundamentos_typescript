// instancia de Car con una marca y llama al método drive(). 9. Clase con propiedades privadas
// Modifica la clase Car para que la propiedad make sea privada. Añade un método
// getMake() que devuelva el valor de make.
class Car {
    private make: string;

    constructor(make: string) {
        this.make = make;
    }

    drive() {
        console.log(`Driving a ${this.make}`);
    }

    getMake() {
        return this.make;
    }
}

