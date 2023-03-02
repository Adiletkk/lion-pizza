import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import css from './Header.module.css'


function Header() {
  return (
    <div className={css.wrapper + ' container'}>
      <Link to='/'>
      <img className={css.logo} src='https://www.mightycall.ru/wp-content/uploads/2014/09/dodo-pitstsa.jpg' alt='dodopizza' />
      </Link>
      <div className={css.text}>
        <h1>Доставка пиццы Бишкек </h1>
        <p>34 Мин 4.75</p>
      </div>
      <div className={css.number}>
        <h1>120481204</h1>
        <p>Позвонить оп телефону </p>
      </div>
      <div className={css.right}>

      <div className={css.coin}>
         <img src="https://img.lovepik.com/element/45007/6668.png_860.png" alt="" width={30} height={30} />
         <h1>DOGE coin</h1>
         
      </div>
      <div className={css.coinbtn}>
        <Link to='/login'>Войти</Link>
      </div>
      </div>
    </div>

  )
}

export default Header




{/* <Button variant='empty' title='Корзина'/> */ }
