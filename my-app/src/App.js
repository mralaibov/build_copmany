import {StyledApp} from "./StyledApp";
import Header from "./sections/header/Header";
import React from "react";
import Footer from "./sections/footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Routers from "./routes/Routers";



const App = () => {
    return (
        <StyledApp className="App">

            <Header/>

            <Routers/>

            <Footer/>

        </StyledApp>
)};

export default App;
