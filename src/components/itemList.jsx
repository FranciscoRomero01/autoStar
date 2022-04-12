import { useState, useEffect } from "react";
import { Item } from "./Item";
import data from '../utils/product';


export const ItemList = () => {

    const getData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(data.caracteristicas);
            }, 2000)
        });
    };
    
    
    console.log(getData());

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const requestData = async () => {
            let readyData = await getData();
            setDatos(readyData);
        }
        requestData();
    }, []);

    console.log(datos);

    return(
        <>
          <div>
              {datos.map((datos) => (
                  <Item key={datos.id} {...datos} />
                ))
              }
          </div>
        </>
    );
}