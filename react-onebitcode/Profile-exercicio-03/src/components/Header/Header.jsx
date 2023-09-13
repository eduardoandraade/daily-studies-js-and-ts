import React, { useState, useSyncExternalStore } from 'react'
import styles from './styles.module.css'


const Header = () => {
    const [name, setName] = useState("Duds")
    const [count, setCount] = useState(0);

    const handleChange = () => {
        const names = ['Isa', 'Duds', 'Chico'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }

    const handleClick = () => {
        setCount(count + 1);
        console.log(count);
    }
    const handleClick2 = (name) => {
        console.log(count)
    }

    return (
    <main className={styles.header}>
        <p 
            className={styles.text}
            onDoubleClick={handleClick}
        >
            Oi, {name}</p>
        <button onClick={handleChange}>name change</button>
        <button onClick={handleClick}>Clique aqui</button>
        <button onClick={handleClick2}>Clique aqui</button>
    </main>
  )
}

export default Header