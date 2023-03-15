import React from 'react';


type ButtonProps ={
    color?:"red" | "beige" | "pink";
    buttontext:string,
    handleClick?: () => void,
    children : React.ReactNode

}
const Button = (props:ButtonProps) =>{
    const { color , children , handleClick } = props;

return(
    <>

<button style={{backgroundColor:color}} onClick={()=> handleClick && handleClick()}>
 {children}</button>
    </>
    
)


}

export default Button;