import React from 'react'
import Slider from 'react-slick'
import Card from '../../components/Card/Card'
import SimpleSlider from '../../components/sliderCard/Slider'
import Title from '../../components/Title/Title'
import Underheader from '../../components/underheader/Underheader'

function HomePage() {
  return (
    <div className='container'>
        <Underheader/>
         <SimpleSlider/>
         <section>
         <Title position='center' title='Пиццы'/>
         <Card/>
         </section>
         <section>
          <Title position='left' title='Напитки'/>
         </section>
         <section>Drinks</section>
    </div>
  )
}

export default HomePage