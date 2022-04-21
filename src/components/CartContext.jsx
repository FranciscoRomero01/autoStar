import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if ( found === undefined) {
            const total = item.price * qty;
            setCartList([
                ...cartList,
                {
                    itemId: item.id,
                    itemImg: item.img,
                    itemName: item.name,
                    itemPrice: item.price,
                    itemQty: qty,
                    itemTotal: total
                }
            ]);
        } else {
            found.qtyItem += qty;
        }
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.itemId !== id);
        setCartList(result);
    }

    const clearItem = () => {
        setCartList([]);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, deleteItem, clearItem}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;