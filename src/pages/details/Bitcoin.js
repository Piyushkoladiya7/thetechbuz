import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DetailSidebar from './DetailSidebar'

const Bitcoin = () => {
    return (
        <>
            <Container>
                <Row className='mb-5'>
                    <Col lg={8} className="mt-5">
                        <img src='./assets/image/bitcoin-img.jpg' alt='' width="100%" />
                        <div className='detail-content'>
                            <button className='wealth-btn'>Wealth</button>
                            <h1 className='detail-header'>A STUDY ON CREDIT SCORES</h1>
                            <div className='detail-body'>
                                <p>Envision a world without FICO assessments. It may sound ecstatic, never contemplating whether three little numbers could tank your capacity to purchase a vehicle or get an advance, yet it would get muddled before long. FICO ratings and reports exist since moneylenders need a feeling of the fact that they are so liable to have their advances reimbursed, and you don’t actually need loan specialists simply going on impulse and premonition when choosing whom to loan to and based on what conditions. That could undoubtedly prompt separation.</p>
                                <br />
                                <p>However, the current structure — in which triple-digit scores got from reports out of three unremarkable credit departments hold an outsized significance in our economy — is additionally imperfect, it’s as yet biased. It benefits specific individuals (frequently the people who are in an ideal situation monetarily, and white) due to at times subjective variables, for example, regardless of whether they’re a property holder or a leaseholder, or whether their folks thought to put their name on a Visa to begin fabricating a set of experiences. Pundits say this framework is hard to explore and ineffectively oversaw, and that the three departments that as of now rule the American credit framework are excessively strong and excessively untouchable.</p>
                                <br />
                                <img src="./assets/image/bitcoin-img-2.jpg" alt="" width="100%" />
                                <p>There have been expanding endeavors to incorporate lease installment history in credit detailing and scoring with the goal that tenants have a superior shot at working on their numbers. On a more extensive and maybe squishier level, it merits inquiring as to whether the manner in which we manage acknowledge necessities to move too. A lot of individuals have monetary setbacks eventually throughout their lives. How enormous a cost would it be a good idea for them not out of the ordinary to pay for that? The monetary battleground in the US isn’t by and large level.</p>
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
                        <DetailSidebar/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Bitcoin