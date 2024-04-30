import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Post } from './components/post';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="John Doe" content="Hello, world!" />
          <Post author="Jane Doe" content="Goodbye, world!" />
        </main>
      </div>
    </>
  );
}
