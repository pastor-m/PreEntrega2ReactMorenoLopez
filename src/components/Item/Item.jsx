import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({name, img, price, id}) => {
    return(
        <div className="card">  
            <img src={img} width={250}/>
            <h2>{name}</h2>
            <h2>${price}</h2>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item