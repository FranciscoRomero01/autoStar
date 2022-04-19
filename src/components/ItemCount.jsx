import { useState } from "react";
import '../style/ItemCount.css';

function ItemCount ({ stock, initial = 0, onAdd}){
    const [count, setCount] = useState(0);

    function increment(){
        if(count < stock) setCount(count+1)
    }

    function decrement(){
        if (count >= initial+1) {
            setCount(count - 1);
        }
    }

    return(
        <>
            <div className="rate">
                <a href="#" className="btn-floating pulse red accent-4"><i className="material-icons" onClick={decrement}>-</i></a>
                <p>{count}</p>
                <a href="#" className="btn-floating pulse red accent-4" ><i className="material-icons" onClick={increment}>+</i></a>
            </div>
            <div className="price red accent-4">
                <a href="#" className="white-text" onClick={() => onAdd(count)}> COMPRAR </a>
            </div>
        </>
    )
}

export default ItemCount;