
class Vehicle {
    constructor(type, regNumber){
        this._type = type;
        this._regNumber = regNumber;
        
    }

    get type () {
        return this._type;
    }

   set type(value) {
        this._type =value;
    }
}

let v1 = new Vehicle('car','mh29');

v1.type = 'bike' ;

console.log(v1);