import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({name, img, price, stock, description}) => {
    return(
        <div className='detalleCard'>
            <div className='imagen'>
                <img src={img} width={200}/>
            </div>
            <div className='detalles'>
                <h2>{name}</h2>
                <h2>${price}</h2>
                <p>Description: {description}</p>
                <ItemCount stock={stock}/>
            </div>

        </div>
    )
}

export default ItemDetail