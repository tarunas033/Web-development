let nums=[1,2,3,4]
let x=nums.filter(function(el){
    return el%2==1
})
let y=x.reduce(function(acc,el){
    return acc+el
})
console.log(y)