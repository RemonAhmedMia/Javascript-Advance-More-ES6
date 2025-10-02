class Vehicales {
    constructor (name,price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log("ami cholachol korte pari");
        
    }
}
class Bus extends Vehicales {
    constructor (name,price,seat) {
        super (name,price);
        this.seat = seat;
    }
    route(){
        console.log("Dhaka To Cox-Bazar");
        
    }
}

class Truck extends Vehicales {
    constructor(name,price,load) {
        super(name,price);
        this.load=load;
    }
    weight(){
        console.log("Amr ojon 1000kg ha ha");
        
    }
}

const greenLine = new Bus('Greenline' , 129409854, 50);
console.log(greenLine);
greenLine.move()