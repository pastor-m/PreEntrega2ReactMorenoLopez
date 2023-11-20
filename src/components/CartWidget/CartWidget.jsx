import cart from './assets/cart.svg'
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'


const CartWidget = () => {
    
    const navigate = useNavigate()

    const { totalQuantity, } = useCart()

    return (
        <button onClick={() => navigate('/cart')}>
            
            <img src={cart} alt="cart-widget" />
            {totalQuantity}
        </button>
    )
}

export default CartWidget