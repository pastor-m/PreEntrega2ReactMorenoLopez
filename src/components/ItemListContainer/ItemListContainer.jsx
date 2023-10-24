import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'

const ItemListContainer = ({mensaje}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(result => {
                setProducts(result)
            })
            
    }, [])


    const productsComponents = products.map(prod =>{
        return (
            <article key={prod.id}>
                <h1>{prod.name}</h1>
                <h2>${prod.price}</h2>
            </article>
        )
    })

    console.log(productsComponents)
    return (
        <div className='mensaje'>
            <h1>{mensaje}</h1>
            {productsComponents}
        </div>
    )
}

export default ItemListContainer