import { useState, useEffect } from "react";
import { Item } from "./Item";
import { useParams } from "react-router-dom";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import db from "../utils/firebaseConfig";

export const ItemList = () => {

    // Estado de los datos
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    console.log(idCategory);

    useEffect(() => {
        const fetchFromFirestore = async () => {
            let q
            if (idCategory) {
                // Showing product according to its category ID
                q = query(collection(db, "products"), where('categoryId', '==', idCategory));
            } else {
                // Showing all products (sorted by name)
                q = query(collection(db, "products"), orderBy('name'));
            }

            // Acquiring products
            const querySnapshot = await getDocs(q);

            // mapping products
            const dataFromFirestore = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            return dataFromFirestore;
        }
        
        fetchFromFirestore()
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    
    return(
        <>
            { 
              datos.length > 0
              ? datos.map((datos) => (
                 <Item key={datos.id} {...datos} />
              ))
              :<>
                <div className="preloader-wrapper active">
                    <div className="spinner-layer spinner-red-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
              </>
            }
        </>
    );
}