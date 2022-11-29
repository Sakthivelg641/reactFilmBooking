import React from 'react'
import Navbar from '../components/homepage/Navbar'
import Heading from '../components/homepage/Heading'
import Imagecards from '../components/homepage/Imagecards'
import Footer from '../components/homepage/Footer'
function Homepage() {
  return (
    <div>
            <Navbar></Navbar>
            <Heading></Heading>
            <Imagecards></Imagecards>
            <Footer></Footer>
    </div>
  )
}

export default Homepage