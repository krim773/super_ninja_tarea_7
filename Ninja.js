class Ninja {
    constructor(nombre, salud, velocidad = 3, fuerza = 3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName() {
        console.log(`Soy ${this.nombre}!`);
    }

    showStats() {
        console.log(`nombre: ${this.nombre}`);
        console.log(`fuerza: ${this.fuerza}`);
        console.log(`velocidad: ${this.velocidad}`);
        console.log(`salud: ${this.salud}`);
        console.log(`  `);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`${this.nombre} recupero +10 de salud`);
        console.log(` `);

    }
}



class Sensei extends Ninja {
    constructor(nombre, salud = 200, velocidad = 10, fuerza = 10, sabiduria = 10) {
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = sabiduria;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos lo pueden hacer en dos meses.");
    }
}








const ninja1 = new Ninja("shinobi", 30);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();




const sensei1 = new Sensei("Super sensei");
sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom();
sensei1.showStats();

