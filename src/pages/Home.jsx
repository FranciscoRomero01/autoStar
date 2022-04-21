import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailConteiner from "../components/ItemDetailConteiner";
import Cart from "../components/Cart";
import CartContextProvider from "../components/CartContext";


const Home = () => {
    return(
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:idCategory" element={<ItemListContainer />} />
                    <Route path="/item/:idItem" element={<ItemDetailConteiner />}/>
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>    
    )
};

export default Home;