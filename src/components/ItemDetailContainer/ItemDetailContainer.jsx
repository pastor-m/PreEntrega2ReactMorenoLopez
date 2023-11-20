import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";
import { getDoc, doc} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {

        const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
            .then(documentSnapshot => {
                const fields = documentSnapshot.data()
                const productAdapted = {id: documentSnapshot.id, ...fields}
                setProduct(productAdapted)
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