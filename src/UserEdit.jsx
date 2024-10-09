import './App.css'
import React, {useState} from 'react'
import UserService from './services/User'

const UserEdit = ({setMuokkaustila, setIsPositive, setMessage, setShowMessage, muokattavaUser}) => {

// komponentin tilan määrittely
const [newUserId, setNewUserId] = useState(muokattavaUser.userId)
const [newFirstName, setNewFirstName] = useState(muokattavaUser.firstName)
const [newLastName, setNewLastName] = useState(muokattavaUser.lastName)
const [newEmail, setNewEmail] = useState(muokattavaUser.email)
const [newAccesslevelId, setNewAccesslevelId] = useState(muokattavaUser.accesslevelId)

// onSubmit-tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
    event.preventDefault()
    var newUser = {
        userId: newUserId,
        firstName: newFirstName,
        lastName: newLastName,
        email: newEmail,
        accesslevelId: newAccesslevelId
    }

    UserService.update(newUser)
        .then(response => {
        if (response.status === 200) {
            setMessage("Edited User: " + newUser.firstName)
            setIsPositive(true)
            setShowMessage(true)
            window.scrollBy(0, -10000) // scrollataan ylös jotta nähdään viesti

            setTimeout(() => {
            setShowMessage(false)
             }, 5000)

            setMuokkaustila(false)
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

return (
    <div className="form">
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>User ID: </label>
            </div>
            <div>
                <input type="text" value={newUserId} disabled/>
            </div>
            <div>
                <label>First name: </label>
            </div>
            <div>
                <input type="text" value={newFirstName} placeholder="First name"
                    onChange={({ target }) => setNewFirstName(target.value)} required />
            </div>
            <div>
                <label>Last name: </label>
            </div>
            <div>
                <input type="text" value={newLastName} placeholder="Last name"
                    onChange={({ target }) => setNewLastName(target.value)} required />
            </div>
            <div>
                <label>Email: </label>
            </div>
            <div>
                <input type="email" value={newEmail} placeholder="Email"
                    onChange={({ target }) => setNewEmail(target.value)} required />
            </div>
            <div>
                <label>AccesslevelId: </label>
            </div>
            <div>
                <input type="number" value={newAccesslevelId} placeholder="AccesslevelId"
                    onChange={({ target }) => setNewAccesslevelId(target.value)} required />
            </div>
            <br />
            <input type='submit' value='save' />
            <input type='button' value='back' onClick={() => setMuokkaustila(false)} />

        </form>
    </div>
)
}

export default UserEdit
