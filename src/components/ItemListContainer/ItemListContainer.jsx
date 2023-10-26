import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({mensaje}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(result => {
                setProducts(result)
            })
            
    }, [])


    // const productsComponents = products.map(prod => {
    //     return (
    //         <article key={prod.id}>
    //             <h1>{prod.name}</h1>
    //             <h2>${prod.price}</h2>
    //         </article>
    //     )
    // })

    return (
        <div>
            <div className='mensaje'>
                <h1>{mensaje}</h1>
            </div>
            <div>
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer