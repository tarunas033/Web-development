// Write code related to Home page here 
document.querySelector("form").addEventListener("submit",homeFunc);

let arr=JSON.parse(localStorage.getItem("task-list")) || [];
function homeFunc(event){
    event.preventDefault();
    let obj={
        taskName:document.querySelector("#name").Value,
        Des:document.querySelector("#desc").Value,
        Start:document.querySelector("#start").Value,
        End:document.querySelector("#end").Value,
        Prior:document.querySelector("#priority").Value,
    }
    if(obj.taskName=="" || obj.Des=="" ||obj.Start=="" ||obj.End=="" ||obj.Prior==""){
        alert("please enter inputs");
    } else {
    arr.push(obj);
    localStorage.setItem("task-list",JSON.stringify(arr));
}
}