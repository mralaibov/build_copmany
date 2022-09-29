import React from 'react';
import {StyledColab} from "./StyledColab";
import Container from "../../../ui-components/container/Container";

const ImgColab = () => {
    return (
        <StyledColab>
            <Container>
                <div className="center_col">
                    <img src="https://images.squarespace-cdn.com/content/v1/5d1252fbd971ca0001522a76/a96fe608-11d1-4c18-958d-f7615f03e838/Screen+Shot+1400-11-07+at+14.52.24.png?format=2500w" alt="comp"/>
                    <img src="https://images.squarespace-cdn.com/content/v1/5d1252fbd971ca0001522a76/ae23004d-9ce0-4099-b2d6-594b083bfc73/Screen+Shot+1400-11-07+at+14.50.19.png?format=1500w" alt="comp"/>
                </div>
            </Container>
        </StyledColab>
    );
};

export default ImgColab;