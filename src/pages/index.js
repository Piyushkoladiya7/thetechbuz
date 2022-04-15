import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Contact from './contact/Contact'
import Details from './details/Details'
import Home from './home/Home'
import '../App.css';
import '../Responsive.css';
import Tech from './details/Tech'
import Science from './details/Science'
import Mobility from './details/Mobility'
import Wealth from './details/Wealth'
import BestAffordableCars from './details/BestAffordableCars'
import Rivian from './details/Rivian'
import Ford from './details/Ford'
import Tesla from './details/Tesla'
import BrokenSupply from './details/BrokenSupply'
import Bitcoin from './details/Bitcoin'
import StrikeRages from './details/StrikeRages'
import SamsungJet from './details/SamsungJet'
import Xiaomi from './details/Xiaomi'
import Motorola from './details/Motorola'
import AccessInstagram from './details/AccessInstagram'
import ISS from './details/ISS'
import StudyPetrify from './details/StudyPetrify'
import VolcanicEruptions from './details/VolcanicEruptions'
import Quiz from './quiz/Quiz'


const index = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/details" element={<Details />} />
                <Route path="/tech" element={<Tech />} />
                <Route path="/science" element={<Science/>} />
                <Route path="/mobility" element={<Mobility/>} />
                <Route path="/wealth" element={<Wealth/>} />
                <Route path="/bestaffordablecars" element={<BestAffordableCars/>} />
                <Route path="/rivian" element={<Rivian/>} />
                <Route path="/ford" element={<Ford/>} />
                <Route path="/tesla" element={<Tesla/>} />
                <Route path="/brokensupply" element={<BrokenSupply/>} />
                <Route path="/bitcoin" element={<Bitcoin/>} />
                <Route path="/strike-rages" element={<StrikeRages/>} />
                <Route path="/samsung-jet" element={<SamsungJet/>} />
                <Route path="/xiaomi" element={<Xiaomi/>} />
                <Route path="/motorola" element={<Motorola/>} />
                <Route path="/access-instagram" element={<AccessInstagram/>} />
                <Route path="/iss" element={<ISS/>} />
                <Route path="/study-petrify" element={<StudyPetrify/>} />
                <Route path="/volcanic-eruptions" element={<VolcanicEruptions/>} />
            </Routes>
        </Layout>
    )
}

export default index