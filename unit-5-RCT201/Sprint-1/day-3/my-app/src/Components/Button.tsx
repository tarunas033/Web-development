interface Props {
    text : string,
    handleOnClick?: ()=>void
}

function Button ({text,handleOnClick} : Props){
    return <button onClick={handleOnClick}>{text}</button>
}

export default Button;