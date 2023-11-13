import { AiOutlineSearch } from 'react-icons/ai'
import { CgLogOff } from 'react-icons/cg'
import './style.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const navigate = useNavigate()

  const getUser = () => {
    const getUser = localStorage.getItem('loggedInUser')

    if (getUser) {
      const user = JSON.parse(getUser)
      const userName = user.user
      return userName
    }
  }

  const userExit = () => {
    const confirma = confirm('Você confirma essa ação?')
    if (confirma) {
      localStorage.removeItem('loggedInUser')
      navigate('/', { replace: true })

    }

    console.log(confirma)
  }

  return (
    <header>
      <nav>
        <strong onClick={scrollToTop} style={{ cursor: 'pointer' }}><Link to={''} style={{ textDecoration: 'none', color: 'red' }}>MIKEFLIX</Link></strong>
        <div>
          <p>{getUser()}</p><CgLogOff size={23} style={{ cursor: "pointer" }} onClick={userExit} />
        </div>
      </nav>
    </header>
  )
}