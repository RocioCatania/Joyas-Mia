import { initializeApp } from "firebase/app";
import { getFirestore,
        doc, 
        getDoc, 
        getDocs, 
        collection, 
        where,
        query
    } from "firebase/firestore";





const firebaseConfig = {
    apiKey: "AIzaSyCevgttr8B3o3LyciwulIWdEuCYRWW0WrA",
    authDomain: "joyas-mia.firebaseapp.com",
    projectId: "joyas-mia",
    storageBucket: "joyas-mia.firebasestorage.app",
    messagingSenderId: "888694600741",
    appId: "1:888694600741:web:d32c1ca85cdfc8e180bbcc"
};

const app = initializeApp(firebaseConfig);

const baseDeDatos = getFirestore(app);

//para consumir un producto

export async function productoEspecifico(id){
    const referenciaDoc = doc(baseDeDatos, 'productos',id);

    try {
        const snapshot = await getDoc(referenciaDoc);
        if (snapshot.exists()) {
            return snapshot.data();
        }else {
            console.log('El Documento No exite');
        }
        }catch (error){
            console.error('Error al obtener el documento',error);
        }
    }


    // para consumir una coleccion sin filtros

export async function coleccionCompleta () {

    try{
        const querySnapshot = await getDocs(collection(baseDeDatos, 'productos'));

        if (querySnapshot.size !== 0) {
            const productsList = querySnapshot.docs.map((doc) => {
                return {
                    id: doc.id,...doc.data(),
                };
            });
            return productsList;
        }else {
            console.log('Error al obtener la coleccion');
        }
    }catch (error) {
        console.error('Estea coleccion no pudo obtenerse',error);
        return [];
    }
    
}
// para filtrar

export async function filtro(tipo) {
    try {
        const queryFiltrado = query(collection(baseDeDatos, 'productos'),where('tipo','==', tipo)) ;
        const querySnapshot =await getDocs(queryFiltrado);
        if (querySnapshot.size !== 0) {
            const productsList = querySnapshot.docs.map((doc) => {
                return {
                    id:doc.id,...doc.data(),
                };
            });
            return productsList;
        }else {
            console.log('Coleccion Vacia');
            return[];
        }
    }catch (error) {
        console.error('Error al obtener el documento',error);
        return [];
    }
    
}


export const getProduct = (id) => {
    return productos.find((prod) => prod.id == id);
};