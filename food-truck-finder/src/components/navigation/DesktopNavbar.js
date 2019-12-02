import React from 'react';
import styled from 'styled-components';
//import {Navlinks} from './Navlinks';
import {Link} from 'react-router-dom';
import logo from './../../images/foodtruck5.png';
import navIcon from './../../images/locator.png';
/*import mobileNavIcon from '../.././images/mobilenavicon.png'*/

const MyDesktopNavbar=styled.nav`
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-evenly;
    align-items:center;

    background:white;
    /*background: linear-gradient(to right, darkturquoise , skyblue);*/
    color:black;
    margin:10px;
    height:10vh;

    .logo{
        font-size:10vh;
        font-weight:bold;
        text-shadow:3px 3px 3px black; 
    }
    .nav-icon{
        font-size:10vh;

    }
    .nav-links{
        display:flex;
        flex-flow:row nowrap;
        justify-content:space-evenly;
        align-items:center;

        width:40vw;
        list-style:none;
    }
    .link{
        color:white;
        font-size:3.5vh;
        text-decoration:none;
    }
`
// const MyMobileNavButton=styled.button
//     background:transparent;
//     height:1vh;
//     width:1vh;
//     border:none;
const DesktopNavbar = () => {

        return (
           <MyDesktopNavbar>
               <div style={{backgroundImage: 'url(' + logo + ')' 
            }} className="menu__logo">Food Truck Finder</div>

               <ul className="nav-links">
                   <li>
                       <Link to="/" className="Link">Home</Link>
                   </li>
                   <li>
                       <Link to="/map" className="Link">Map</Link>
                   </li>
                   <li>
                       <Link to="/bookevents" className="Link">Book Events</Link>
                   </li>
                   <li>
                       <Link to="/recipe" className="Link">Recipe</Link>
                   </li>

               </ul>
                <button style={{backgroundImage: 'url(' + navIcon + ')'
               }} className="nav__icon"></button>
               
               {/*<MyMobileNavButton>
            <img src={mobileNavIcon} alt="click the button"/></MyMobileNavButton>*/}
           </MyDesktopNavbar>
        );
};

export default DesktopNavbar;