let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];
 let x=users.filter(function(el){
    return(el.place=="Banglore")
 })
 let y=x.map(function(el){
    return(el.firstName+" "+el.lastName)
 })
 console.log(y);