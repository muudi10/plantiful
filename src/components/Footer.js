import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { EnvelopeSimple, PhoneCall, At, TwitterLogo, InstagramLogo, FacebookLogo } from "phosphor-react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="landingpage_footer">
        <Container>
        <footer >
                <Row>
                    <Col>
            <div className="footer_partone">
                <h5 className="footer_title">Get in touch:</h5>
                <ul className="list_styles">
                <li><a href="mailto:hello@plantiful.com" className="footer_links"> <At size={24} />Email Us</a></li>
                <li><PhoneCall size={24} />Contact Centre: 0200 476 9403</li>
                <li><EnvelopeSimple size={24} />Plants at Plantiful, 123 North, Manchester, M12 9XX</li>
                </ul>
            </div>
            </Col>
            <Col>
            <div className="footer_parttwo">
                <h5 className="footer_title">Follow along:</h5>
                <ul className="list_styles">
                <li><TwitterLogo size={24} />plantiful_plants</li>
                <li><InstagramLogo size={24} />Plantiful_</li>
                <li><FacebookLogo size={24} />Plantiful</li>
                </ul>
                <p className="footer_copyright">
                    &copy; Plantiful {new Date().getFullYear()} | All Rights Reserved | Privacy
                </p>
            </div>
            </Col>
            <Col>
            <div className="footer_partthree">
                <h5 className="footer_title">Explore:</h5>
                <ul className="list_styles">
                <li>
                <a href="/loginform" className="footer_links"> Log in </a></li>
                <li>
                 <a href="/registerform" className="footer_links"> Sign up </a></li>
                 <li>
                  <a href="/plants" className="footer_links"> Plant directory </a></li>
           
                </ul>
            </div>
            </Col>
            </Row>
        </footer>
        </Container>
        </div>
    )
}

export default Footer

