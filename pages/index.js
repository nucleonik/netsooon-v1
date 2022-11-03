

import HeadComponent from '../components/HeadComponent'
import IndexComponent from '../components/page/IndexComponent'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <HeadComponent/>

      <main className={styles.main}>
        <IndexComponent/>
      </main>

      
    </div>
  )
}
