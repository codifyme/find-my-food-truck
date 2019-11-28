import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mobileNavIcon from '../.././images/mobilenavicon.png'

const MyDesktopNavbar=styled.nav`
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-evenly;
    align-items:center;

    background:lightblue;
    color:white;

    height:15vh;

    .logo{
        font-size:7vh;
        font-weight:bold;
        text-shadow:3px 3px 3px black;
    }
    .nav-links{
        display:flex;
        flex-flow:row nowrap;
        justify-content:space-evenly;
        align-items:center;

        width:35vw;
        list-style:none;
    }
    .link{
        color:white;
        font-size:2.5vh;
        text-decoration:none;
    }
`

const MyMobileNavButton=styled.button`
    background:transparent;
    height:6vh;
    width:6vh;
    border:none;
    `

const DesktopNavbar = () => {

        return (
           <MyDesktopNavbar>
               <div className="logo">Logo</div>

               <ul className="nav-links">
                   <li>
                       <Link to="/" className="Link">Home</Link>
                   </li>
                   <li>
                       <Link to="/about" className="Link">About</Link>
                   </li>
                   <li>
                       <Link to="/map" className="Link">Map</Link>
                   </li>
                   <li>
                       <Link to="/bookevents" className="Link">Book Events</Link>
                   </li>
                   <li>
                       <Link to="/recipe" className="Link">recipe</Link>
                   </li>

               </ul>
               <MyMobileNavButton>
                    <img src={mobileNavIcon} alt="click the button"/></MyMobileNavButton>
           </MyDesktopNavbar>
        );
};

export default DesktopNavbar;