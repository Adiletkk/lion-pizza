import React from 'react'
import css from './Button.module.css'


function Button(props) {
  console.log(props.onClick);
  return (
    <button onClick={props.onClick}  className={props.variant === 'empty' ? css.empty : css.full}>{props.title}</button>
  )
}

export default Button