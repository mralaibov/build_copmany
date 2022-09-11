import {StyledApp} from "./StyledApp";
import Header from "./sections/header/Header";
import React from "react";
import Footer from "./sections/footer/Footer";
import Main from "./sections/main/Main";

function App() {
    return (
        <StyledApp className="App">

            <Header/>

            <Main/>

            <Footer/>

            {/*example*/}
            {/*<header>*/}
            {/*    <nav>*/}
            {/*        <a href="#">Text</a>*/}
            {/*    </nav>*/}
            {/*</header>*/}

        </StyledApp>
    );
}

export default App;
