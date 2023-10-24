const products = [
    {
        id: '1',
        name: 'Teclado 1',
        price: 1000,
        category: 'celular',
        img: '',
        stock: 25,
        description: 'Teclado Switches Cherry MX Red'
    },                                                                                                                                                                                                                                                                                                                                       
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}