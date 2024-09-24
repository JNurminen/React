import './App.css'
import React, {useState, useEffect} from 'react'
import UserService from './services/User'

 
const UserList = ({setIsPositive, setShowMessage, setMessage}) => {

// komponentin tilan määrittely
const [users, setUsers] = useState([])
const [lisäystila, setLisäystila] = useState(false)
const [muokkaustila, setMuokkaustila] = useState(false)
const [reload, reloadNow] = useState(false)
const [muokattavaUser, setMuokattavaUser] = useState(false)
const [search, setSearch] = useState('')

useEffect(() => {
  UserService.getAll().then(data => {
    setUsers(data)
})
},[lisäystila, reload, muokkaustila]
)

// Hakukentän onChange-tapahtumankäsittelijä
const handleSearchInputChange = (event) => {
  setSearch(event.target.value.toLowerCase())
}

const editUsers = (user) => {
  setMuokattavaUser(user)
  setMuokkaustila(true)
}

  return (
    <>
        <h2><nobr>Users</nobr>

        {!lisäystila && <button className="nappi" onClick={() => setLisäystila(true)}>Add new</button>}</h2>

        {!lisäystila && !muokkaustila &&
        <input placeholder='Search by Last Name' value={search} onChange={handleSearchInputChange} />}

        <table id="userTable">
            <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Acceslevel</th>
            </thead>
            <tbody>
        {
            users && users.map(u =>
              {
                const lowerCaseName = u.lastname.toLowerCase()
                if (lowerCaseName.indexOf(search) > -1) {
                  return(
                    <tr key={u.userId}>
                      <td>{u.firstname}</td>
                      <td>{u.lastname}</td>
                      <td>{u.email}</td>
                      <td>{u.accesslevelId}</td>
                    </tr>
                  )
                }
        }
        )
      }     
                  </tbody>
                  </table>

    </>

  )
}

export default UserList