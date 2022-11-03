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
      <div className={styles.herodown}>
          <div className={styles.herodownl}>
              <img src='ns.png' alt='nslogo'/>
              <img src='cs.png' alt='nslogo'/>
              <img src='ds.png' alt='nslogo'/>
              <img src='gs.png' alt='nslogo'/>
              <img src='is.png' alt='nslogo'/>
              <img src='ms.png' alt='nslogo'/>
              <img src='ss.png' alt='nslogo'/>
              <img src='vs.png' alt='nslogo'/>
              <img src='vss.png' alt='nslogo'/>
              <img src='ws.png' alt='nslogo'/>
          </div>
          <div className={styles.herodownm}>
            <div className={styles.status}>
              <input className={styles.inputstatus} placeholder='           Write a status'></input>
              <div className={styles.statusdown}>
                <div className={styles.statusdownl}>
                  <img src='photo.png'/>
                    <p>Photo</p>
                  <img src='video.png'/>
                    <p>Video</p>
                    </div>
                  <div className={styles.statusdownr}>
                      <h3>Post</h3>
                  </div>
              </div>

            </div>

          </div>
          <div className={styles.herodownr}>
              <div className={styles.herodownrprofile} style={{ backgroundImage: `url("bi.png")`, backgroundPosition: 'center', width: '100%', backgroundRepeat: 'no-repeat' }}>
                <img src='pp.png'/>
              </div>
          </div>
      </div>

    </div>
  )
}

export default IndexComponent