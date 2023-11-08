import { AiOutlineSearch } from 'react-icons/ai'
import './style.css'
import { Link } from 'react-router-dom';

export default function Header() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  const getUser = () => {
    const getUser = localStorage.getItem('loggedInUser')

    if (getUser) {
      const user = JSON.parse(getUser)
      const userName = user.user
      return userName
    }
  }

  return (
    <header>
      <nav>
        <strong onClick={scrollToTop} style={{ cursor: 'pointer' }}><Link to={''} style={{ textDecoration: 'none', color: 'red' }}>MIKEFLIX</Link></strong>
        <div>
          <input type="text" name="search" id="search" placeholder='Procurar filmes' />
          <AiOutlineSearch size={30} />
          <p>{getUser()}</p>
        </div>
      </nav>
    </header>
  )
}