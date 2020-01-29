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