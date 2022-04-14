import React from 'react'
import { Link } from 'react-router-dom'

const DetailSidebar = () => {
    return (
        <>
            <div className='search-input mb-5 mt-5'>
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
            </div>
        </>
    )
}

export default DetailSidebar