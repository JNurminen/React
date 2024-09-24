import React, {useState} from 'react'
import './App.css'
import Laskuri from './Laskuri'
import CustomerList from './CustomerList'
import UserList from './UserList'
import Message from './Message'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {

// komponentin tilan määrittely
const [showLaskuri, setShowLaskuri] = useState(false)

// Statet messagen näyttämistä varten
const [showMessage, setShowMessage] = useState(false)
const [message, setMessage] = useState('')
const [isPositive, setIsPositive] = useState(false)


  return (
    <div className="App">
      <Router>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
                <Nav.Link href='/Customers'>Customers</Nav.Link>
                <Nav.Link href='/Users'>Users</Nav.Link>
                <Nav.Link href='/laskuri'>Laskuri</Nav.Link>
        </Nav>
      </Navbar>

      <h1>Northwind Corporation</h1>
      <br></br>

      {showMessage && <Message message={message} isPositive={isPositive} />}

      <Routes>
          <Route path="/Customers"
          element={<CustomerList setMessage={setMessage} setIsPositive={setIsPositive} 
          setShowMessage={setShowMessage} />}>
          </Route>

          <Route path="/Users"
          element={<UserList setMessage={setMessage} setIsPositive={setIsPositive} 
          setShowMessage={setShowMessage} />}>
          </Route>
          
          <Route path="/laskuri" 
          element={<Laskuri />}>
        </Route>
        
        </Routes>
      </Router>
    </div>
  )
}

export default App
