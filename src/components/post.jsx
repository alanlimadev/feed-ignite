import { Comment } from './comment';
import styles from './post.module.css';

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/alanlimadev.png" />
          <div className={styles.authorInfo}>
            <strong>Alan Lima</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="30 de Abril às 13:40h" dateTime="2024-04-30 13:40:20">
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>Acabei de subir mais um projeto no meu portifa. É um</p>
        projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é
        DoctorCare 🚀
        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto </a>
          <a href="">#nlw </a>
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea type="text" placeholder="Comente algo..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
