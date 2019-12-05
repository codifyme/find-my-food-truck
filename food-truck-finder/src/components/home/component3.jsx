import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops';



export class Component3 extends Component{
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
                
                    </div> */}
                        <div style={c3Style}>
                            <div className="hero">
                                <div class="highway"></div>
                                <div class="city"></div>

                                <div class="car">
                                    <img src="./../../images/caranimation/foodtruck4.png"></img>
                        
                                </div>
                            </div>
                        </div>
                </div>
            )}
        </Spring> 
        )
    }
}

const c3Style={
    background:'./../../images/foodtruck6.png',
    color:'white',
    padding:'1.5rem'
}
export default Component3;