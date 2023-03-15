import { CHANGE_THEME } from "./actionTypes";
import React from 'react'
const initialState={
      theme:"light"
}
const themeReducer = (state=initialState,{type,payload}) => {
     switch (type) {
        case CHANGE_THEME:
           return  {theme:payload}
     
        default:
            return state
     }
}

export { themeReducer}

