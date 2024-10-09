import './App.css'
import React, {useState} from 'react'
import UserService from './services/User'

// props on nimeltään product-olio
const User = ({user, editUser, setIsPositive, setMessage, setShowMessage, reload, reloadNow}) => {

// komponentin tilan määrittely
const [showDetails, setShowDetails] = useState(false)

const deleteUser = (user) => {
    let vastaus = window.confirm(`Remove User: ${user.userName}?`)
    if (vastaus === true) {    

    UserService.remove(user.userId)
    .then(res => {
        if (res.status === 200) {
        setMessage(`Successfully removed user: ${user.userName}`)
        setIsPositive(true)
        setShowMessage(true)
        window.scrollBy(0, -10000)    // scrollataan ylös jotta nähdään viesti
        
        setTimeout(() => {
            setShowMessage(false)},
            5000)
        reloadNow(!reload)    // pakotetaan UserList komponentti päivittämään käyttäjälista            
        }
    })
    .catch(error => {
        setMessage(error)
        setIsPositive(false)
        setShowMessage(true)
        window.scrollBy(0, -10000)    // scrollataan ylös jotta nähdään viesti
        
        setTimeout(() => {
            setShowMessage(false)},
            5000)            
    })
}
    else {
        setMessage('Poisto peruttu')
        setIsPositive(true)
        setShowMessage(true)
        window.scrollBy(0, -10000)    // scrollataan ylös jotta nähdään viesti
        
        setTimeout(() => {
            setShowMessage(false)},
            5000)            
    }
}

  return (
    <div className='userDiv'>

        <h4 style={{cursor: 'pointer'}} onClick={() => setShowDetails(!showDetails)}>

           {user.userName} 
        </h4>

        {showDetails && <div className="userDetail">
            <h3>{user.userName}</h3>
            <button onClick={() => deleteUser(user)}>Delete</button>
            <button onClick={() => editUser(user)} >Edit</button>

            <table>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>AccesslevelId</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.userId}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.accesslevelId}</td>
                        </tr>
                    </tbody>
                </table></div>}


        </div>
  )
}

export default User