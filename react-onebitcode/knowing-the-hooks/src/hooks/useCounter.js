import { useState } from 'react'

function getInitialValue() {
    console.log("obtendo o valo inicial")
    return 1 + 1;
}

export default function useCounter() {
    const [ count, setCount ] = useState(() => getInitialValue());

    const increment = () => {
        setCount((currentState) => currentState + 1 );
        setCount((currentState) => currentState + 1 );
    }
    return { count, increment }
}