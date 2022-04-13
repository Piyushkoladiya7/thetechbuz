import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Contact from './contact/Contact'
import Details from './details/Details'
import Home from './home/Home'
import '../App.css';
import '../Responsive.css';


const index = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/details" element={<Details />} />
            </Routes>
        </Layout>
    )
}

export default index