import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Details = () => {
    return (
        <>
            <Container>
                <Row className='mb-5'>
                    <Col lg={8} className="mt-5">
                        <img src='./assets/image/details-img.jfif' alt='' width="100%" />
                        <div className='detail-content'>
                            <button className='tech-btn'>Tech</button>
                            <h1 className='detail-header'>Apple’s Appeal On Epic Game Got Rejected; Ordered To Respect The Decision</h1>
                            <div className='detail-body'>
                                <p>A us federal choose has rejected Apple’s attractiveness seeking a continue a previous judicial writ relating to its App store payment policies.</p>
                                <br />
                                <p>Previously, as a part of the Apple v. Epic Games trial ruling, a U.S. District Court choose had dominated that Apple might not stop developers from redirecting users to external payment suppliers.</p>
                                <br />
                                <p>The court, therefore, had ordered Apple to start out permitting developers to try to to identical by not than Gregorian calendar month ten, 2021.</p>
                            </div>
                        </div>
                        <div className='detail-form mt-5'>
                            <div className="replay-form Contact-form">
                                <h3>Leave a Reply</h3>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <form>
                                    {/* <div> */}
                                    <label>Comment <span>*</span></label><br />
                                    <textarea rows="5" type={"text"} />
                                    {/* </div>
                                    <div> */}
                                    <label >Email <span>*</span></label><br />
                                    <input type={"textarea"} />
                                    {/* </div>
                                    <div> */}
                                    <label>Website</label><br />
                                    <input type={"textarea"} />
                                    {/* </div> */}

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
                        <div className='search-input mb-5 mt-5'>
                            <input type="text" placeholder='Search' />
                            <button>
                                <img src="./assets/image/search.png" alt="" />
                            </button>
                        </div>
                        <div className='mobility_popular'>
                            <span className='recent_posts_tab_lable'>Recent Posts</span>
                            <div className='tab_recent_posts'>
                                <p>Apple’s Appeal On Epic Game Got Rejected; Ordered To Respect The Decision</p>
                                <p>Latin American farms and fields turn out plenty of food,</p>
                                <p>Mercedes-Benz Inspired By ‘Avatar’</p>
                                <p>A STUDY ON CREDIT SCORES</p>
                                <p>Best Affordable Cars 2021</p>
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Details