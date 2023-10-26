const products = [
    {
        id: '1',
        name: 'Teclado',
        price: 1000,
        category: 'teclado',
        img: 'src/assets/teclado1.webp',
        stock: 25,
        description: 'Teclado Negro y Azul'
    },
    {
        id: '2',
        name: 'Keycaps',
        price: '300',
        category: 'keycap',
        img: 'src/assets/keycaps1.webp',
        stock: 10,
        description: 'Keycaps Verdes'
    },
    {
        id: '3',
        name: 'Cable',
        price: '100',
        category: 'cable',
        img: 'src/assets/cable1.webp',
        stock: 54,
        description: 'Cable Rosa'
        
    }                                                                                                                                                                                                                                                                                                                                     
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}