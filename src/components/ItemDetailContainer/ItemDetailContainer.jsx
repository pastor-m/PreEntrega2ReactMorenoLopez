import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById('2')
            .then(result => {
                setProduct(result)
            })
            
    }, [])

    return (
        <div className="detalle">
                <h1>Detalle</h1>
                <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer