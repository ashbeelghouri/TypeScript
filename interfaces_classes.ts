interface Driveable{
    speed: number;
    drive(): string;
}

class CarA implements Driveable{
    speed = 10;

    drive(){
        console.log(`I am driving at ${this.speed}`);
        return "" + this.speed;
    }
}

const myCarA = new CarA();

const StartDriving = (vehical: Driveable) => {
    vehical.drive();
};

StartDriving(myCarA);