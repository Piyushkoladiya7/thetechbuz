import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DetailSidebar from './DetailSidebar'

const Science = () => {
    return (
        <>
            <Container>
                <Row className='mb-5'>
                    <Col lg={8} className="mt-5">
                        <img src='./assets/image/download.jfif' alt='' width="100%" />
                        <div className='detail-content'>
                            <button className='science-btn'>Science</button>
                            <h1 className='detail-header'>Latin American farms and fields turn out plenty of food,</h1>
                            <div className='detail-body'>
                                <p>The region accounts for a few quarter of world exports in agricultural and fisheries product, as well as fruits and vegetables, salmon, maize, sugar and occasional. The agricultural sector is crucial for Spanish American livelihoods, conducive to a median of four.7% of gross domestic product and using a minimum of Bastille Day of the region’s population.</p>
                                <br />
                                <p>But paradoxically, the quantity of ill-fed folks within the region keeps growing year once year, increasing by around thirteen million folks over the past 5 years. The Pan yankee Health Organization estimates that by 2030, “hunger can have an effect on sixty seven million folks within the region, a figure that doesn’t take under consideration repercussions of the COVID-19 pandemic.”</p>
                                <br />
                                <p>One major culprit: waste matter. over a 3rd of the food created annually round the globe is lost or wasted, and geographical region and therefore the Caribbean are not any exception. With a distinct and increased distribution chain, that quantity of wasted food might be enough to nourish up to a pair of billion folks globally.</p>
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

export default Science