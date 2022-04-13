import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
    return (
        <>
            <Container className=" mb-5">
                <Row>
                    <Col lg={8} className="Contact-form mt-5">
                        <h1>Contact</h1>
                        <form>
                            <label >Name <span>*</span></label><br />
                            <input type={"textarea"} />
                            <label >Email <span>*</span></label><br />
                            <input type={"textarea"} />
                            <label >Subject <span>*</span></label><br />
                            <input type={"textarea"} />

                            <label>Message <span>*</span></label><br />
                            <textarea rows="5" type={"text"} />
                            <div>
                                <button>Submit</button>
                            </div>
                        </form>
                    </Col>
                    <Col lg={4}>
                        <div className='mobility_popular mt-5'>
                            <span className='recent_posts_tab_lable'>Example Widget</span>
                            <div className='tab_recent_posts'>
                                <span>This is an example widget to show how the Contact Page Sidebar looks by default. You can add custom widgets from the widgets screen in the admin. If custom widgets are added then this will be replaced by those widgets.</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact