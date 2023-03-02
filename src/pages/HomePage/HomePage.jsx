import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Card from '../../components/Card/Card'
import SimpleSlider from '../../components/sliderCard/Slider'
import Title from '../../components/Title/Title'
import Underheader from '../../components/underheader/Underheader'
import css from './HomePage.module.css'
import axios from 'axios'
import Api from '../../components/api/Api'

function HomePage() {
   const [pizzas,setPizzas] = useState([]);
   const [error,setError]=useState('')
   

   const getPizzas =async ()=> { 
    // const res = await fetch ('https://63e4e6f44474903105f47899.mockapi.io/pizza')

    const res = await Api.getPizzas()
    
    if(res.status ==200){
    // const data = await res.json()
    setPizzas(res.data)
    }else{ 
      setError('Somting went wrong')
    }
   }
   useEffect(() => { 
    getPizzas()
   },[])
  return (
    <div className='container'>
        <Underheader/>
         <SimpleSlider/>
         <section className='pizzamain'>
         <Title position='center' title='Пиццы'/>
         <div className={css.cards}>
          {
            pizzas.map((item) => <Card key={item.id} {...item}/>)
          }
         </div>
         </section>
         <section>
          <Title position='left' title='Напитки'/>
         </section>
         <section>Drinks</section>
    </div>
  )
}

export default HomePage