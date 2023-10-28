import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            
    }, [itemId])

    return (
        <div className="detalle">
                <h1>Detalle</h1>
                <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer