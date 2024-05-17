import { ThumbsUp, Trash } from 'lucide-react';
import styles from './comment.module.css';
import { Avatar } from './avatar';

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/alanlimadev.png" alt="" />

      <div className={styles.commentBox}>
        <div hasBorder={false} className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alan Lima</strong>
              <time
                title="30 de Abril às 13:40h"
                dateTime="2024-04-30 13:40:20"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir<span>0</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
