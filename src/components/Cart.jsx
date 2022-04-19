import '../style/cart.css'

const Cart = () => {
    return (
        <div className="cart">
            <ul className='menu'>
                <li>Nombre</li>
                <li>Precio</li>
                <li>Cantidad</li>
                <li>Total</li>
            </ul>
            <div className='total right'>
                <p>Total:</p>
            </div>
        </div>
    );
}

export default Cart;