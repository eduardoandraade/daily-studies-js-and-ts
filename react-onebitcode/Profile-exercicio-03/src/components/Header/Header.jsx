import React from 'react'
import styles from './styles.module.css'


const Header = () => {
    const handleChange = () => {
        const names = ['Isa', 'Duds', 'Chico'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleClick = () => {
        console.log("You Clicked it / Você clicou")
    }
    const handleClick2 = (name) => {
        console.log(`${name} was clicked / Duds clicou  `)
    }
    const handleClick3 = (ev) => {
        console.log(ev.target.innerText)
    }

    return (
    <div className={styles.header}>
        <div 
            className={styles.text}
            onDoubleClick={handleClick}
        >
            Oi, {handleChange()}</div>
        <button onClick={handleClick}>Clique aqui</button>
        <button onClick={() => handleClick2('Duds')}>Clique aqui</button>
        <button onClick={(ev) => handleClick3(ev)}>Clique aqui</button>
    </div>
  )
}

export default Header