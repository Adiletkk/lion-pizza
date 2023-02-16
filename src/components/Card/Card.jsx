import React from 'react'
import Button from '../button/Button'
import css from './Card.module.css'


function Card() {
  return (
    
    <div className={css.Card}>
     <img className={css.pizza} src="https://dodopizza-a.akamaihd.net/static/Img/Products/c940c5751e6d420e997d86c26a8ba16f_366x366.webp" alt="pizza" />
     <h3>Пицца из половинок</h3>
     <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
   <Button variant='full' title='Корзина'/> 
    </div>
  )
}

export default Card