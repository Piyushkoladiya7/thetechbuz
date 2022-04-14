import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DetailSidebar from './DetailSidebar'

const Ford = () => {
    return (
        <>
            <Container>
                <Row className='mb-5'>
                    <Col lg={8} className="mt-5">
                        <img src='./assets/image/Mustang-car.jfif' alt='' width="100%" />
                        <div className='detail-content'>
                            <button className='mobility-btn'>Mobility</button>
                            <h1 className='detail-header'>Rivian R1T Truck;The Most Adventurous EV Yet.</h1>
                            <div className='detail-body'>
                                <p>As a left coast urbanite, i am not specifically what you’d decision a truck guy. (Fifteen to twenty mpg once the planet is warming and gas is pushing $5 a gallon? No many thanks.) however i am undoubtedly an electrical vehicle guy (most recently whereas testing the Lucid Air) and a independent tenting go in the weather reasonably guy (including at a dozen Burning Mans). thus whereas i used to be cautious concerning my 1st ever truck drive being Associate in Nursing cross-country check of the Rivian R1T — an electrical truck currently shipping to early customers in its $73,000 launch edition Associate in Nursing garnering nice reviews on the manner — I conjointly appropriated the chance love it was an outsized handwheel.</p>
                                <br />
                                <p>Good factor I did, as a result of the R1T simply shot to the highest of my list of dream vehicles. seems that trucks ar a blast to drive, particularly once they are adorned with ten cameras feeding to a 16-inch screen that may assist you navigate even the muddiest downhill furrows. seems that once you take mpg worries and vary anxiety out of the equation (the R1T launch edition gets 314 miles to a charge, that puts it within the same vary as a Tesla Model 3; the corporate is promising a 400+ mile version in 2022), off-roading and tenting become rather more possible for the eco-conscious urbanite.</p>
                                <br />
                                <p>As several of the reviews have noted, Rivian appears to be marketing its launch vehicle as a form of “Patagonia” or Associate in Nursing “REI” truck. however that is not simply selling bluster. It very is supremely straightforward, if not low-cost, to appear a tent on prime of the truck, either on the flatbed or the roof, with one or two of crossbars at $450 every. simply add some well-staked-down shade, and you’ve got got the right Burning Man truck tenting setup.</p>
                                <br />
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
                        </div> */}
                        <DetailSidebar />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Ford