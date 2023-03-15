function checkPalindrome(str){
    let rev="";
    for(let i=str.length-1; i>=0; i--){
        rev=rev+str[i];
 }
 return rev==str;
 }
 var a="madam"
 if(checkPalimndrome(a)){
    console.log("Yes")
 }else{
    console.log("No")
 }