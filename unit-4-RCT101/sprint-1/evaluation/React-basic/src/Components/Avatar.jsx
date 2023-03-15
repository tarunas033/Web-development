//enter code here

function Avatar({caption,image}) {
    
    return(
        <div>
            <h2>{caption}</h2>
            <img style = {{borderRadius:"50%"}}src={image} alt={caption}/>
        </div>
    )
}
// Avatar should accept caption and image  as props
// do default export
export default Avatar ;