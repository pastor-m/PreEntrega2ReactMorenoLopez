import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { ContactForm } from "../ContactForm/ContactForm"

export const Checkout = () => {

    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useCart()

    const createOrder = async (userData) => {
        try {
            const objOrder = {
                buyer: {
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone
                },
                items: cart,
                total
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query (collection(db, 'products'), where(documentId(), 'in', ids))
    
            const {docs} = await getDocs(productsRef)
    
            docs.forEach(async documentSnapshot => {
                const fields = documentSnapshot.data()
                const stockDb = fields.stock
    
                const productAddedToCart = cart.find(prod => prod.id === documentSnapshot.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity){
                    batch.update(documentSnapshot.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: documentSnapshot.id, ...fields})
                }
    
                if(outOfStock.length === 0){
                    const ordersRef = collection(db, 'orders')
    
                    const { id } = await addDoc(ordersRef, objOrder)

                    batch.commit()

                    clearCart()

                    setOrderId(id)
    
                    console.log(`El id de su orden es ${id}`)

                } else {
                    console.log('No hay stock de algun producto')
                }
            })
        }

        catch (error) {
            console.error('Hubo un error generando la orden')
        }


    }

    if(orderId) {
        return <h2>El id de su orden es: {orderId}</h2>
    }

    return (
        <>
            <h1>Checkout</h1>
            <h2>Formulario</h2>
            <ContactForm onCreate={createOrder}/>
        </>
    )
}