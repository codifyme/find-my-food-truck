import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops';

export class Component2 extends Component {
    render() {
        return (
               <Spring
        from={{opacity:0}}
        to={{opacity:1}}
        config={{delay:1000, duration:1000}}>
            
            {props =>(
                <div style={props}>

                    {/* <div style="c2Style">
                        <h1>component 2 - WHERE IS MY NEXT MEAL PARKED?</h1>
                        <p>Real time GPS locator with ton of Food Trucks in your Area. Book and Find Your favorite Food Truck; Our top rated vendors are ready for your next event.</p>
                
                    </div> */}
                    <div style={c2Style}>
                        <h1>ABOUT US</h1>
                        <p>We are 4 Entrepreneurs who brought together this idea of building a Food Truck Locator App to help small businesses increase their sales and improve customer experience.</p>

                    </div>
                </div>
            )}
        </Spring> 
        )
    }
}

const c2Style={
    background:'slateblue',
    color:'white',
    padding:'2rem',
    margin:'2rem'
}
export default Component2;
