import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h3>Contact</h3>
        <p>
            <Link to='/contact/1'>Forma de contato 1</Link>
        </p>
        <p>
            <Link to='/contact/2'>Forma de contato 2</Link>
        </p>
        <p>
            <Link to='/contact/2'>Forma de contato 2</Link>
        </p>
    </div>
    
  )
}

export default Contact