import React from "react";
import { FlowerLotus, ArrowDown } from "phosphor-react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Home.css'

const Home = () => {
	return (
        <><Container fluid={true} className="p-0, Container">
            <Row noGutters={true}>
                <Col>
                    <div className='landingpage_partone'>
                        <h1 className="hero_header">Have <span className="brandname">Plantiful</span> Plants <FlowerLotus size={38} /> </h1>
                        <p className="hero_description">
                            We help you keep your plants alive by sending helpful reminders
                            straight to your inbox.
                        </p>
                        <Button href="#findoutmore" style={{ backgroundColor: "#55A356", border: "none" }}>Find out more <ArrowDown size={20} /></Button>
                    </div>
                </Col>
            </Row>
        </Container>
        <div className="landingpage_parttwo_start">
                <h2 className="landingpage_parttwo_header" id="findoutmore">We can help you be the perfect plant parent!</h2>
                <p className="landingpage_parttwo_description">Just follow these simple steps!</p></div>
                <div className='landingpage_parttwo'> 
                <Container className="boxes">
                    <Row>
                        <Col md={4}>
                            <div className='box_one'>
                                <p className='box_title'>SEARCH</p>
                                <p>Search our inventory and find the plants you own</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 3, offset: 3 }}><div className='box_two'>
                            <p className='box_title'>ADD</p>
                            <p>Add your plant collection to your customisable dashboard</p>
                        </div></Col>
                    </Row>
                    <Row>
                        <Col md={4}><div className='box_three'>
                            <p className='box_title'>SCHEDULE</p>
                            <p>
                                Schedule reminders for each plant and we will send you a
                                notification when it is thirsty
                            </p>
                        </div></Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 3, offset: 3 }}>
                            <div className='box_four'>
                                <p className='box_title'>LEARN</p>
                                <p>Learn handy tips and tricks to help best care for your plants.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
                
                </>                );
                };

                export default Home;

