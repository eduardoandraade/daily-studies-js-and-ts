import React from 'react'

function sum(a,b) {
    return a + b
  }

const Subtitle = () => {
  return (
    <h2
      style={{
        color: "red"
      }}
    >It's easy, like 1 + 1 is {sum(1,1)}</h2>
  )
}

export default Subtitle