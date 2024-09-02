// Añade un constructor a la clase Car que inicialice la propiedad make. Crea una
// instancia de Car con una marca y llama al método drive().


class Car {
  make: string;

  constructor(make: string) {
    this.make = make;
  }

  drive() {
    console.log(`Driving a ${this.make}`);
  }
  
}

const myCar = new Car('Ford');
myCar.drive();