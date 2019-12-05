import React, { Component } from 'react';
import Component1 from '../home/component1';
import Component2 from '../home/component2';
import Component3 from '../home/component3';
/*import MobileNavbar from './MobileNavbar'*/
import styled from 'styled-components';
import '../home/home.styles.css';


const MyHome=styled.div`
    display:flex;
    flex-flow:column nowrap;
    justify-content:flex-start;
    `

class Home extends Component{
    render(){
        return(
            <MyHome>
                <div className="Home">
                    <Component1/>
                    <Component2/>
                    <Component3/>
                </div>
                {/*<MobileNavbar/>*/}
            </MyHome>
        )
    }
}
export default Home;