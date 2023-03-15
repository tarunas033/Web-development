

//vehicle parking system
//1. Mall
//2. Parking Floor (3- Floor)
//3. Slots (9-Slots)
//4  Vehicles
//5. Tickets

class Vehicle {
    constructor(t, r){
        this.type = t;
        this.regNumber = r;
        
    }
}
      // CAR
  class Car extends Vehicle {
    constructor(regNumber){
        super('Car',regNumber);
    }
}
// let c1 = new Car('HR 26 3296');
// console.log('c1:',c1);


     
class Bus extends Vehicle {
  constructor(regNumber){
        super('Bus',regNumber);
    }
}


// let d1 = new Bus('HR 26 3196');
// // console.log('d1:',d1);



class Bike extends Vehicle {
    constructor(regNumber){
        super('Bike',regNumber);
    }
}


// let e1 = new Bike ('HR 26 3206');
// // console.log('e1:',e1);

//car->constructor->super->vehicle->constructor

class Slot{
    constructor(number, type){
        this.number = number;
        this.type =type;
        this.isBooked = false;
    }
}

class ParkingFloor{
    constructor(floorNumber,maxSlots){
        this.floorNumber = floorNumber
// 
        //does parkingfloor stores anything ?
        //storing props:object
        //store multiple values: array
        this.parkingSpots = [];

        //per parking floor now many slots?

        for(let i = 0; i < maxSlots; i++){
           //i=0;
           //i=1;
           //i=2;
           //1st floor
           if(i===0){

               this.parkingSpots.push(new Slot(i,'Bike'))
           }
           //2nd floor
           else if(i==1){
               this.parkingSpots.push(new Slot(i,'Car'))
        }
            else {
                this.parkingSpots.push(new Slot(i,'Bus'))

               }
             }
           }
        }
//   let pf = new ParkingFloor(3);
//   console.log('pf:',pf);


// 1. vehicle

//2. SLots(per floors 3)

//3. where we storing this slots(in a floor)

// 4. let floors ={slot1, slot2, slot3}

//let mall =[ floor1, floor2, floor3 ]
class Mall {
    constructor(numberofFloors){

        this.floor = [];
        // this.numberofFloors = numberofFloors;

        for(let i = 0; i < numberofFloors; i++){
      //new parking floor(florNumber, slots)
            this.floor.push(new ParkingFloor(i,numberofFloors));

        }
      }
    
    // let m1 =new Mall(3)
    // console.log('m1:',m1)

parkVehicle(vehicle){

        let type = vehicle.type

      // finding available slot based on vehicle

        let slot = this.findSlot(type);
        // console.log('slot:',slot);

        if( !slot ) {
            console.log('all slots full');
            return false;
        }
       
       slot.isBooked = true ;
       console.log('slot:',slot);

      }

findSlot(userVehicleType) {
      //go to first floor check all slots
      //go to 2d floor check slots

      // this.floors(0).parkingSports

      for(let i=0 ; i<this.numberofFloors; i++){


      for(let slot of this.floor[i].parkingSpots ){
            
      if(slot.type === userVehicleType && !slot.isBooked){

        return {floorNumber : i,foundedSlots : slot}
          }      
        }
      }

      return false;
    }
  }

        let m1 = new Mall(3);
        console.log('m1:',m1);

        let b1 = new Bike ("MH 45 6759");
        // console.log('b1:',b1);
        let b2 = new Bike ("MH 25 6769");

        let b3 = new Bike ("MH 15 6779");

        let b4 = new Bike ("MH 35 6789");

        // let s1 =m1.findSlot('Bike');

        // console.log('s1:',s1);

        m1.parkVehicle(b1);

        m1.parkVehicle(b2);

        m1.parkVehicle(b3);

        m1.parkVehicle(b4);

  

    

