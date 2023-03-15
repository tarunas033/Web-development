class Vehicle {
    constructor(type,registrationNumber,color){
        this.type = type;
        this.registrationNumber = registrationNumber;
        this.color = color;
    }
}

class Car extends Vehicle {
    constructor(registrationNumber,color){
        super("Car",registrationNumber)
        this.color = color;
    }

}

class Bike extends Vehicle{
    constructor(registrationNumber,color){
        super("Bike",registrationNumber)
        this.color = color;
    }

}

class Bus extends Vehicle{
    constructor(registrationNumber,color){
        super("Bus",registrationNumber)
        this.color = color;
    }
}

class Slot {
   constructor(type,number){
      this.type = type;
      this.number = number;
      this.isBooked = false;
   }
}

class ParkingFloor {
    constructor(floorNumber , maxLimit){
        this.floorNumber = floorNumber;
        this.maxLimit = maxLimit;
        this.parkingSpots = [];
        this.vacantParkingSpots = [];
        for(let i=1; i<=maxLimit;i++){
            if(i == 1){
             this.parkingSpots.push(new Slot ("Bus",i));
            }

            else if( i == 2 ){
             this.parkingSpots.push(new Slot ("Bike",i));
            }

            else if( i == 3 ){
             this.parkingSpots.push(new Slot ("Bike",i));
            }

            else {
                this.parkingSpots.push(new Slot ("Car",i));
            }
        }
    }
    displayAvailableSlots(){
        return this.parkingSpots
    }

}  

export {Vehicle, Car, Bike, Bus, Slot, ParkingFloor}


