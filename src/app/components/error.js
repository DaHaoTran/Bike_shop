"use client"
import React from 'react'
import styles from './error.module.css'

export default function Error({ number }) {
  return (
    <div className={styles.error_container}>
      <div>
        <h1 className={styles.error_number_label}>{number}</h1>
        <div className={styles.error_button_container}>
          <button className='px-4' onClick={(x => document.location.href= '/')}>Reload</button>
        </div>
      </div>
      <h5 className={styles.error_sub_title}>Something <br /> went wrong :(( <br /> ...</h5>
    </div>
  )
}
