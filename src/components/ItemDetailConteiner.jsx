import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router';
import { doc, getDoc } from "firebase/firestore";
import db from "../utils/firebaseConfig";

const ItemDetailConteiner = () => {

    // Products Description Status
    const [description, setDescription] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        const firestoreFetch = async (idItem) => {
            // Acquiring firebase products
            const docRef = doc(db, "products", idItem);
            // selecting firebase product
            const docSnap = await getDoc(docRef);
            
            // If the product exists
            if (docSnap.exists()) {
                // Return the specific product
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