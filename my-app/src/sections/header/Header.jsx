import React from 'react';
import {StyledHeader} from "./StyledHeader";
import Container from "../../ui-components/container/Container";

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <nav className="Header-nav Header-nav--primary" data-nc-element="primary-nav" data-content-field="navigation">
                    <a href="/" className="Header-branding" data-nc-element="branding" data-content-field="site-title">
                        <img src="//images.squarespace-cdn.com/content/v1/5d1252fbd971ca0001522a76/739edc2c-2c5f-450a-b912-9712978808ee/thumbnail_logo.jpeg?format=1500w" alt="Buffalo, ny" className="Header-branding-logo"/>
                    </a>
                    <div className="Header-nav-inner">
                        <a href="/" className="Header-nav-item Header-nav-item--active" data-test="template-nav">Home</a>
                        <a href="/about" className="Header-nav-item" data-test="template-nav">About</a>
                        <a href="/buy-or-sell-cores" className="Header-nav-item" data-test="template-nav">Buy or Sell Cores! </a>
                        <a href="/buy-guide" className="Header-nav-item" data-test="template-nav">Product Lines</a>
                        <a href="/buffalocoresupplyteam" className="Header-nav-item" data-test="template-nav">Team</a>
                        <a href="/sidehustle" className="Header-nav-item" data-test="template-nav">Side Hustle Opportunity </a>
                        <a href="/blog" className="Header-nav-item" data-test="template-nav">Blog</a>
                        <a href="/faq" className="Header-nav-item" data-test="template-nav">FAQ</a>
                        <a href="/contact" className="Header-nav-item" data-test="template-nav">Contact</a>
                    </div>
                </nav>
            </Container>
        </StyledHeader>

    );
};

export default Header;