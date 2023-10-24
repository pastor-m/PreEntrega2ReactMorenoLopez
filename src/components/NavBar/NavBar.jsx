import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className="barraMenu"> 
            <h1>MX Keyboards</h1>
            <div className='subMenu'>
                <button>Switches</button>
                <button>Teclados</button>
                <button>Accesorios</button>
            </div>
            <CartWidget/>
    </nav>
    )
}

export default NavBar