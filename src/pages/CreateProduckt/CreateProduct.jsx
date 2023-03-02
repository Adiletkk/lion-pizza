import axios from 'axios'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Api from '../../components/api/Api'
import Button from '../../components/button/Button'
import Title from '../../components/Title/Title'
import css from './CreateProduct.module.css'

function CreateProduct() {
    const [name,setName] = useState('')
    const [prise,setPrise] = useState('')
    const [description,setDescription] = useState('')
    const [type,settype] = useState('')
    const [image,setImage] = useState('')
    const [isSanding,SetSending] = useState(false)

    const navigate=useNavigate()

    const submit = (e) => { 
        e.preventDefault();
        SetSending( true)
            Api.createProduckt({ name,prise,description,image,type })
    
        .then(() => {
            SetSending(false)
            alert("добавление")
            navigate('/admin')
        })
        .catch((error)=>{
            console.log(error)
            SetSending(false)
        })
 
    }
    const newLocal = 'Продукт добавляется....'
    return (
        <div className={css.container}>
            <Title title='Добавить пиццу' position='center'/>
            <form onSubmit={submit} className={css.addpizza}>
            <input type="text" placeholder='Название' value={name} onChange={(e) => setName(e.target.value) } />
            <input type="text" placeholder='цена'value={prise} onChange={(e) => setPrise(e.target.value) }  />
            <textarea placeholder='Описание'value={description} onChange={(e) => setDescription(e.target.value) } />
            <select value={type} onChange={(e) => settype(e.target.value) }>
                <option value="pizza" placeholder='Пицца' >Пицца</option>
                <option value="drink" placeholder='Напитки'>Напитки</option>
            </select>
            <input type="text"  placeholder='foto' value={image} onChange={(e) => setImage(e.target.value) }/>
 <Button  disabled={isSanding} title={isSanding ? newLocal : "добавление продкута"}/>
            </form>

        </div>
    )
}

export default CreateProduct