import { useState, useEffect } from "react";
import { Item } from "./Item";
import data from './product';


export const ItemList = (productos) => {

    const getData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(data);
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
    )
}