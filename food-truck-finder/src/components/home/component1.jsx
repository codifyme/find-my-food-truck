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
        to={{opacity:1, marginTop:0}}>
            {props =>(
                <div style={props}>

                    <div style={c1Style}>
                        <h1>WHERE IS MY NEXT MEAL PARKED?</h1>
                        <p>Real time GPS locator with ton of Food Trucks in your Area. Book and Find Your favorite Food Truck; Our top rated vendors are ready for your next event.</p>
                
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
        padding:'1.5rem'
    }
        // <MyTruckAnimation>
        //     <div style={{backgroundImage: 'url('+hero+')'
        // }}className="hero">Our Food Truck locator is in the City</div>/render
        // <ul className="highway">
        // <li className="city"></li></ul>
        // </MyTruckAnimation>
export default Component1;