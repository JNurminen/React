import './App.css'
import React, {useState} from 'react'

// propsi otetty vastaan nimellä 
const Laskuri = () => {

// komponentin tilan määrittely
const [luku, setLuku] = useState(0)

  return (
    <>
        <h1>{luku}</h1>

        <button onClick={() => setLuku(luku + 1)}>+</button>
        <button onClick={() => setLuku(luku - 1)}>-</button>
        <button onClick={() => setLuku(0)}>Reset</button>
      
        
    </>

  )
}

export default Laskuri