import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailConteiner from "../components/ItemDetailConteiner";


const Home = () => {
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:idCategory" element={<ItemListContainer />} />
                <Route path="/item/:idItem" element={<ItemDetailConteiner />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Home;