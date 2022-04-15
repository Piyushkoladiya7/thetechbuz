import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DetailSidebar from './DetailSidebar'

const Mobility = () => {
    return (
        <>
            <Container>
                <Row className='mb-5'>
                    <Col lg={8} className="mt-5">
                        <img src='./assets/image/grid_img_3.jfif' alt='' width="100%" />
                        <div className='detail-content'>
                            <button className='mobility-btn'>Mobility</button>
                            <h1 className='detail-header'>Mercedes-Benz Inspired By ‘Avatar’</h1>
                            <div className='detail-body'>
                                <p>German manufacturing business Mercedes-Benz appears to be going all out with its dream project – the AVTR thought automobile that’s expected to be one thing right out from maverick movie maker James Cameron’s fashionable phantasy film Avatar. whereas the luxurious automotive whole has been engaged on this project for the past few months, they only raised the bar to successive level by unveiling a replacement version of the thought automobile that might use the Brain-Computer Interface technology.</p>
                                <br />
                                <p>Known for his or her high-end luxury vehicles and setting new market trends with their innovative technology, Mercedes-Benz is going no inebriated right-side-out with its futurist AVTR thought automobile. additionally to the breathless style, the German car manufacturer is decided to introduce humans to the wild thought of thought-driven vehicles. And at the recent IAA 2021 show in metropolis, Mercedes-Benz unconcealed its BCI technology automobile version that sent a wave of feeling across the complete tech-driven automotive world.</p>
                                <br />
                                <p>While the absolutely practical electrical AVTR models conferred by the German manufacturing business left everybody surprised, the mind-controlled version of the futurist vehicle is presently in development and testing stage. what is more, Mercedes-Benz conjointly declared that successive ‘thought driven’ iteration of AVTR can accompany associate degree engine power of quite 350kW, and can be put in with battery (made from graphene-based technology) of nearly 110kWhr, that may be absolutely charged inside quarter-hour.</p>
                                <br/>
                                <img src="./assets/image/mobilety-detail-img.jfif" alt="" width="100%"/>
                            </div>
                        </div>
                        <div className='detail-form mt-5'>
                            <div className="replay-form Contact-form">
                                <h3>Leave a Reply</h3>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <form>
                                    <label>Comment <span>*</span></label><br />
                                    <textarea rows="5" type={"text"} />
                                    <label >Email <span>*</span></label><br />
                                    <input type={"textarea"} />
                                    <label>Website</label><br />
                                    <input type={"textarea"} />
                                    <input className="checkbox" id="check" type={"checkbox"}></input>
                                    <label for="check">Save my name, email, and website in this browser for the next time I comment.</label>
                                    <div >
                                        <button>Post Comment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        {/* <div className='search-input mb-5 mt-5'>
                            <input type="text" placeholder='Search' />
                            <button>
                                <img src="./assets/image/search.png" alt="" />
                            </button>
                        </div>
                        <div className='mobility_popular'>
                            <span className='recent_posts_tab_lable'>Recent Posts</span>
                            <div className='tab_recent_posts'>
                            <Link to="/tech" className='text-decoration-none'>
                                    <p>Apple’s Appeal On Epic Game Got Rejected; Ordered To Respect The Decision</p>
                                </Link>
                                <Link to="/science" className='text-decoration-none'>
                                    <p>Latin American farms and fields turn out plenty of food,</p>
                                </Link>
                                <Link to="/mobility" className='text-decoration-none'>
                                    <p>Mercedes-Benz Inspired By ‘Avatar’</p>
                                </Link>
                                <Link to="/wealth" className='text-decoration-none'>
                                    <p>A STUDY ON CREDIT SCORES</p>
                                </Link>
                                <Link to="/bestaffordablecars" className='text-decoration-none'>
                                    <p>Best Affordable Cars 2021</p>
                                </Link>
                            </div>
                        </div>
                        <div className='mobility_popular'>
                            <span className='recent_posts_tab_lable'>Categories</span>
                            <div className='tab_recent_posts'>
                                <p>Mobility</p>
                                <p>Science</p>
                                <p>Tech</p>
                                <p>Wealth</p>
                            </div>
                        </div>
                        <div className='mobility_popular'>
                            <span className='recent_posts_tab_lable'>Meta</span>
                            <div className='tab_recent_posts'>
                                <p>Log in</p>
                                <p>Entries feed</p>
                                <p>Comments feed</p>
                                <p>WordPress.org</p>
                            </div>
                        </div> */}
                        <DetailSidebar/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Mobility