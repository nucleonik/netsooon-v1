import Link from 'next/link'
import React from 'react'
import styles from '../page/IndexComponent.module.css'
const IndexComponent = () => {
  return (
    <div>
      <nav>
      <div className={styles.navt}>
        <div className={styles.navl}>
          <img src='logonetsooon.svg' alt='netsoon logo'/>
            <input className={styles.inputsearch} placeholder='Search'></input>
        </div>
        <div className={styles.navr}>
          <h1>Muhammad Asif Hossain</h1>
        </div>
      </div>
      </nav>
      <div className={styles.herotop}>
        <Link href='post'><h4>Post</h4></Link>
        <Link href='videos'><h4>Videos</h4></Link>
        <Link href='groups'><h4>Groups</h4></Link>
        <Link href='friends'><h4>Friends</h4></Link>
        <Link href='messages'><h4>Messages</h4></Link>
        <Link href='notifications'><h4>Notfications</h4></Link>
        <Link href='profile'><h4>Profile</h4></Link>
        <Link href='settings'><h4>Settings</h4></Link>

      </div>

    </div>
  )
}

export default IndexComponent