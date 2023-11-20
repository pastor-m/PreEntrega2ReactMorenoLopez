import { useState } from "react"

export const ContactForm = ({onCreate}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onCreate({name, email, phone})
    }

    return (
        <>  
            <form onSubmit={handleSubmit}>
                <h2>Nombre</h2>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
                <h2>Email</h2>
                <input value={email} onChange={(e) => setEmail(e.target.value)}/>
                <h2>Numero de telefono</h2>
                <input value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <button>Generar orden de compra</button>
            </form>


        </>
    )
}