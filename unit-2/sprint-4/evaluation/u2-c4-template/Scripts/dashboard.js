// Write code related to dashboard page here
data=JSON.parse(localStorage.getItem("task-list"));
let priorityData=JSON.parse(localStorage.getItem("priority-list")) || [];
displayTable(data);
//console.log(data);

function displayTable(data){
    document.querySelector("tbody").innerHTML="";

    data.forEach(function(ele,index){
        let row=document.createElement("tr");

        let col1=document.createElement("td");
        col1.innerText=ele.taskName;

        let col2=document.createElement("td");
        col2.innerText=ele.Des;

        let col3=document.createElement("td");
        col3.innerText=ele.Start;

        let col4=document.createElement("td");
        col4.innerText=ele.End;

        let col5=document.createElement("td");
        col5.innerText=ele.Prior;

        let col6=document.createElement("td");
        col6.innerText="Add";

        col6.addEventListener("click", function(){
           priority(ele,index);
        })
        row.append(col1, col2, col3, col4 ,col5, col6)
        document.querySelector("tbody").append(row);

})
}
function priority(ele,index){

    priorityData.push(ele);
    localStorage.setItem("priority-list",JSON.stringify(priorityData));

    data.splice(index,1);
    localStorage.setItem("task-list",JSON.stringify(data));
    displayTable(data);
}


