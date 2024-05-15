import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Post } from './components/post';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/alanlimadev.png',
      name: 'Alan Lima',
      role: 'Frontend Developer',
    },
    content: [
      { type: 'paragraph', value: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        value:
          'Acabei de subir mais um projeto no meu portifa. É um jeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é torCare 🚀',
      },
      { type: 'link', value: '👉 jane.design/doctorcare' },
      { type: 'link', value: '#novoprojeto' },
      { type: 'link', value: '#nlw' },
      { type: 'link', value: '#rocketseat' },
    ],
    publishedAt: new Date('2024-05-15 12:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/pauloherbt.png',
      name: 'Paulo Herbert',
      role: 'Backend Developer',
    },
    content: [
      { type: 'paragraph', value: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        value:
          'Acabei de subir mais um projeto no meu portifa. É um jeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é torCare 🚀',
      },
      { type: 'link', value: '👉 jane.design/doctorcare' },
      { type: 'link', value: '#novoprojeto' },
      { type: 'link', value: '#nlw' },
      { type: 'link', value: '#rocketseat' },
    ],
    publishedAt: new Date('2024-05-12 12:30:00'),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
