import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

    // Adquiriendo de carrito
    const cart = useContext(CartContext);

    return(
        <Badge badgeContent={cart.itemsQty()} color="secondary">
            <ShoppingCartOutlined />
        </Badge>
    )
}

export default CartWidget;