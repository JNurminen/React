import React, {useState} from 'react'
import './App.css'
import Laskuri from './Laskuri'
import Viesti from './Viesti'
import Posts from './Posts'

const App = () => {

// komponentin tilan määrittely
const [showLaskuri, setShowLaskuri] = useState(false)

const huomio =() => {
  alert('Huomio!')
}
  return (
    <div className="App">
      <h1 style={{ color: 'orange', textDecoration: 'underline' }}>Hello Vite + React!</h1>

      <Posts />

      {showLaskuri && <Laskuri huomio={huomio} />}
      {showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}
      {!showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}

      <Viesti teksti="Tervehdys app komponentistä" />
    </div>
  )
}

export default App
