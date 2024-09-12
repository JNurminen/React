import './App.css'
import React, {useState} from 'react'

const Laskuri = (props) => {

// komponentin tilan määrittely
const [luku, setLuku] = useState(0)

  return (
    <>
        <h1>{luku}</h1>

        <button onClick={() => setLuku(luku + 1)}>+</button>
        <button onClick={() => setLuku(luku - 1)}>-</button>
        <button onClick={() => setLuku(0)}>Reset</button>
      
        <button onClick={props.huomio}>Huomio!</button>
    </>

  )
}

export default Laskuri