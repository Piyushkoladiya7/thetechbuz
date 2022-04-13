import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer-section">
                <Container>
                    <Row className="footer-content">
                        <Col lg={5} md={6} sm={6} className="footer-logo">
                            <img src='./assets/image/technicalbuz_logo.png' alt="" />
                            <div className="">
                                <p>
                                    Technicalbuz.com is delivering contents related to tech, invest, updates in this digital era. Our specialty is we post once in a while but the content will be 100% unique. We hope that uniqueness has build a separate fan base for technicalbuz.com. thanks visit again.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={6} className="img-content footer_links usefull-link">
                            <h3>Categories</h3>
                            <Link to="/" className="link-contant">
                                <p>Mobility</p>
                            </Link>
                            <Link to="/service" className="link-contant">
                                <p>Science</p>
                            </Link>
                            <Link to="/about" className="link-contant">
                                <p>Tech</p>
                            </Link>
                            <Link to="/contact" className="link-contant">
                                <p>Wealth</p>
                            </Link>
                        </Col>
                        <Col lg={3} md={6} sm={6} className="img-content footer_links usefull-link">
                        </Col>
                    </Row>
                </Container>
            </div>
            <section className="footerbottom">
                <Container>
                    <p>Copyright © 2021<span>Technicalbuz.com</span></p>
                </Container>

            </section>
        </>
    )
}

export default Footer