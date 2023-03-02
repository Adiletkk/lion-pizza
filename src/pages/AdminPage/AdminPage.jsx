import React, { useEffect, useState } from 'react'
import Title from '../../components/Title/Title'
import axios from 'axios';
import Card from '../../components/Card/Card';
import css from './AdminPage.module.css'
import { Link } from 'react-router-dom';
import Api from '../../components/api/Api';

function AdminPage() {
  

  const [pizzas,setPizzas] = useState([]);
  const [error,setError]= useState('')


  const getPizzas = async ()=> { 
    // const res = await fetch ('https://63e4e6f44474903105f47899.mockapi.io/pizza')

    const res = await Api.getPizzas()
    
    if(res.status ===200){
    // const data = await res.json()
    setPizzas(res.data)
    }else{ 
      setError('Somting went wrong')
    }
   }
  useEffect(() =>{
    getPizzas()
  },[])
  if(error) <h1>{error}</h1>

  return (
    <div className='container'>
      <Title title='Пиццы' position='center'/>
      <section className='d-flex'>
        <Link to='/create-product' className={css.addblock}>
          <img src="https://cdn-icons-png.flaticon.com/512/9667/9667978.png" alt="plus" />
          <p >Добавить</p>
        </Link>
        {pizzas.map((item) => <Card  key={item.id }  {...item} isAdmin={true}/>)}
      </section>
    </div>
  )
}

export default AdminPage