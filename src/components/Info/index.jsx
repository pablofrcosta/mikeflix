import { useLocation } from 'react-router-dom';
import style from './style.module.css'
import { TiStarOutline } from 'react-icons/ti'

export default function InfoMovie() {
  const location = useLocation();
  const poster = location.state;
  const image_path = 'https://image.tmdb.org/t/p/w500'
  if (!poster) {
    return <div>Nenhuma informação encontrada.</div>;
  }
  return (
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.cardInfo}>
          <div>
            <p>{poster.first_air_date}</p>
            <p>{poster.release_date}</p>
            <h1>{poster.title}</h1>
            <h1>{poster.name}</h1>
            <p>{poster.vote_average}<TiStarOutline /><TiStarOutline /><TiStarOutline /> </p>
            <p>Description:</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore assumenda architecto ut odio nostrum at nam enim alias cupiditate eos saepe, quas expedita quaerat illo vitae in voluptatibus voluptatum sequi perferendis. Autem, totam. Vitae dolores sint nihil quae. Dolore dolorum accusamus, pariatur aperiam quidem similique consequuntur assumenda exercitationem deserunt mollitia.</p>
          </div>
          <img src={`${image_path}${poster.poster_path}`} alt={poster.title} className={style.img} />
        </div>
      </div>
    </div>
  )
}