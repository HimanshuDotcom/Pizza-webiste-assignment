import React from 'react'
import _styles from './styles.module.css';

export default function Footer() {
  return (
        <div className={_styles.footer}>
            <h1 className={_styles.header}>Opening Hours</h1>
            <div className = {_styles.body}>
                <div className={_styles.hours}>
                    <p>Mon CLOSED</p>
                    <p>Tue &amp; Wednesday 10.00 - 24.00</p>
                    <p>Thursday 10:00 - 24:00</p>
                </div>
                <div className={_styles.hours}>
                    <p>Friday 10:00 - 12:00</p>
                    <p>Saturday 10:00 - 23:00</p>
                    <p>Sunday Closed</p>
                </div>
            </div>
            <div className={_styles.contact}>
                <p>Phone : 9991291431</p>
                <p>Email : arorahimanshu472@gmail.com</p>
            </div>
        </div>
  )
}

