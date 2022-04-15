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
                            <img src='./assets/image/22.png' alt="" width="220px" height="50px" />
                            <div className="">
                                <p>
                                    thetechbuz.com is delivering contents related to tech, invest, updates in this digital era. Our specialty is we post once in a while but the content will be 100% unique. We hope that uniqueness has build a separate fan base for thetechbuz.com. thanks visit again.
                                </p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
            <section className="footerbottom">
                <Container>
                    <p>Copyright © 2021<span>thetechbuz.com</span></p>
                </Container>

            </section>
        </>
    )
}

export default Footer