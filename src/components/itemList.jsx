import { useState, useEffect } from "react";
import { Item } from "./Item";
import data from '../utils/product';
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";

export const ItemList = () => {

    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    console.log(idCategory);

    useEffect(() => {
        if (idCategory === undefined) {
            customFetch(2000, data)
                .then(result => setDatos(result))
                .catch(err => console.log(err))
        } else{
            customFetch(2000, data.filter(item => item.categoryId === parseInt(idCategory)))
                .then(result => setDatos(result))
                .catch(err => console.log(err))
            }
        
    }, [idCategory]);

    
    return(
        <>
            { 
              datos.length > 0
              ? datos.map((datos) => (
                 <Item key={datos.id} {...datos} />
              ))
              :<>
                <div class="preloader-wrapper active">
                    <div class="spinner-layer spinner-red-only">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div>
                        <div class="gap-patch">
                            <div class="circle"></div>
                        </div>
                        <div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
              </>
            }
        </>
    );
}