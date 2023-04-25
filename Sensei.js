import { Ninja } from "./Ninja.js";

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

const sensei1 = new Sensei("shinobi");
sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom();
sensei1.showStats();