import './App.css'
import React, {useState} from 'react'
import ProductService from './services/Product'

const ProductEdit = ({setMuokkaustila, setIsPositive, setMessage, setShowMessage, muokattavaProduct}) => {

// komponentin tilan määrittely
const [newProductId, setNewProductId] = useState(muokattavaProduct.productId)
const [newProductName, setNewProductName] = useState(muokattavaProduct.productName)
const [newSupplierId, setNewSupplierId] = useState(muokattavaProduct.supplierId)
const [newCategoryId, setNewCategoryId] = useState(muokattavaProduct.categoryId)
const [newQuantityPerUnit, setNewQuantityPerUnit] = useState(muokattavaProduct.quantityPerUnit)
const [newUnitPrice, setNewUnitPrice] = useState(muokattavaProduct.unitPrice)
const [newUnitsInStock, setNewUnitsInStock] = useState(muokattavaProduct.unitsInStock)
const [newUnitsOnOrder, setNewUnitsOnOrder] = useState(muokattavaProduct.unitsOnOrder)
const [newReorderLevel, setNewReorderLevel] = useState(muokattavaProduct.reorderLevel)
const [newDiscontinued, setNewDiscontinued] = useState(muokattavaProduct.discontinued)

// onSubmit-tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
    event.preventDefault()
    var newProduct = {
        productId: newProductId,
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

    ProductService.update(newProduct)
        .then(response => {
        if (response.status === 200) {
            setMessage("Edited Product: " + newProduct.productName)
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
    <div id='edit'>
        <h2>Product edit</h2>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Product id: </label>
            </div>
            <div>
                <input type='text' value={newProductId} required style={{ width: '300px' }} disabled/>
            </div>
            <div>
                <label>Product name: </label>
            </div>
            <div>
                <input type="text" value={newProductName} placeholder="Product name"
                    onChange={({ target }) => setNewProductName(target.value)} required style={{ width: '300px' }} />
            </div>
                <label>Supplier id: </label>
            <div>
                <input type="text" value={newSupplierId} placeholder="Supplier ID"
                    onChange={({ target }) => setNewSupplierId(target.value)} required style={{ width: '300px' }} />
            </div>
                <label>Category id: </label>
            <div>
                <input type="text" value={newCategoryId} placeholder="Category ID"
                    onChange={({ target }) => setNewCategoryId(target.value)} required style={{ width: '300px' }} />
            </div>
                <label>Quantity per unit: </label>
            <div>
                <input type="text" value={newQuantityPerUnit} placeholder="Quantity per unit"
                    onChange={({ target }) => setNewQuantityPerUnit(target.value)} style={{ width: '300px' }} />
            </div>
                <label>Unit price: </label>
            <div>
                <input type="text" value={newUnitPrice} placeholder="Unit price"
                    onChange={({ target }) => setNewUnitPrice(target.value)} style={{ width: '300px' }} />
            </div>
                <label>Units in stock: </label>
            <div>
                <input type="text" value={newUnitsInStock} placeholder="Units in stock"
                    onChange={({ target }) => setNewUnitsInStock(target.value)} style={{ width: '300px' }} />
            </div>
                <label>Units on order: </label>
            <div>
                <input type="text" value={newUnitsOnOrder} placeholder="Units on order"
                    onChange={({ target }) => setNewUnitsOnOrder(target.value)} style={{ width: '300px' }} />
            </div>
                <label>Reorder level: </label>
            <div>
                <input type="text" value={newReorderLevel} placeholder="Reorder level"
                    onChange={({ target }) => setNewReorderLevel(target.value)} style={{ width: '300px' }} />
            </div>
                <label>Discontinued: </label>
            <div>
                <input type="text" value={newDiscontinued} placeholder="Discontinued"
                    onChange={({ target }) => setNewDiscontinued(target.value)} style={{ width: '300px' }} />
            </div>
            <input type='submit' value='save' />
            <input type='button' value='back' onClick={() => setMuokkaustila(false)} />
        </form>
    </div>
)
}

export default ProductEdit
