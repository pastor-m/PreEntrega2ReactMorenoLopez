import { db } from '../firebaseConfig.js'
import { getDocs, collection, query, where} from 'firebase/firestore'

// export const getProducts = (categoryId) => {
//     return new Promise ((resolve, error) => {
//         const productsRef = categoryId
//         ? query(collection(db, 'products'), where('category', '==', categoryId))
//         : collection(db, 'products')

        

//         getDocs(productsRef)
//             .then(QuerySnapshot => {
//                 const productsAdapted = QuerySnapshot.docs.map(documentSnapshot => {
//                     const fields = documentSnapshot.data()
//                     return {
//                         id: documentSnapshot.id, 
//                         ...fields
//                     }
//                 })
//                 resolve(productsAdapted)
//             })
//             .catch(error => {
//                 return error
//             })
//     })
// }

export const getProducts = async (categoryId) => {
    try {
        const productsRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        const QuerySnapshot = await getDocs(productsRef)
        return QuerySnapshot.docs.map(documentSnapshot => ({
            id: documentSnapshot.id,
            ...documentSnapshot.data()
        }))
    } catch (error) {
        console.error('Error fetching products:', error)
        throw error
    }
}