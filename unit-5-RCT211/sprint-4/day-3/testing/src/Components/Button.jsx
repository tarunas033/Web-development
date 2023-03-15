import React from 'react';
import styles from "./button.module.css";
import PropTypes from "./prop-types";

export const Button = ({children}) => {
  return(
    <button className={`${styles[color]} ${styles[width]}`}></button>
    
  ) 
  
}

Button.protoTypes = {
    color :PropTypes.string.isRequired,
    size: PropTypes.string,
};