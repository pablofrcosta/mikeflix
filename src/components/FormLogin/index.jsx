import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useData from "../../hooks/useData"
import { AiFillEye } from 'react-icons/ai'
import style from './style.module.css'

export default function FormLogin() {

  const [user, setUser] = useState({ user: "", password: "" })
  const { users } = useData()
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      navigate('/users');
    }
  }, []);

  const handleChange = (ev) => {
    const { name, value } = ev.target
    setUser({ ...user, [name]: value })
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { user: inputUser, password: inputPassword } = user;

    const userFound = users.find(
      (register) =>
        register.user === inputUser && register.password === inputPassword
    );

    if (userFound) {
      alert('Login bem-sucedido');
      localStorage.setItem("loggedInUser", JSON.stringify(userFound));
      navigate("/users");
    } else {
      alert('Login falhou');
    }
  };

  return (
    <div className={style.container}>
      <div>
        <form onSubmit={handleSubmit} className={style.form}>
          <h1 className={style.title}>MIKEFLIX</h1>
          <div className={style.inputs}>
            <h1>Entrar</h1>
            <label htmlFor="user"></label>
            <input type="text" name="user" id="user" value={user.user} onChange={handleChange} placeholder="Usuário" />
            <label htmlFor="password"></label>
            <div>
              <input type={showPassword ? "text" : "password"} name="password" id="password" value={user.password} placeholder="Senha" onChange={handleChange} />
              <span onClick={togglePassword}><AiFillEye size={20} /></span>
            </div>
          </div>
          <div className={style.buttons}>
            <button type="submit">Entrar</button>
            <span>Não tem login? <Link to='/register' style={{ color: '#FF6C6C' }}>Registrar-se</Link></span>
          </div>

        </form>
      </div>
    </div>
  )
}