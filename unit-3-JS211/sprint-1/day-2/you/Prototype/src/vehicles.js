// Function constructor
function FourWheeler(wheels, speed, model, fuel, color) {
    
this.wheels = wheels
this.speed  = speed;
this.model  = model;
this.fuel   = fuel;
this.color  = color;


}


// Parent object fro Object.create

let FourWheelerObject = {
   wheels :"M.R.F",
   speed :  20,
   model : "Duster",
   fuel :   30,
   color : "Black"
}

// Store function contructor object here
var car1 = new FourWheeler("M.R.F",20,"Duster",30,"Black")


// Store Object.create here
var car2 = Object.create(FourWheelerObject)

FourWheeler.prototype.setSpeed = function(speed){
    return this.speed = speed;
}

FourWheeler.prototype.updateColor = function(color){
    return this.color = color;
}

FourWheeler.prototype.updateFuel = function(fuel){
    return this.fuel = fuel;
}

FourWheelerObject.setSpeed = function(speed){
    return this.speed = speed;
}

FourWheelerObject.updateColor = function(color){
    return this.color = color;
}

FourWheelerObject.updateFuel = function(fuel){
    return this.fuel= fuel;
}

export {car1, car2}