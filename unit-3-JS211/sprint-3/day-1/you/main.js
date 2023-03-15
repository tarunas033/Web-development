// LOW LEVEL DESIGN

// 1. Bulding
// 2. Floors
// 3. Meeting Rooms
// 4. slots (time slots)

class Slot{
    #timeSlot;
    constructor(start,end){
        this.#timeSlot=[start,end]
    }
    get start(){
        return this.#timeSlot[0]
    }
    get end(){
        return this.#timeSlot[1]
    }
}

// const s1 = newSlot(1,3); [1,3]
// console.log(s1.start);
// console.log(s1,end);
// slot-[start,end] or object
class Slots{
    #timeSlots;
    constructor(){
        this.#timeSlots =[]
        // [1-2],[4,5]
    }
    add(slot){
        // [3,5]
        if(this.isAllowed(slot.start, slot.end)){
            this.#timeSlots.push(slot)
        }
    }
    isAllowed(start, end){
        for(let slot of this.#timeSlots){
            if(start < slot.end && end > slot.start){
                return false;
            }
        }
        return true;
    }
}

// Register

// const r = new Slots();

// let s1= new Slot(1,3);
// let s2= new Slot(4,6);
// let s3= new Slot(7,9);

// r.add(s1);
// r.add(s2);
// r.add(s3);

// console.log(r);

class MeetingRoom {
    #name;
    #capacity;
    #slots;     //register

    constructor(name,capacity){
        this.#name = name;
        this.#capacity= capacity;
        this.#slots = new Slots()
    }

    get getName(){
        return this.#name;
     }
    get getCapacity(){
        return this.#capacity;
    }

    addSlot(slot){
        this.#slots.add(slot);
    }
}

// let m1 = new MeetingRoom("Room-1",30);
// let s1= new Slot(1,3)
// let s2= new Slot(4,6)
// let s3= new Slot(2,5)

// m1.addSlot(s1)
// m1.addSlot(s2)
// m1.addSlot(s3)

// console.log(m1);

class Floor{
    #name;
    #meetingRooms;

    constructor(name){
        this.#name = name;
        this.#meetingRooms= [];
    }
    get getName(){
        return this.#name;

    }

    addMeetingRoom(room){
        if(!this.doesRoomExist(room.getName)){
            this.#meetingRooms.push(room);
        }
    }
    doesRoomExist(name){
        for(let room of this.#meetingRooms){
            if(room.getName === name){
                return true;
            }
           
        }
        return false;
    }
}

// let f1 = new Floor("Floor-1")
// let m1 = new MeetingRoom("Room-1",30);
// let m2 = new MeetingRoom("Room-2",30);
// let m3 = new MeetingRoom("Room-3",30);

// f1.addMeetingRoom(m1);
// f1.addMeetingRoom(m2);
// f1.addMeetingRoom(m3);

// console.log(f1);

class Bulding{
    #name;
    #floors;
    constructor(name){
        this.#name = name;
        this.#floors = [];
    }
    get getName(){
        return this.#name;
    }
    addFloor(floor){
        if(!this.doesFloorExist(floor.getName)){
            this.#floors.push(floor);
        }
    }
    doesFloorExist(name){
        for(let f of this.#floors){
            if(f.getName === name){
                return true;
            }
        }
    }
}

let b = new Bulding("MasaiVerse");

let f1 = new Floor("Floor-1");
let m1=new MeetingRoom("Room-1",30);
let s1 = new Slot(1,3);
let s2 = new Slot(4,6);
let s3 = new Slot(7,9);

m1.addSlot(s1);
m1.addSlot(s1);
m1.addSlot(s1);

let m2 = new MeetingRoom("Room-1",30);
let m3 = new MeetingRoom("Room-1",30);

f1.addMeetingRoom(m1);
f1.addMeetingRoom(m2);
f1.addMeetingRoom(m3);

b.addFloor(f1)
let f2 = new Floor("Floor-1")
b.addFloor(f2)
console.log(b);