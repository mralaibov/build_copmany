import {StyledApp} from "./StyledApp";
import Header from "./sections/header/Header";
import React from "react";
import Footer from "./sections/footer/Footer";
import Routers from "./routes/Routers";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <StyledApp className="App">

            <Header/>

            <Routers/>

            <Footer/>

        </StyledApp>
)};

export default App;
