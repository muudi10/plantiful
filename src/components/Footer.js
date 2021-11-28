import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
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
                <ul>
                <li><a href="mailto:hello@plantiful.com">Email Us</a></li>
                <li>Contact Centre: 0200 476 9403</li>
                <li>Plants at Plantiful, 123 Street North, Manchester, M12 9XX</li>
                </ul>
            </div>
            </Col>
            <Col>
            <div className="footer_parttwo">
                <h5 className="footer_title">Follow along:</h5>
                <ul>
                <li>@plantiful_plants</li>
                <li>Insta: Plantiful</li>
                <li>Facebook: Plantiful_Plants</li>
                </ul>
                <p className="footer_copyright">
                    &copy; Plantiful {new Date().getFullYear()} | All Rights Reserved | Privacy
                </p>
            </div>
            </Col>
            <Col>
            <div className="footer_partthree">
                <h5 className="footer_title">Explore:</h5>
                <ul>
                <li>Log in (link)</li>
                <li>Plants (link)</li>
                <li>About (link)</li>
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

