import './App.css'
import React, {useState, useEffect} from 'react'
import UserService from './services/User'
import User from './User'
import UserAdd from './UserAdd'
import UserEdit from './UserEdit'

 
const UserList = ({setIsPositive, setShowMessage, setMessage}) => {

// komponentin tilan määrittely
const [users, setUsers] = useState([])
const [showUsers, setShowUsers] = useState(false)
const [lisäystila, setLisäystila] = useState(false)
const [muokkaustila, setMuokkaustila] = useState(false)
const [reload, reloadNow] = useState(false)
const [muokattavaUser, setMuokattavaUser] = useState(false)
const [search, setSearch] = useState("")

// useEffect-hook, joka ajetaan aina kun komponentti renderöidään
useEffect(() => {

  const token = localStorage.getItem("token")
  UserService.setToken(token)

  UserService.getAll().then(data => {
    setUsers(data)
})
},[lisäystila, reload, muokkaustila]
)

// Hakukentän onChange-tapahtumankäsittelijä
const handleSearchInputChange = (event) => {
    setShowUsers(true)
  setSearch(event.target.value.toLowerCase())
}

const editUser = (user) => {
  setMuokattavaUser(user)
  setMuokkaustila(true)
}

return (
    <>
        <h2><nobr style={{ cursor: 'pointer'}}
        onClick={() => setShowUsers(!showUsers)}>Users</nobr>


        {!lisäystila && <button className="nappi" onClick={() => setLisäystila(true)}>Add new</button>}</h2>

        {!lisäystila && !muokkaustila &&
        <input placeholder="Search by Last Name" value={search} onChange={handleSearchInputChange} />}
       
        {lisäystila && <UserAdd setLisäystila={setLisäystila} 
        setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} />}
                    
        {muokkaustila && <UserEdit setMuokkaustila={setMuokkaustila}
        setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
        muokattavaUser={muokattavaUser}/>}


        {
          !lisäystila && !muokkaustila && showUsers && users && users.map(u =>
            {
                const lowerCaseName = u.lastname.toLowerCase()
                if (lowerCaseName.indexOf(search) > -1) {
                    return(
                        <User key={u.userId} user={u} editUser={editUser} setIsPositive={setIsPositive}
                         setMessage={setMessage} setShowMessage={setShowMessage} reload={reload}
                          reloadNow={reloadNow}/>
                    )
                }
            }
        )

        }
             </>
    )
}

export default UserList