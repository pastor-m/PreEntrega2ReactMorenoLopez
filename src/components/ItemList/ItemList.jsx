import Item from "../Item/Item"

const ItemList = ({products}) => {
    return (
        <div className="productos">
            {products.map(prod => {
                return (
                    <Item key={prod.id} {...prod}/>
                )
            }
                
            )}
        </div>
    )
}

export default ItemList