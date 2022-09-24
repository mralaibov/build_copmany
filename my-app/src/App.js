import {StyledApp} from "./StyledApp";
import Header from "./sections/header/Header";
import React from "react";
import Footer from "./sections/footer/Footer";
import Main from "./sections/main/Main";

const App = () => {
    return <StyledApp className="App">

            <Header/>

            <Main/>


            <Footer/>

        </StyledApp>
}

export default App;
