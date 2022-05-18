import { createContext, useState } from "react";
export const CartContext = createContext();


const CartContextProvider = ({children}) => {

    // Cart status
    const [cartList, setCartList] = useState([]);

    // Add items to cart
    const addToCart = (item, qty) => {
        let found = cartList.find(data => data.itemId === item.id);
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

    // Delete items from cart
    const deleteItem = (id) => {
        let result = cartList.filter(item => item.itemId !== id);
        setCartList(result);
    }

    // Empty cart
    const clearItem = () => {
        setCartList([]);
    }

    // Taking the total of the product
    function totalItem(itemId) {
        let itemTotal = cartList.map(item => item.itemId).indexOf(itemId);
        // Multiplying price * quantity
        return cartList[itemTotal].itemPrice * cartList[itemTotal].itemQty;
    }

    // Calculate Subtotal
    const subTotal = () => {
        let subTotal = cartList.map(item => totalItem(item.itemId));
        return subTotal.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    // Shipping price
    const envio = () => {
        return 1500;
    }

    // Calculating the total
    const total = () => {
        return subTotal();
    }

    // Calculate the total number of products in the cart
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