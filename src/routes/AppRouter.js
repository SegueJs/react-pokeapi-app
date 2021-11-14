import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import React from "react";
import About from "../views/About";
import Contact from "../views/Contact";
import Home from "../views/Home";
import FourOFour from "../views/404";
import PokeDetail from "../views/PokeDetail";

import ScrollToTop from "../components/ScrollToTop";
import NavBar from "./nav";

const AppRouter = () => {

    return(
        <BrowserRouter>

            <ScrollToTop />

            <div>
                
                <NavBar />
                
                <Routes>

                    <Route path="/react-pokeapi-app" exact element={<Home/>} />

                    <Route path="/react-pokeapi-app/about" element={<About/>} />

                    <Route path="/react-pokeapi-app/contact" element={<Contact/>} />

                    <Route path="/react-pokeapi-app/*" exact element={<FourOFour/>} />

                    <Route path="/react-pokeapi-app/pokemon/:id" element={<PokeDetail />} />

                </Routes>

            </div>
        </BrowserRouter>
    )
}

export default AppRouter