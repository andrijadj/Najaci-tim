class Car {
    constructor(motor, gume) {
        this.motor = motor;
        this.gume = gume;
    }

    potrosnjaGoriva() {
        console.log("Automobil tipa "+this.motor+"je najprodavaniji model ove godine, i dolazi u paketu sa 4 "+this.gume+"gume.")
    }

}

console.log("Ajde prikljucite se!");

class Bentley extends Car {
    constructor(model, boja, brzina, gume, motor) {
        super(motor, gume);
        this.model = model;
        this.boja = boja;
        this.brzina = brzina;
    }

    maksimalnaBrzina() {
        console.log("Ovaj motor " + this.motor + " razvija brzinu od " + brzina + " km/h.");
    }

    vratiBoju() {
        console.log("Boja ovog automobila model " + this.model + " je" + this.boja + ".");
    }
}
class Renault extends Car {
  constructor(motor, gume, model, boja, tip, gorivo) {
    super(motor,gume);
    this.model = model;
    this.boja = boja;
    this.tip = tip;
    this.gorivo = gorivo;
  }
  
  proveraKilometraze() {
    const km = 100*Math.random().toFixed();
    console.log('Predjena kilometraza automobila je: '+km);
  }
}
