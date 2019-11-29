import React from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';


const MyMobileNavbar=styled.nav`

    width:50vw;
    background:lightgreen;
    align-self:flex-end;

    .nav-links{
        display:flex;
        flex-flow:column nowrap;
        justify-content:space-evenly;
        align-items:center;

        height:60vh;
        list-style:none;
    }
    .link{
        color:white;
        font-size:2.5vh;
        text-decoration:none;
    }
`

const MobileNavbar=()=>{

        return (
            <MyMobileNavbar>
                <Navlinks/>
            </MyMobileNavbar>
        );
};

export default MobileNavbar;