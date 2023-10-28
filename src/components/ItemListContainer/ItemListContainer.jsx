import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../../asyncMock'

const ItemListContainer = ({mensaje}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
            
    }, [categoryId])


    return (
        <div>
            <div className='mensaje'>
                <h1>{mensaje}</h1>
            </div>
            <div>
                <ItemList products = {products} />
            </div>
        </div>
    )
}

export default ItemListContainer