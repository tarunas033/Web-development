const time = (milisecond) => {
 if (milisecond < 60000) {
     return (`${Math.floor(milisecond / 1000)} seconds`)
 }
 else if (60000 <= milisecond && milisecond < 3600000) {
     let sec = milisecond % 60000
     let min = Math.floor(milisecond / 60000)
     if (sec / 1000 !== 0) {
         return (`${Math.floor(min)} minutes ${Math.floor(sec / 1000)} seconds`)
     }
     else {
         return (`${Math.floor(min)} minutes`)
     }
 }else{
     let sec = milisecond % 60000
     let min = Math.floor(milisecond / 60000)
     min=min%60
     let hour=Math.floor(milisecond/3600000)
     if(sec!==0){
         return (`${Math.floor(hour)} hours ${Math.floor(min)} minutes ${Math.floor(sec / 1000)} seconds`)
     }else{
         return (`${Math.floor(hour)} hours ${Math.floor(min)} minutes`)
     }
 }

}
export {time}