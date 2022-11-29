
// import './homepage.css'
// import Heading from './Heading';
// import React, { Component } from 'react';
// class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         <div className="topnav" id="myTopnav">
//         <a href="seatBooking.html" className="active">
//           <i className="fa-solid fa-film"></i>
//         </a>
//         <a href="#news">News</a>
//         <a href="#contact">Contact</a>
//         <a href="#about">About</a>
//         <a href="#nothing" className="icon">
//           <i className="fa fa-bars"></i>
//         </a>
//       </div>
//       <Heading></Heading>
//       </div>
//     )
//   }
// }
// export default Navbar
import React from 'react'
function Navbar() {
  return (
    <div>
         <div className="topnav" id="myTopnav">
         <a href="seatBooking.html" className="active">
           <i className="fa-solid fa-film"></i>
         </a>
         <a href="#news">News</a> 
         <a href="#contact">Contact</a>
         <a href="#about">About</a>
         <a href="#nothing" className="icon">
           <i className="fa fa-bars"></i>
         </a>
    </div>
    </div>
  )
}

export default Navbar
