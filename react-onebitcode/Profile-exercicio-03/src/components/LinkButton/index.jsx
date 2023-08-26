import React from 'react'
import styles from './styles.module.css'

const LinkButton = (props) => {
  return (
    <a 
        href={props.href} 
        target='_blank' 
        className={styles.btn}
    >
        {props.children}
    </a>
  )
}

export default LinkButton