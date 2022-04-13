import React, { useEffect, useState } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import $ from "jquery";
import "../pages/jq/jq.js";
import { Button, Container } from 'react-bootstrap';

const Layout = ({ children, ...props }) => {

  const [top, setTop] = useState(false);
  useEffect(() => {
    $(document).ready(function () {
      $(window).scrollTop(0);
    });
  }, [children, top]);

  return (
    <>
      <Container>
        <Header />
        <div {...props}>{children}</div>
        <button className="return-to-top" onClick={() => setTop(!top)}> <img src='./assets/image/back_to_top.png' alt="" /></button>
      </Container>
      <Footer />
    </>
  )
}

export default Layout