import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {

    // const history = useHistory()

    return (
        <Container>
            <div className='mt-3'>
                <Row className=''>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                        <Link to="/details" >
                            <div className='grid-Tech mb-3 '>
                                <div className='text-component'>
                                    <button className='tech-btn'>Tech</button>
                                    <h4>Apple’s Appeal On Epic Game Got Rejected; Ordered To Respect The Decision</h4>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                        {/* <div className='d-flex flex-column justify-content-between gap-1'> */}
                            <div className='grid-Tech grid-Science mb-3'>
                                <div className='text-component'>
                                    <button className='science-btn'>Science</button>
                                    <h4>Latin American farms and fields turn out plenty of food,</h4>
                                </div>
                            </div>
                            <Row className=''>
                                <Col lg={6} xs={12}>
                                    <div className='grid-Tech grid-mobility mb-3'>
                                        <div className='text-component'>
                                            <button className='mobility-btn'>Mobility</button>
                                            <h4>Mercedes-Benz Inspired By ‘Avatar’</h4>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} xs={12}>
                                    <div className='grid-Tech grid-wealth'>
                                        <div className='text-component'>
                                            <button className='wealth-btn'>Wealth</button>
                                            <h4>A STUDY ON CREDIT SCORES</h4>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        {/* </div> */}
                    </Col>
                </Row>
            </div>
            <div className='mobility_popular'>
                <Row>
                    <Col xl={8} lg={12} className="mt-5">
                        <span className='mobility_tab_lable'>Mobility</span>
                        <div className='tab_mobility'>
                            <Row>
                                <Col lg={6}>
                                    <div className='grid-Tech grid-mobility'>
                                        {/* <button className='mobility-btn'>Mobility</button> */}
                                    </div>
                                    <h2 className='mobility-title'>Mercedes-Benz Inspired By ‘Avatar’</h2>
                                    <div className='d-flex date_althaf'>
                                        <p>August 1, 2021 <span>althaf</span> 0 </p>
                                    </div>
                                    <p className='mobility-content'>German manufacturing business Mercedes-Benz appears to be going all out with its dream project – the AVTR thought automobile that’s</p>
                                </Col>
                                <Col lg={6}>
                                    <div className='side-menu gap-2 mb-2'>
                                        <img src="./assets/image/side-menu-car.jfif" alt="" />
                                        <div className='side-menu-text'>
                                            <h3>Best Affordable Cars 2021</h3>
                                            <div className='d-flex date_althaf'>
                                                <p>August 1, 2021 <span>althaf</span> 0 </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='side-menu gap-2 mb-2'>
                                        <img src="./assets/image/side-menu-car-2.jfif" alt="" />
                                        <div className='side-menu-text'>
                                            <h3>Rivian R1T Truck;The Most Adventurous EV Yet.</h3>
                                            <div className='d-flex date_althaf'>
                                                <p>August 1, 2021 <span>althaf</span> 0 </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='side-menu gap-2 mb-2'>
                                        <img src="./assets/image/side-menu-car-3.jfif" alt="" />
                                        <div className='side-menu-text'>
                                            <h3>Ford to Renovate Wind Shield And Glass Roof On Mustang Mach-E</h3>
                                            <div className='d-flex date_althaf'>
                                                <p>August 1, 2021 <span>althaf</span> 0 </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='side-menu gap-2 mb-2'>
                                        <img src="./assets/image/side-menu-car-4.jfif" alt="" />
                                        <div className='side-menu-text'>
                                            <h3>Tesla is making more money</h3>
                                            <div className='d-flex date_althaf'>
                                                <p>August 1, 2021 <span>althaf</span> 0 </p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xl={4} lg={12} className="mt-5">
                        <span className='popular-posts_tab_lable'>Popular Posts</span>
                        <div className='popular-posts'>
                            <div className='side-menu gap-2 mb-2'>
                                <img src="./assets/image/side-menu-car.jfif" alt="" />
                                <div className='side-menu-text'>
                                    <h3>Best Affordable Cars 2021</h3>
                                    <div className='d-flex date_althaf'>
                                        <p>August 1, 2021 <span>althaf</span> 0 </p>
                                    </div>
                                </div>
                            </div>
                            <div className='side-menu gap-2 mb-2'>
                                <img src="./assets/image/side-menu-car-2.jfif" alt="" />
                                <div className='side-menu-text'>
                                    <h3>Rivian R1T Truck;The Most Adventurous EV Yet.</h3>
                                    <div className='d-flex date_althaf'>
                                        <p>August 1, 2021 <span>althaf</span> 0 </p>
                                    </div>
                                </div>
                            </div>
                            <div className='side-menu gap-2 mb-2'>
                                <img src="./assets/image/side-menu-car-3.jfif" alt="" />
                                <div className='side-menu-text'>
                                    <h3>Ford to Renovate Wind Shield And Glass Roof On Mustang Mach-E</h3>
                                    <div className='d-flex date_althaf'>
                                        <p>August 1, 2021 <span>althaf</span> 0 </p>
                                    </div>
                                </div>
                            </div>
                            <div className='side-menu gap-2 mb-2'>
                                <img src="./assets/image/side-menu-car-4.jfif" alt="" />
                                <div className='side-menu-text'>
                                    <h3>Tesla is making more money</h3>
                                    <div className='d-flex date_althaf'>
                                        <p>August 1, 2021 <span>althaf</span> 0 </p>
                                    </div>
                                </div>
                            </div>
                            <div className='side-menu gap-2 mb-2'>
                                <img src="./assets/image/side-menu-car.jfif" alt="" />
                                <div className='side-menu-text'>
                                    <h3>Tesla is making more money</h3>
                                    <div className='d-flex date_althaf'>
                                        <p>August 1, 2021 <span>althaf</span> 0 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='mobility_popular mt-5'>
                <span className='mobility_tab_lable'>Wealth</span>
                <div className='tab_mobility'>
                    <Row className='mb-5'>
                        <Col lg={3} md={6} className="mb-3">
                            <div className='Wealth-component'>
                                <div className='grid-Tech grid-wealth'>
                                    <div className='text-component'>
                                        <button className='wealth-btn'>Wealth</button>
                                        <h4>A STUDY ON CREDIT SCORES</h4>
                                        <h6>June 28, 2021 althaf 0</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="mb-3">
                            <div className='Wealth-component'>
                                <div className='grid-Tech grid-wealth_2'>
                                    <div className='text-component'>
                                        <button className='wealth-btn'>Wealth</button>
                                        <h4>Resolution for the broken supply chain</h4>
                                        <h6>June 28, 2021 althaf 0</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="mb-3">
                            <div className='Wealth-component'>
                                <div className='grid-Tech grid-wealth_3'>
                                    <div className='text-component'>
                                        <button className='wealth-btn'>Wealth</button>
                                        <h4>Bitcoin Revolution at Wall Street</h4>
                                        <h6>June 28, 2021 althaf 0</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="mb-3">
                            <div className='Wealth-component'>
                                <div className='grid-Tech grid-wealth_4'>
                                    <div className='text-component'>
                                        <button className='wealth-btn'>Wealth</button>
                                        <h4>Labors got fired; Strike rages</h4>
                                        <h6>June 28, 2021 althaf 0</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='mobility_popular'>
                <span className='technology_tab_lable'>Technology</span>
                <div className='tab_technology'>
                    <Row>
                        <Col lg={6}>
                            <div className='side-menu gap-2 mb-2'>
                                <img src="./assets/image/side-menu-car.jfif" alt="" />
                                <div className='side-menu-text'>
                                    <h3>Best Affordable Cars 2021</h3>
                                    <div className='d-flex date_althaf'>
                                        <p>August 1, 2021 <span>althaf</span> 0 </p>
                                    </div>
                                </div>
                            </div>
                            <div className='side-menu gap-2 mb-2'>
                                <img src="./assets/image/side-menu-car-2.jfif" alt="" />
                                <div className='side-menu-text'>
                                    <h3>Rivian R1T Truck;The Most Adventurous EV Yet.</h3>
                                    <div className='d-flex date_althaf'>
                                        <p>August 1, 2021 <span>althaf</span> 0 </p>
                                    </div>
                                </div>
                            </div>
                            <div className='side-menu gap-2 mb-2'>
                                <img src="./assets/image/side-menu-car-3.jfif" alt="" />
                                <div className='side-menu-text'>
                                    <h3>Ford to Renovate Wind Shield And Glass Roof On Mustang Mach-E</h3>
                                    <div className='d-flex date_althaf'>
                                        <p>August 1, 2021 <span>althaf</span> 0 </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='side-menu gap-2 mb-2'>
                                <img src="./assets/image/side-menu-car.jfif" alt="" />
                                <div className='side-menu-text'>
                                    <h3>Best Affordable Cars 2021</h3>
                                    <div className='d-flex date_althaf'>
                                        <p>August 1, 2021 <span>althaf</span> 0 </p>
                                    </div>
                                </div>
                            </div>
                            <div className='side-menu gap-2 mb-2'>
                                <img src="./assets/image/side-menu-car-3.jfif" alt="" />
                                <div className='side-menu-text'>
                                    <h3>Ford to Renovate Wind Shield And Glass Roof On Mustang Mach-E</h3>
                                    <div className='d-flex date_althaf'>
                                        <p>August 1, 2021 <span>althaf</span> 0 </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='mobility_popular mt-5'>
                <span className='money_tab_lable'>Money</span>
                <div className='tab_money'>
                    <Row className='mb-3'>
                        <Col lg={4} md={4}>
                            <img src="./assets/image/download.jfif" alt="" width="100%" />
                        </Col>
                        <Col lg={8} md={8}>
                            <div className='money-text-component'>
                                <h3>Latin American farms and fields turn out plenty of food,</h3>
                                <div className='d-flex date_althaf'>
                                    <p>August 1, 2021 <span>althaf</span> 0 </p>
                                </div>
                                <h6>The region accounts for a few quarter of world exports in agricultural and fisheries product, as well as fruits and</h6>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col lg={4} md={4}>
                            <img src="./assets/image/money-2.jfif" alt="" width="100%" />
                        </Col>
                        <Col lg={8} md={8}>
                            <div className='money-text-component'>
                                <h3>ISS Shares The Fact That Astronauts Can Witness A Sunrise and Sunset In Every 90 Minutes</h3>
                                <div className='d-flex date_althaf'>
                                    <p>March 16, 2021 <span>althaf</span> 0 </p>
                                </div>
                                <h6>A team of 2 international astronauts has completed the homework to put in a recent array of star panels on</h6>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col lg={4} md={4}>
                            <img src="./assets/image/money-3.jfif" alt="" width="100%" />
                        </Col>
                        <Col lg={8} md={8}>
                            <div className='money-text-component'>
                                <h3>Study Petrify The Proof For The Existence Of A Ninth Planet!</h3>
                                <div className='d-flex date_althaf'>
                                    <p>December 7, 2020 <span>althaf</span> 0 </p>
                                </div>
                                <h6>In 2016, astronomers from the University of American state, in an exceedingly large paper printed within the Astronomical Journal, theorized</h6>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
                        <Col lg={4} md={4}>
                            <img src="./assets/image/money-4.jfif" alt="" width="100%" />
                        </Col>
                        <Col lg={8} md={8}>
                            <div className='money-text-component'>
                                <h3>How Volcanic Eruptions Caused Numerous Chinese Dynasties To Crumble Over The Last 2,000 Years</h3>
                                <div className='d-flex date_althaf'>
                                    <p>October 3, 2020 <span>althaf</span> 0 </p>
                                </div>
                                <h6>Cooling of the atmosphere caused by volcanic eruptions had forceful impacts on agriculture in addition as crop failures leading to</h6>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}

export default Home