// Crea una clase ElectricCar que extienda de Car e incluya una propiedad adicional
// batteryLife (vida de la batería) de tipo número. Añade un método charge() que
// imprima un mensaje diciendo que el coche se está cargando.


class ElectricCar extends Car {
  batteryLife: number;

  constructor(make: string, batteryLife: number) {
    super(make);
    this.batteryLife = batteryLife;
  }

  charge() {
    console.log('The car is charging');
  }
}