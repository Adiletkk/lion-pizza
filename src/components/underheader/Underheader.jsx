import React from 'react'
import Button from '../button/Button'
import css from './Underheader.module.css'


function Underheader() {
  return (
    <div className={css.text}>
        <a href="">Пицца</a>
        <a href="">Комбо</a>
        <a href="">Закуски</a>
        <a href="">Десерты</a>
        <a href="">Напитки</a>
        <a href="">Другие товары</a>
        <a href="">Акции</a>
        <a href="">Контакты</a>
        <a href="">О нас</a>
        <a href="">Прямой эфир</a>
   <Button variant='empty' title='Корзина'/> 

    </div>
  )
}

export default Underheader