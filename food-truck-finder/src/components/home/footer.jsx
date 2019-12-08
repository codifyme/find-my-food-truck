import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops';

export class Footer extends Component {
    render() {
        return (
               <Spring
                    from={{opacity:0}}
                    to={{opacity:1}}>
            
            {props =>(
                <div style={props}>

                    {/* <div style="c2Style">
                        <h1>component 2 - WHERE IS MY NEXT MEAL PARKED?</h1>
                        <p>Real time GPS locator with ton of Food Trucks in your Area. Book and Find Your favorite Food Truck; Our top rated vendors are ready for your next event.</p>
                
            </div>*/}
                    <div style={c4Style}>
                        <p>Copyright &copy; 2019 Food Truck Finder</p>

                    </div>
                </div>
            )}
        </Spring> 
        )
    }
}

const c4Style={
    background:'lightsea',
    color:'white',
    padding:'1rem',
    margin:'1.5rem',
    align:'center'
}
export default Footer;