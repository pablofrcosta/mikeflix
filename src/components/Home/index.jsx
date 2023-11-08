import { Link } from 'react-router-dom'
import styles from './style.module.css'
import { useEffect, useState } from 'react'

export default function HomeMovie() {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])


  const image_path = 'https://image.tmdb.org/t/p/w500'


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWZiOTRkZjBlYTJhZDAwNDNhM2JhZmM1OGI5MDI0MSIsInN1YiI6IjY1MzExZGUxYzQzOWMwMDBlMTc1ZTljZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.30fBT7_jfohVQISsmCgX6tKqW-cEoLt8V43S2rsR6Pw'
    }
  };

  const optionsSeries = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWZiOTRkZjBlYTJhZDAwNDNhM2JhZmM1OGI5MDI0MSIsInN1YiI6IjY1MzExZGUxYzQzOWMwMDBlMTc1ZTljZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.30fBT7_jfohVQISsmCgX6tKqW-cEoLt8V43S2rsR6Pw'
    }
  };

  async function fetchMovie() {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    const data = await response.json()
    return data.results
  }

  async function fetchSerie() {
    const response = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', optionsSeries)
    const data = await response.json()
    return data.results
  }

  useEffect(() => {
    fetchMovie().then(results => { setMovies(results) })
    fetchSerie().then(results => { setSeries(results) })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div>
          {movies.map(movie => (
            <div key={movie.id} className={styles.card} >
              <Link to={`/home/info/${movie.id}`} state={movie} className={styles.link}><img src={`${image_path}${movie.poster_path}`} alt={movie.title} className={styles.imageMovies} /></Link>
            </div>
          ))
          }
          {series.map(serie => (
            <div key={serie.id}>
              <Link to={`/home/info/${serie.id}`} state={serie}><img src={`${image_path}${serie.poster_path}`} alt={serie.title} className={styles.imageMovies} /></Link>
            </div>
          ))}
        </div>
      </div >
    </div >
  )
}
