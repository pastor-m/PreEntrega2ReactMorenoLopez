import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="barraMenu"> 
            <h1>MX Keyboards</h1>
            <div className='subMenu'>
                <NavLink to='/category/keycaps'>Keycaps</NavLink>
                <NavLink to='/category/teclados'>Teclados</NavLink>
                <NavLink to='/category/accesorios'>Accesorios</NavLink>
            </div>
            <CartWidget/>
    </nav>
    )
}

export default NavBar