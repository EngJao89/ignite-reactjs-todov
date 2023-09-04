import { Information } from './Information';

import styles from './Main.module.css';
import ToDo from './ToDo';

export function Main() {
  return (
    <main className={styles.wrapper}>
      <Information />

      <ToDo />
    </main>
  );
}
