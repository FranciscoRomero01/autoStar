import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(data => data.itemId === item.id);
        const total = item.price * qty;
        console.log(total);
        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    itemId: item.id,
                    itemImg: item.img,
                    itemName: item.name,
                    itemPrice: item.price,
                    itemQty: qty
                }
            ]);
        } else {
            found.itemQty += qty;
        }
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.itemId !== id);
        setCartList(result);
    }

    const clearItem = () => {
        setCartList([]);
    }

    function totalItem(itemId) {
        let itemTotal = cartList.map(item => item.itemId).indexOf(itemId);
        return cartList[itemTotal].itemPrice * cartList[itemTotal].itemQty;
    }

    const subTotal = () => {
        let subTotal = cartList.map(item => totalItem(item.itemId));
        return subTotal.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const envio = () => {
        return 1500;
    }

    const total = () => {
        return subTotal();
    }

    const itemsQty = () => {
        let qtys = cartList.map(item => item.itemQty);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }


    return (
        <CartContext.Provider value={{cartList, addToCart, deleteItem, clearItem, subTotal, totalItem, envio, total, itemsQty}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;