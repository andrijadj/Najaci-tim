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