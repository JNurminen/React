import React, {useState} from 'react'
import './App.css'
import Laskuri from './Laskuri'
import Viesti from './Viesti'
import Posts from './Posts'
import CustomerList from './CustomerList'
import Message from './Message'

const App = () => {

// komponentin tilan määrittely
const [showLaskuri, setShowLaskuri] = useState(false)

// Statet messagen näyttämistä varten
const [showMessage, setShowMessage] = useState(false)
const [message, setMessage] = useState('')
const [isPositive, setIsPositive] = useState(false)

const huomio =() => {
  alert('Huomio!')
}
  return (
    <div className="App">
      <h1 style={{ color: 'orange', textDecoration: 'underline' }}>Hello Vite + React!</h1>

      {showMessage && <Message message={message} isPositive={isPositive} />}

      <Posts />
      <CustomerList setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} />

      {showLaskuri && <Laskuri huomio={huomio} />}
      {showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}
      {!showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}

      <Viesti teksti="Tervehdys app komponentistä" />
    </div>
  )
}

export default App
