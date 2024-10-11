import './App.css'
import React, {useState} from 'react'
import ProductService from './services/Product'

// props on nimeltään product-olio
const Product = ({product, editProduct, setIsPositive, setMessage, setShowMessage, reload, reloadNow}) => {

// komponentin tilan määrittely
const [showDetails, setShowDetails] = useState(false)

const deleteProduct = (product) => {
    let vastaus = window.confirm(`Remove Product: ${product.productName}?`)
    if (vastaus === true) {    

    ProductService.remove(product.productId)
    .then(res => {
        if (res.status === 200) {
        setMessage(`Successfully removed product: ${product.productName}`)
        setIsPositive(true)
        setShowMessage(true)
        window.scrollBy(0, -10000)    // scrollataan ylös jotta nähdään viesti
        
        setTimeout(() => {
            setShowMessage(false)},
            5000)
        reloadNow(!reload)    // pakotetaan CustomerList komponentti päivittämään asiakaslista            
        }
    })
    .catch(error => {
        setMessage(error.message)
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
    <div className='productDiv'>

        <h4 style={{cursor: 'pointer'}} onClick={() => setShowDetails(!showDetails)}>

           {product.productName} 
        </h4>

        {showDetails && <div className="productDetail">
            <h3>{product.productName}</h3>
            <button onClick={() => deleteProduct(product)}>Delete</button>
            <button onClick={() => editProduct(product)} >Edit</button>

            <table>
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Quantity Per Unit</th>
                            <th>Unit Price</th>
                            <th>Units In Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.productId}</td>
                            <td>{product.quantityPerUnit}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.unitsInStock}</td>
                        </tr>
                    </tbody>
                </table></div>}


        </div>
  )
}

export default Product