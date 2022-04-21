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