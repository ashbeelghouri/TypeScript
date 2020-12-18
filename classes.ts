class Car{

    constructor (public color: string, private year: number) {
    }

    public drive(){
        console.log("car: ", this.color, "year", this.year);
        this.putInGear();
        this.pressPedal();
        this.turnWheel();
    }

    private putInGear(){
        console.log("Gear put");
    }
    private pressPedal(){
        console.log("pressed pedal");
    }
    private turnWheel(){
        console.log("turned wheel");
    }

};

const myCar = new Car("red", 2000);
myCar.drive();