import React from 'react'
import AdminPage from '../../pages/AdminPage/AdminPage'
import Button from '../button/Button'
import css from './Card.module.css'
import axios from 'axios'
import Api from '../api/Api'
import { useDispatch, useSelector } from 'react-redux'
import { incremend } from '../../Redux/Slises/MainSlise'





function Card({ title, id, price, name, description, image, isAdmin = false }) {


const value = useSelector((state) => state.main.value)


const dispatch = useDispatch();
const testRedux = () => { 
  dispatch(incremend())
}

  
  const deletePizza = () => {
    const res = window.confirm(
      "Вы действительно хотите удалить " + title + "?"
    );
    if (res) {
      Api.deletePizza(id)
        // .delete("https://63e4e6f44474903105f47899.mockapi.io/pizza/" + id)


        .then(() => {
          window.location.reload();
        });
    }
  };
  return (

    <div className={css.wrapper}>
      <img className={css.imageWrapper} src={image} alt={name} />
      <div className={css.title}>

      </div>
      <p title={description} className={css.description}>
        {description}
      </p>
      <div className={css.footer}>
        <h1>Цена:{price} {value} </h1>
        {isAdmin ? (
          <Button onClick={deletePizza} variant="empty" title="Удалить" />
        ) : (
          <Button onClick={testRedux} variant="empty" title="В корзину" />
        )}
      </div>
      <div className={css.createCardS}>

      </div>
    </div>

  )
}

export default Card