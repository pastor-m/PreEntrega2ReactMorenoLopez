import './Item.css'

const Item = ({name, img, price}) => {
    return(
        <div className="card">  
            <img src={img} width={250}/>
            <h2>{name}</h2>
            <h2>${price}</h2>
            <button>Ver detalle</button>
        </div>
    )
}

export default Item