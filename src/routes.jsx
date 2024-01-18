import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PropertieDetails from "./pages/PropertiesDetails";


const AppRoutes = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element = {<Home />}/>
                <Route path="/About" element = {<About />}/>
                <Route path="/Properties" element = {<Properties />}/>
                <Route path="/Services" element = {<Services />}/>
                <Route path="/Contact" element = {<Contact />}/>
                <Route path="/PropertieDetails" element={<PropertieDetails />}/>

            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes;