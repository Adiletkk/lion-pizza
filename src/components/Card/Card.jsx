import React from 'react'
import Button from '../button/Button'
import css from './Card.module.css'


const testText = 'Соус бургер, цыпленок, соус ранч, чоризо из цыпленка, сладкий перец, красный лук, моцарелла, томаты, чеснок'


function Card() {
  return (

    <div className={css.wrapper}>
      <img className={css.imageWrapper} src="https://dodopizza-a.akamaihd.net/static/Img/Products/c940c5751e6d420e997d86c26a8ba16f_366x366.webp" alt="pizza" />
      <div className={css.title}>
        Пеперони
      </div>
      <p title={testText} className={css.description}>
        {testText}
      </p>
      <div className={css.footer}>
        <h1>Цена:1302</h1>
        <Button variant='empty' title='В корзину' />
      </div>
    </div>

  )
}

export default Card