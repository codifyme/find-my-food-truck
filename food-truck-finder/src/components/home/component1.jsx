import React, {Component} from 'react';
import {Spring} from 'react-spring/renderprops';
//import styled from 'styled-components';
//import {Link} from 'react-router-dom';
//import hero from './../../images/caranimation/city.png';
import './home.styles.css';

export class Component1 extends Component{
    render(){
        return(
            <div>
                <Spring
        from={{opacity:0, marginTop: -500}}
        to={{opacity:1, marginTop:0}}
        config={{delay:1000, duration:1000}}>
        
            {props =>(
                <div style={props}>

                    <div style={c1Style}>
                        <h1>WHERE IS MY NEXT MEAL PARKED?</h1>
                        <p>Real time GPS locator with tons of Food Trucks in your Area. Find Your favorite Food Truck and book our top rated vendors for your next party.</p>
                
                    </div>
                    {/* <div className="About">
                        <h2>ABOUT US</h2>
                        <p>We are 4 Enterpreneurs brought together this idea of building a App by helping small business food truck to </p>

                    </div> */}
                </div>
            )}
        </Spring>
            </div>  
        )
    }
    
}
    const c1Style={
        background:'steelblue',
        color:'white',
        padding:'2rem',
        margin:'2rem',
        
    }
        // <MyTruckAnimation>
        //     <div style={{backgroundImage: 'url('+hero+')'
        // }}className="hero">Our Food Truck locator is in the City</div>/render
        // <ul className="highway">
        // <li className="city"></li></ul>
        // </MyTruckAnimation>
export default Component1;