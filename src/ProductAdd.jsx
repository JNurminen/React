import './App.css'
import React, {useState} from 'react'
import ProductService from './services/Product'

const ProductAdd = ({setLisäystila, setIsPositive, setMessage, setShowMessage}) => {

// komponentin tilan määrittely
const [newProductId, setNewProductId] = useState('')
const [newProductName, setNewProductName] = useState('')
const [newSupplierId, setNewSupplierId] = useState('')
const [newCategoryId, setNewCategoryId] = useState('')
const [newQuantityPerUnit, setNewQuantityPerUnit] = useState('')
const [newUnitPrice, setNewUnitPrice] = useState('')
const [newUnitsInStock, setNewUnitsInStock] = useState('')
const [newUnitsOnOrder, setNewUnitsOnOrder] = useState('')
const [newReorderLevel, setNewReorderLevel] = useState('')
const [newDiscontinued, setNewDiscontinued] = useState('')

// onSubmit-tapahtumankäsittelijä funktio

const handleSubmit = (event) => {
    event.preventDefault()
    var newProduct = {
        productId: newProductId.toUpperCase(),
        productName: newProductName,
        supplierId: newSupplierId,
        categoryId: newCategoryId,
        quantityPerUnit: newQuantityPerUnit,
        unitPrice: newUnitPrice,
        unitsInStock: newUnitsInStock,
        unitsOnOrder: newUnitsOnOrder,
        reorderLevel: newReorderLevel,
        discontinued: newDiscontinued
    }

    /*const token = localStorage.getItem('token')
        CustomerService
            .setToken(token)*/
    
    ProductService.create(newProduct)
        .then(response => {
        if (response.status === 200) {
            setMessage("Added new product: " + newProduct.productName)
            setIsPositive(true)
            setShowMessage(true)
    
            setTimeout(() => {
            setShowMessage(false)
             }, 5000)
    
            setLisäystila(false)
        }
    
        })
        .catch(error => {
        setMessage(error)
        setIsPositive(false)
        setShowMessage(true)
    
        setTimeout(() => {
            setShowMessage(false)
         }, 5000)
        })
    }

    return (
        <div id='addNew'>
            <h3>Product add</h3>
            <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={newProductName} placeholder="Product name"
                    onChange={({ target }) => setNewProductName(target.value)} required />
            </div>
            <div>
                <input type="number" value={newSupplierId} placeholder="Supplier ID"
                    onChange={({ target }) => setNewSupplierId(target.value)} required />
            </div>
            <div>
                <input type="number" value={newCategoryId} placeholder="Category ID"
                    onChange={({ target }) => setNewCategoryId(target.value)} required />
            </div>
            <div>
                <input type="text" value={newQuantityPerUnit} placeholder="Quantity per unit"
                    onChange={({ target }) => setNewQuantityPerUnit(target.value)} />
            </div>
            <div>
                <input type="text" value={newUnitPrice} placeholder="Unit price"
                    onChange={({ target }) => setNewUnitPrice(target.value)} />
            </div>
            <div>
                <input type="text" value={newUnitsInStock} placeholder="Units in stock"
                    onChange={({ target }) => setNewUnitsInStock(target.value)} />
            </div>
            <div>
                <input type="text" value={newUnitsOnOrder} placeholder="Units on order"
                    onChange={({ target }) => setNewUnitsOnOrder(target.value)} />
            </div>
            <div>
                <input type="text" value={newReorderLevel} placeholder="Reorder level"
                    onChange={({ target }) => setNewReorderLevel(target.value)} />
            </div>
            <div>
                <input type="text" value={newDiscontinued} placeholder="Discontinued"
                    onChange={({ target }) => setNewDiscontinued(target.value)} />
            </div>
            <div>
                <button type="submit">Add</button>
                <button type="button" onClick={() => setLisäystila(false)}>Cancel</button>
            </div>
            </form>
        </div>
    )
}

export default ProductAdd