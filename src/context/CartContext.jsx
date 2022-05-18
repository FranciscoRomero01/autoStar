import { createContext, useState } from "react";
export const CartContext = createContext();


const CartContextProvider = ({children}) => {

    // Estado del carrito
    const [cartList, setCartList] = useState([]);

    // Agregando items al carrito
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

    // Borrar items del carrito
    const deleteItem = (id) => {
        let result = cartList.filter(item => item.itemId !== id);
        setCartList(result);
    }

    // Vaciar carrito
    const clearItem = () => {
        setCartList([]);
    }

    // Sacando el total del producto
    function totalItem(itemId) {
        let itemTotal = cartList.map(item => item.itemId).indexOf(itemId);
        // Multiplicando precio * cantidad
        return cartList[itemTotal].itemPrice * cartList[itemTotal].itemQty;
    }

    // Calculando subtotal
    const subTotal = () => {
        let subTotal = cartList.map(item => totalItem(item.itemId));
        return subTotal.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    // Precio del envio
    const envio = () => {
        return 1500;
    }

    // Calculando el total
    const total = () => {
        return subTotal();
    }

    // Calcula el total de cantitdad de productos en el carrito
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