import './App.css'
import React, {useState} from 'react'
import LoginService from './services/Auth'
import md5 from 'md5'

const Login = ({setIsPositive, setMessage, setShowMessage, setLoggedInUser}) => {

// Komponentin tilan määritys
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')


// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
      event.preventDefault()
      var userForAuth = {
        username: username,
        password: password // jos salasanaa ei ole salattu
        //password: md5(password) // jos salasanat on salattu md5:lla
    }
    
    // console.log(userForAuth)

    LoginService.authenticate(userForAuth)
    .then(response => {
      if (response.status === 200) {

        // tallennetaan käyttäjän tiedot local storageen (f12 application välilehti)
        localStorage.setItem("username", response.data.username)
        localStorage.setItem("accesslevelId", response.data.accesslevelId)
        localStorage.setItem("token", response.data.token)

        // asetetaan app komponentissa olevaan stateen
        setLoggedInUser(response.data.username)

       setMessage(`Logged in as: ${userForAuth.username}`)
       setIsPositive(true)
       setShowMessage(true)
      
       setTimeout(() => {
        setShowMessage(false)
       }, 5000)

    }

      })
      .catch(error => {
        setMessage(error)
        setIsPositive(false)
        setShowMessage(true)

        setTimeout(() => {
          setShowMessage(false)
         }, 6000)
      })
    }

    // kenttien tyhjennys
    const emptyFields = () => {
        setUsername("")
        setPassword("")
    }


  return (
    <div id="loginWindow">
       <h2>Login</h2>

       <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={username} placeholder="Username"
                    onChange={({ target }) => setUsername(target.value)} />
            </div>
            <div>
                <input type="password" value={password} placeholder="Password"
                    onChange={({ target }) => setPassword(target.value)} />
            </div>
            
         <input type='submit' value='Login' />
         <input type='button' value='Empty' onClick={() => emptyFields()}  />
       </form>

    </div>
  )
}

export default Login