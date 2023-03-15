// Write code related to Done page here
priorityData=JSON.parse(localStorage.getItem("priority-list"));
let doneData=JSON.parse(localStorage.getItem("done-list")) || [];
displayTable(doneData)

function displayTable(priorityData){
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
           prioD(ele,index);
        })
        row.append(col1, col2, col3, col4 ,col5, col6)
        document.querySelector("tbody").append(row);

})
}
function priority(ele,index){

    doneData.push(ele);
    localStorage.setItem("done-list",JSON.stringify(doneData));

    data.splice(index,1);
    localStorage.setItem("priority-list",JSON.stringify(priorityData));
    displayTable(priorityData);
}
