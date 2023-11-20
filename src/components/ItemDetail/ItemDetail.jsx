import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, name, img, price, stock, description}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem, isInCart } = useCart()

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const productToAdd = {
            id, name, price, quantity, 
    }

    addItem(productToAdd)
    }
    return(
        <div className='detalleCard'>
            <div className='imagen'>
                <img src={img} width={200}/>
            </div>
            <div className='detalles'>
                <h2>{name}</h2>
                <h2>${price}</h2>
                <p>Description: {description}</p>
                {
                    isInCart(id) ? (
                        <Link to='/cart' className=''>Ir al carrito</Link>
                    ) : (<ItemCount stock={stock} onAdd={handleOnAdd}/>
                    
                    )
                }
            </div>

        </div>
    )
}

export default ItemDetail