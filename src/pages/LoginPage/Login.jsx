import React, { useState } from 'react'
import css from './Login.module.css'



function Login({setAuth }) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const submit = (e) => {
    e.preventDefault();
    if (login === 'admin' && password === 'admin') {
      setAuth(true)
    }
  };
  return (
    <form className={css.registracion} onSubmit={submit} >
      <div className={css.inpute}>
        <p>Логин</p>
      <input  value={login} onChange={(e) => setLogin(e.target.value)} type='text' placeholder='Логин' />
      </div>
      <div className={css.inpute} >
        <p>Пороль</p>
      <input  value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Пороль' />
      </div>
      <div className={css.send}>
      <button >Отправить</button>
      </div>
    </form>
  )
}

export default Login