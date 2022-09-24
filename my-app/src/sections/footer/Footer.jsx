import React from 'react';
import {StyledFooter} from "./StyledFooter";
import Container from "../../ui-components/container/Container";

const Footer = () => {
    return (

        <StyledFooter>
            <Container>
                <div className="Footer-inner clear">

                    <div
                      className="sqs-layout sqs-grid-12 columns-12 Footer-blocks Footer-blocks--top sqs-alternate-block-style-container empty"
                      data-layout-label="Footer Top Blocks"
                      data-type="block-field" data-updated-on="1573516727012"
                      id="footerBlocksTop">
                        <div className="row sqs-row">
                            <div className="col sqs-col-12 span-12"></div>
                        </div>
                    </div>

                    <div className="Footer-middle">
                        <div className="Footer-business">


                            <div className="Footer-business-info">


                                <div
                                  className="Footer-business-info-item Footer-business-info-item--name">Buffalo
                                    Core Supply
                                </div>
                                <div className="Footer-business-info-item">42
                                    Selkirk Street,
                                </div>
                                <div
                                  className="Footer-business-info-item">Buffalo,
                                    NY, 14210,
                                </div>
                                <div
                                  className="Footer-business-info-item Footer-business-info-item--country">United
                                    States
                                </div>


                                <a href="tel:716-342-2079 " rel="tel"
                                   className="Footer-business-info-item Footer-business-info-item--phone">716-342-2079 </a>
                                <a href="mailto:info@buffalocoresupply.com"
                                   title="info@buffalocoresupply.com"
                                   target="_blank"
                                   className="Footer-business-info-item Footer-business-info-item--email">info@buffalocoresupply.com</a>

                            </div>


                            <div className="Footer-business-hours">
                                <div
                                  className="Footer-business-hours-heading">Hours
                                </div>
                                <div className="Footer-business-hours-item">Mon
                                    7:30am-4pm
                                </div>
                                <div className="Footer-business-hours-item">Tue
                                    7:30am-4pm
                                </div>
                                <div className="Footer-business-hours-item">Wed
                                    7:30am-4pm
                                </div>
                                <div className="Footer-business-hours-item">Thu
                                    7:30am-4pm
                                </div>
                                <div className="Footer-business-hours-item">Fri
                                    7:30am-4pm
                                </div>


                            </div>


                        </div>

                        <div
                          className="sqs-layout sqs-grid-12 columns-12 Footer-blocks Footer-blocks--middle sqs-alternate-block-style-container"
                          data-layout-label="Footer Middle Blocks"
                          data-type="block-field"
                          data-updated-on="1582096306710"
                          id="footerBlocksMiddle">
                            <div className="row sqs-row">
                                <div className="col sqs-col-12 span-12">
                                    <div
                                      className="sqs-block html-block sqs-block-html"
                                      data-block-type="2"
                                      id="block-yui_3_17_2_1_1531949363570_2102">
                                        <div className="sqs-block-content"><p
                                          className=""
                                          data-rte-preserve-empty="true"></p><p
                                          className=""
                                          data-rte-preserve-empty="true"></p>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div
                      className="sqs-layout sqs-grid-12 columns-12 Footer-blocks Footer-blocks--bottom sqs-alternate-block-style-container empty"
                      data-layout-label="Footer Bottom Blocks"
                      data-type="block-field" data-updated-on="1573515777692"
                      id="footerBlocksBottom">
                        <div className="row sqs-row">
                            <div className="col sqs-col-12 span-12"></div>
                        </div>
                    </div>

                </div>
            </Container>
        </StyledFooter>
    );
};

export default Footer;
