
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'
import { RiNetflixFill } from 'react-icons/ri'
import { useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";


export default function Users() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const loadingPage = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
      navigate('/home')
    }, 2000)
  }

  const getUser = () => {
    const getUser = localStorage.getItem('loggedInUser')

    if (getUser) {
      const user = JSON.parse(getUser)
      const userName = user.user
      return userName
    }
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (!loggedInUser) {
      navigate('/');
    }
  }, [navigate]);


  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ClipLoader color="#ff0000" size={48} />
          </div>
        ) : (
          <div>
            <span className={styles.card} onClick={loadingPage}>
              <RiNetflixFill />
            </span>
            <p className={styles.userName}>{getUser()}</p>
          </div>
        )}
      </div>
    </div>
  )




}