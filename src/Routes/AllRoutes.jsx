import { Routes, Route } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import { Contact } from "./Contact";
import Home from "./Home";
import Login from "./Login";
import Product from "./Product";
const AllRoutes = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/product" element={<Product />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/vart" element={<Cart />}/>
            </Routes>
        </div>
    )
}

export default AllRoutes