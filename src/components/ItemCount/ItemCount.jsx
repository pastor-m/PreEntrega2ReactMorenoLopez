import { useState } from "react";
import './ItemCount.css'

export const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const increment = () => {
        if(count < stock){
            setCount(prev => prev + 1)
        }
    }

    const decrement = () => {
        if(count > 1) {
            setCount(prev => prev - 1)
        }
    }

    return(
        <div className="contador">
            <div className="Controles">   
                <button className="Button" onClick={decrement}>-</button>
                <h4 className="Cantidad" >{count}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(count)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )

}