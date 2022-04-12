import { useState } from "react";
import '../style/ItemCount.css'

function ItemCount() {
    const [rate, setRate] = useState(0);

    const increment = () => {
        if (rate < 5){
            setRate(rate+1);
        }
    };

    const decrease = () => {
        if (rate > 0){
            setRate(rate-1);
        }
    };

    const price = () => {
        alert("Gracias por su valoracion!");
    }

    return(
        <>
            <div className="rate">
                <a className="btn-floating pulse red accent-4" onClick={decrease}><i className="material-icons">-</i></a>
                <p>{rate}</p>
                <a className="btn-floating pulse red accent-4" onClick={increment}><i className="material-icons">+</i></a>
            </div>
            <div className="price red accent-4">
                <a href="#" className="white-text" onClick={price}> COMPRAR </a>
            </div>
        </>
    )
}

export default ItemCount;