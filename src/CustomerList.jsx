import './App.css'
import React, {useState, useEffect} from 'react'
import CustomerService from './services/Customer'
 
const CustomerList = () => {

// komponentin tilan määrittely
const [customers, setCustomers] = useState([])
const [showCustomers, setShowCustomers] = useState(false)

useEffect(() => {
  CustomerService.getAll().then(data => {
    setCustomers(data)
})
},[]
)

  return (
    <>
        <h2 onClick={() => setShowCustomers(!showCustomers)} style={{ color: 'yellow', cursor: 'pointer' }}>Customers</h2>

        {
            showCustomers && customers && customers.map(c => (
                <h3 key={c.customerId}>{c.companyName}</h3>
            )
        )
        }           
    </>

  )
}

export default CustomerList