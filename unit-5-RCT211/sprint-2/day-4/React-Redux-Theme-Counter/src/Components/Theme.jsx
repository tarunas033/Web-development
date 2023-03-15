import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { handleTheme } from '../Redux/action'
const Theme = () => {
    const dispatch=useDispatch();
    const {theme}=useSelector((store)=>store.themeReducer)
  return (
    <div>
        <button disabled={theme=="light" ? true: false} onClick={()=>dispatch(handleTheme("light"))} >Switch to Light</button>
        <button disabled={theme=="dark" ? true: false}  onClick={()=>dispatch(handleTheme("dark"))}>Switch to Dark</button>
    </div>
  )
}

export default Theme
