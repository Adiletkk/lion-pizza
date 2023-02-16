import React from 'react'
import Slider from 'react-slick'
import Card from '../../components/Card/Card'
import SimpleSlider from '../../components/sliderCard/Slider'
import Title from '../../components/Title/Title'
import Underheader from '../../components/underheader/Underheader'
import css from './HomePage.module.css'

function HomePage() {
  return (
    <div className='container'>
        <Underheader/>
         <SimpleSlider/>
         <section>
         <Title position='center' title='Пиццы'/>
         <div className={css.cards}>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
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