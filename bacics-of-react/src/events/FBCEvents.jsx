import React, { useState } from 'react'

const FBCEvents = () => {
  const[count,setCount]=useState(0);
  return (
    <div>
      <hr />
      <h1>fbc component</h1>
      <h2>{count}</h2>
      <button></button>
    </div>
  )
}

export default FBCEvents
