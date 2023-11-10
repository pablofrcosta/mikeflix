import { useState } from "react"
import User from "../../entities/User"
import useData from "../../hooks/useData"
import { AiFillEye } from 'react-icons/ai'
import { Link, useNavigate } from "react-router-dom"
import style from './style.module.css'


export default function FormRegister({ userUpdate }) {
  const userDefault = {
    name: "",
    password: ""
  }

  const { addUser, users } = useData()
  const [user, setUser] = useState({ user: "", password: "", passwordConfirm: "" })
  const [data, setData] = useState(userUpdate ? userUpdate : userDefault)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  // usuario vai ter uma array de objetos com [{user, password, id}]

  const handleChange = (ev) => {
    const { name, value } = ev.target
    setUser({ ...user, [name]: value })
  }

  const newUser = () => {
    const validUser = new User(user)
    if (user.password !== '' && user.password === user.passwordConfirm) {
      setData(validUser)
      alert('Usuário cadastrado com sucesso!')
    } else {
      alert('Error')
    }
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    console.log(data)
    addUser(data)
    navigate('/')
    console.log(users)
  }


  return (
    <div className={style.container}>
      <div>
        <form onSubmit={handleSubmit} className={style.form}>
          <h1 className={style.title}>MIKEFLIX</h1>
          <div className={style.inputs}>
            <h1>Registrar</h1>
            <label htmlFor="user"></label>
            <input type="text" name="user" id="user" value={user.user} onChange={handleChange} placeholder="Usuário" />
            <div>
              <label htmlFor="password"></label>
              <input type={showPassword ? "text" : "password"} name="password" id="password" value={user.password} placeholder="Senha" onChange={handleChange} />
              <span onClick={togglePassword}><AiFillEye size={20} /></span>
              <label htmlFor="password"></label>
              <input type='password' name="passwordConfirm" id="passwordConfirm" value={user.passwordConfirm} placeholder="Confirmar senha" onChange={handleChange} />
            </div>
          </div>
          <div className={style.buttons}>
            <button type="submit" onClick={newUser}>Registrar</button>
            <span>ja é cadastrado? faça <Link to='/' style={{ color: '#FF6C6C' }}>Login</Link></span>
          </div>
        </form>

      </div>
    </div>
  )
}