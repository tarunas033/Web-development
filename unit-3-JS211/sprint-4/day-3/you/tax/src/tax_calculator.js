function tax_calculator(amount){
 if(amount<=250000){
     return ("no tax")
 } else if(amount > 250000 && amount <= 500000){
     return (amount-amount *(10/100))
 } else if(amount>500000 && amount <=1000000){
     return (amount-amount *(20/100))
 } else {
     return (amount-amount *(30/100))
 }
}

export {tax_calculator};