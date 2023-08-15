import React from 'react'

export const StatusText = () => {
    const status = true
  return (
    <h3
      style={{
        color: status ? "#00ff9f" : "#f64348"
      }}
    >Current status: {status ? "ON" : "OFF"}</h3>
  )
}
