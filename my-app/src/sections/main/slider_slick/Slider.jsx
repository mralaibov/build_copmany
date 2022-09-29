import React, { Component } from "react";
import Slider from "react-slick";
import {StyledSlider} from "./StyledSlider";

export default class AsNavFor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <StyledSlider>
                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                >
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/5d1252fbd971ca0001522a76/1647633986185-V11SDI91LPWW7R02TPFX/Screen+Shot+2022-03-18+at+1.56.59+PM.png?format=1500w"/>
                    </div>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/5d1252fbd971ca0001522a76/1647633986185-V11SDI91LPWW7R02TPFX/Screen+Shot+2022-03-18+at+1.56.59+PM.png?format=1500w"/>
                    </div>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/5d1252fbd971ca0001522a76/1647633986185-V11SDI91LPWW7R02TPFX/Screen+Shot+2022-03-18+at+1.56.59+PM.png?format=1500w"/>
                    </div>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/5d1252fbd971ca0001522a76/1647633986185-V11SDI91LPWW7R02TPFX/Screen+Shot+2022-03-18+at+1.56.59+PM.png?format=1500w"/>
                    </div>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/5d1252fbd971ca0001522a76/1647633986185-V11SDI91LPWW7R02TPFX/Screen+Shot+2022-03-18+at+1.56.59+PM.png?format=1500w"/>
                    </div>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/5d1252fbd971ca0001522a76/1647633986185-V11SDI91LPWW7R02TPFX/Screen+Shot+2022-03-18+at+1.56.59+PM.png?format=1500w"/>
                    </div>
                </Slider>
                <Slider
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={5}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/5d1252fbd971ca0001522a76/1589315918500-YEF3C8KPJ22SPMIKJEH2/IMG_7078.jpg?format=300w"/>
                    </div>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/5d1252fbd971ca0001522a76/1589315918500-YEF3C8KPJ22SPMIKJEH2/IMG_7078.jpg?format=300w"/>
                    </div>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/5d1252fbd971ca0001522a76/1589315918500-YEF3C8KPJ22SPMIKJEH2/IMG_7078.jpg?format=300w"/>
                    </div>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/5d1252fbd971ca0001522a76/1589315918500-YEF3C8KPJ22SPMIKJEH2/IMG_7078.jpg?format=300w"/>
                    </div>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/5d1252fbd971ca0001522a76/1589315918500-YEF3C8KPJ22SPMIKJEH2/IMG_7078.jpg?format=300w"/>
                    </div>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/5d1252fbd971ca0001522a76/1589315918500-YEF3C8KPJ22SPMIKJEH2/IMG_7078.jpg?format=300w"/>
                    </div>
                </Slider>
            </StyledSlider>
        );
    }
}