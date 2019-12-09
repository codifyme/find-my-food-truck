import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops';
//import car from './../../images/foodtruckanimation.png';
import '../home/home.styles.css';

export class Footer extends Component {
    render() {
        return (
               <Spring
                    from={{opacity:1}}
                    to={{opacity:0.7}}>
            
            {props =>(
                <div style={props}>

                    {/* <div style="c2Style">
                        <h1>component 2 - WHERE IS MY NEXT MEAL PARKED?</h1>
                        <p>Real time GPS locator with ton of Food Trucks in your Area. Book and Find Your favorite Food Truck; Our top rated vendors are ready for your next event.</p>
                
            </div>*/}
                    <div style={c4Style}>
                        
                        <h2>Helping foodies find the food, events, and deals (ON WHEELS)</h2>
                        <div className="container"> </div>
                        <footer className="footer text">Copyright 2019 @Food Truck Finder. All rights reserved </footer>

                    </div>
            
             </div>
            

            )}
        </Spring> 
        )
    }
}

const c4Style={
    background:'black',
    color:'white',
    padding:'2rem',
    margin:'2rem',
    position:'relative',
  
}
export default Footer;