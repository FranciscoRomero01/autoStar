import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailConteiner from "../components/ItemDetailConteiner";
import Cart from "../components/Cart";
import CartContextProvider from "../context/CartContext";
import Users from "../components/Users";
import UsersContextProvider from "../context/UsersContext";


const Home = () => {
    return(
        <UsersContextProvider>
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:idCategory" element={<ItemListContainer />} />
                        <Route path="/item/:idItem" element={<ItemDetailConteiner />}/>
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/:name' element={< ItemListContainer />} />
                        <Route path='/users' element={<Users />} />
                    </Routes>
                </BrowserRouter>
           </CartContextProvider>    
        </UsersContextProvider>
    )
};

export default Home;