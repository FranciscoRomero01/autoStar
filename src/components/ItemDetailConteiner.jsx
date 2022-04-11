import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import data from "./product"

const ItemDetailConteiner = () => {

    function getItem() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(data[3]);
            }, 2000 )
        });
    };

    const [description, setDescription] = useState([]);

    useEffect(() => {
        const descriptionData = async () => {
            let readyDescription = await getItem();
            setDescription(readyDescription);
        }
        descriptionData();
    });

    console.log(description);

    return(
        <div>
            <ItemDetail item={description} />
        </div>
    )
};

export default ItemDetailConteiner;