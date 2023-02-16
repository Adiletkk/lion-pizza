import React from 'react'
import css from './Slider.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Component } from "react";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
      return (
      <div>
        <Slider {...settings}>
          <div className='slide'>
            <img className={css.foto} src='https://i.pinimg.com/236x/8a/de/fe/8adefe5af862b4f9cec286c6ee4722cb.jpg' alt='1foto'/>
          </div>
          <div className='slide'>
            <img className={css.foto}  src='https://img2.akspic.ru/previews/9/3/4/0/7/170439/170439-svet-purpur-drevesnyj_ugol-ogon-plamya-500x.jpg' alt='2foto'/>
          </div>
          <div className='slide'>
            <img className={css.foto}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNucRKn044wOGq4vv4_xDngt3hH2RvvpPHw&usqp=CAU" alt="3foto" />
          </div>
          <div className='slide'>
            <img className={css.foto}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVpRUXp5jGcKuEOgfMdaOc_4ibZA073KSPkw&usqp=CAU" alt="4foto" />
          </div>
          <div className='slide'>
            <img className={css.foto}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtWdO_hXtchoJdzOZwp6RVH9yOnlKvnbPxA&usqp=CAU" alt="5foto" />
          </div>
          <div className='slide'>
            <img className={css.foto}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfhp2bg8tGFpgWuK5vGZyL2OrtqPEGOSGvTA&usqp=CAU" alt="6foto" />
          </div>
          <div className='slide'>
            <img className={css.foto}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95OL_wasNiQJ1avaC2LcDsMhmNGgUEZJE45eCU5qFG5bIOhDQ9uwBllqxUeZzv_TPiJw&usqp=CAU" alt="7foto" />
          </div>
          <div className='slide'>
            <img className={css.foto}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZQX5oyZpvMVRvtoqUvEsSlZrXgVOTnekF4tjts05HN_u14fG4NIuOB5CP-3uujbPvyo&usqp=CAU" alt="8foto" />
          </div>
          <div className='slide'>
            <img className={css.foto}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSH3hnLVS2B1KHgyLk7Vuo45cL8XvlCbIWsHV3by2vgRHx173Vs2pUty7DAJbHccqYetk&usqp=CAU" alt="9foto" />
          </div>
          <div className='slide'>
            <img className={css.foto}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIRyeTIt-ZKLSC51PzMNtsS9K8NuiS1NhcQ&usqp=CAU" alt="10foto" />
          </div>
        </Slider>
      </div>
    );
  }
}