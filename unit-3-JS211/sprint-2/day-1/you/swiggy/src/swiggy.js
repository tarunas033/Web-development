function UserInfo(name,location) {

this.name = name;
this.location = location;

}

function serveFood(food) {

return `Serving ${food} to ${this.name} in ${this.location}`

}

function serveIn(name,location,food) {

  let UserInfo = {
    name,
    location,
    food,

}

return serveFood.call (UserInfo,food)

}
function billNote(total) {

return `${this.name}'s bill is INR ${total}`


}
function generateInVoice(name , location , quantity , price) {

 let UserInfo = {

    name,
    location,
    quantity,
    price,

 }

let total = quantity*price

return billNote.apply(UserInfo,[total])


    
}

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
