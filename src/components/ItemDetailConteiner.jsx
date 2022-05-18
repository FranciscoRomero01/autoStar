import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router';
import { doc, getDoc } from "firebase/firestore";
import db from "../utils/firebaseConfig";

const ItemDetailConteiner = () => {

    // Estado de descripcion de los productos
    const [description, setDescription] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        const firestoreFetch = async (idItem) => {
            // Adquiriendo productos del firebase
            const docRef = doc(db, "products", idItem);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
              return {
                  id: idItem,
                  ...docSnap.data()
              }
            } else {
              console.log("No such document!");
            }
        }

        firestoreFetch(idItem)
            .then(result => setDescription(result))
            .catch(err => console.log(err))
    }, [idItem]);

    return(
        <div>
            <ItemDetail item={description} />
        </div>
    )
};

export default ItemDetailConteiner;