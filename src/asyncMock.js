const products = [
    {
        id: '1',
        name: 'Teclado',
        price: 1000,
        category: 'teclados',
        img: '../src/assets/teclado1.webp',
        stock: 25,
        description: 'Teclado Negro y Azul'
    },
    {
        id: '2',
        name: 'Keycaps',
        price: '300',
        category: 'keycaps',
        img: '../src/assets/keycaps1.webp',
        stock: 10,
        description: 'Keycaps Verdes'
    },
    {
        id: '3',
        name: 'Cable',
        price: '100',
        category: 'accesorios',
        img: '../src/assets/cable1.webp',
        stock: 54,
        description: 'Cable Rosa'
        
    },                                                                                                                                                                                                                                                                                                                               
]

// export const getProducts = () => {
//     return new Promise ((resolve) => {
//         setTimeout(()=> {
//             resolve(products)
//         }, 500)
//     })
// }

export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}