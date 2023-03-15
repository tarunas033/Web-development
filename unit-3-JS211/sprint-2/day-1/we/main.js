

let id;

let setAlarm = () => {

    let time = document.getElementById("time").value;

    let [setHour, setMin] = time.split(":")

    console.log(setHour);
    console.log(setMin);


id = setInterval(() => {
 
    let current = new Date ();

    if(setHour == current.getHours() && setMin == current.getMinutes()) {

     console.log("Alarm");

     alert ("Tring Tring")

     clearInterval(id);

     // let a = new Audio (" ");
     //a.play
    }

},1000);

}

function newFunction() {
    let id;
    return id;
}
