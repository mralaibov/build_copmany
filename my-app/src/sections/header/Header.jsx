import React from 'react';
import {StyledHeader} from "./StyledHeader";
import Container from "../../ui-components/container/Container";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <StyledHeader>
            <Container>
                <nav className="Header-nav Header-nav--primary" data-nc-element="primary-nav" data-content-field="navigation">
                    <Link to="/" className="Header-branding" data-nc-element="branding" data-content-field="site-title">
                        <img src="//images.squarespace-cdn.com/content/v1/5d1252fbd971ca0001522a76/739edc2c-2c5f-450a-b912-9712978808ee/thumbnail_logo.jpeg?format=1500w" alt="Buffalo, ny" className="Header-branding-logo"/>
                    </Link>
                    <div className="Header-nav-inner">
                        <Link to="/" >Home</Link>
                        <Link to="/about" >About</Link>
                        <Link to="/buy-or-sell-cores" >Buy or Sell Cores! </Link>
                        <Link to="/buy-guide" >Product Lines</Link>
                        <Link to="/buffalocoresupplyteam" >Team</Link>
                        <Link to="/sidehustle" >Side Hustle Opportunity </Link>
                        <Link to="/blog" >Blog</Link>
                        <Link to="/faq" >FAQ</Link>
                        <Link to="/contact" >Contact</Link>
                    </div>
                </nav>
            </Container>
        </StyledHeader>

    );
};

export default Header;
