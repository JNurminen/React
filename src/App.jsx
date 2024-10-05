import React, {useState, useEffect} from 'react'
import './App.css'
import Laskuri from './Laskuri'
import CustomerList from './CustomerList'
import UserList from './UserList'
import Message from './Message'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const App = () => {

// Statet messagen näyttämistä varten
const [message, setMessage] = useState('')
const [isPositive, setIsPositive] = useState(true)
const [showMessage, setShowMessage] = useState('')
const [loggedInUser, setLoggedInUser] = useState('')

// useEffect hook, joka tarkistaa onko käyttäjä jo kirjautunut
useEffect(() => {
  let storedUser = localStorage.getItem("username")
  if (storedUser !== null) {
    setLoggedInUser(storedUser)
  }
},[])

// Logout napin toiminnallisuus
const logout = () => {
  localStorage.clear()
  setLoggedInUser('')
}

  return (
    <div className="App">

      {!loggedInUser && <Login setMessage={setMessage} setIsPositive={setIsPositive}
        setShowMessage={setShowMessage} setLoggedInUser={setLoggedInUser} />}

      {loggedInUser &&    
        <Router>
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href='/Customers'>Customers</Nav.Link>
              <Nav.Link href='/Users'>Users</Nav.Link>
              <Nav.Link href='/laskuri'>Laskuri</Nav.Link>
              <button onClick={() => logout()}>Logout</button>
            </Nav>
          </Navbar>

          <h1>Northwind Corporation</h1>
          

          {showMessage && <Message message={message} isPositive={isPositive} />}

          <Routes>
            <Route path="/Customers"
              element={<CustomerList setMessage={setMessage} setIsPositive={setIsPositive} 
              setShowMessage={setShowMessage} />}>
            </Route>

            <Route path="/Users"
              element={<UserList setMessage={setMessage} setIsPositive={setIsPositive} 
              setShowMessage={setShowMessage} />} >
            </Route>
            
            <Route path="/laskuri" 
              element={<Laskuri />}>
            </Route>
          </Routes>
        </Router>
      }  
    </div>
  )
}

export default App
