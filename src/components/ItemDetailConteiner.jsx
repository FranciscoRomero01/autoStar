import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import data from "../utils/product";
import customFetch from "../utils/customFetch";
import { useParams } from 'react-router';

const ItemDetailConteiner = () => {

    const [description, setDescription] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, data.find(item => item.id === parseInt(idItem)))
            .then(result => setDescription(result))
            .catch(err => console.log(err))
    }, []);

    return(
        <div>
            <ItemDetail item={description} />
        </div>
    )
};

export default ItemDetailConteiner;