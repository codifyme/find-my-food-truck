// import { render } from 'react-dom'
// import React, { useState, useEffect } from 'react'
// import { useTransition, animated, config } from 'react-spring'
// import './home.styles.css'

// const slides = [
//   { id: 0, url: 'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80' },
//   { id: 1, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80' },
//   { id: 2, url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80' },
//   { id: 3, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80' },
// ]

// const Component3 = () => {
//   const [index, set] = useState(0)
//   const transitions = useTransition(slides[index], item => item.id, {
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     config: config.molasses,
//   })
//   useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])
//   return transitions.map(({ item, props, key }) => (
//     <animated.div
//       key={key}
//       class="bg"
//       style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
//     />
//   ))
// }

// render(<Component3 />, document.getElementById('root'))
// export default Component3;









// import React from 'react';
// //import {Spring} from 'react-spring/renderprops';
// import city from './../../images/city.png';
// //import {Link} from 'react-router-dom';
// import styled from 'styled-components';
// import car from './../../images/car.png';
// import highway from './../../images/road.jpg';

// const MyComponent3=styled.div`
//     display:flex;
//     flex-flow:row nowrap;
//     justify-content:space-evenly;
//     align-items:center;

//     background:white;
//     /*background: linear-gradient(to right, darkturquoise , skyblue);*/
//     color:black;
//     margin:10px;
//     height:10vh;
  
// `
// const Component3=()=>{
//         return(
//             <MyComponent3>
                
                        
//                             <div style={{backgroundImage: 'url(' + city + ')' 
//                        }}className="city">City</div>
                       
            
//                         <div style={{backgroundImage: 'url(' + highway + ')' 
//                        }}className="highway">Road</div>

//                         <div style={{backgroundImage: 'url(' + car + ')' 
//                        }}className="car">Car</div>
                       
    
                
//             </MyComponent3> 
//         );
//                     };
// export default Component3;



// import React, {Component3} from 'react';
// import React from 'react';
// import styled from 'styled-components';

// import {Spring} from 'react-spring/renderprops';
// import hero from './../../images/sky.png';
// import road from './../../images/road.jpg';
// import city from './../../images/city.png';
// import car from './../../images/car.png';
// import wheel from './../../images/wheel.png';

//import './home.styles.css';




//import wheel from './../../images/caranimation/wheel.png';

// const MyComponent3=styled.div`
//     display:flex;
//     flex-flow:column nowrap;
//     justify-content:space-evenly;
//     align-items:center;
//     color-adjust:black;

//     background:white;
//     /*background: linear-gradient(to right, darkturquoise , skyblue);*/
  
//     .hero{
//         height:100vh;
//         width:100%;
//         background-size:cover;
//         background-position:center;
//         position:relative;
//         overflow-x:hidden;
//     }
//     .highway{
//         height:100px;
//         width:400px;
//         /* background-image:url('./../../images/road.jpg'); */
//         display:black;
//         position:absolute;
//         bottom:0;
//         left:0;
//         right:0;
//         z-index:1;
//         animation:highway 5s linear infinite; 
//     }
//     @keyframes highway
//         {
//         100%{
//             transform:translateX(-3400px);
//         }
//     }
//     .city{
//         height:250px;
//         width:500%;
//         position: absolute;
//         bottom:200px;
//         left:0;
//         right:0;
//         display:block;
//         z-index:1;
//         background-repeat:repeat-x;
//         animation:city 20s linear infinite;
//     }
//     @keyframes city{
//         100%{
//             trandfor: translateX(-1400px);
//         }
//     }
//     .car
//     {
//         width:400px;
//         left:50%;
//         bottom:100px;
//         transform:translateX(-50%);
//         position:absolute;
//         z-index:2;
//     }
//     .car img{
//         width:200%;
//         animation:car is linear infinite;
//     }
//     @keyframes car{
//         100%{
//             transform:translateY(-1px);
//         }50%{
//             transform:translateY(1px);
//         }
//         0%{
//             transform:translateY(-1px);
//         }
//     }
//     .wheel{
//         left:50%;
//         bottom:178px;
//         transform:translateX(-50%);
//         position: absolute;
//         z-index:2;
//     }
//     .wheel img{
//         width:72px;
//         height:72px;
//         animation:wheel 1s linear infinite;
//     }
//     .back-wheel{
//         left:-165px;
//         position: absolute;
//     }
//     .front-wheel{
//         left:80px;
//         position:absolute;
//     }
//     @keyframes  wheels{
//         100%{
//             transform:rotate(360deg);
//         }
//     }
// `
// const Component3=()=>{
// export class Component3 extends Component {
//    render() {
//         return (
//             <MyComponent3>
//                 {/* from={{opacity:0}}
//                 to={{opacity:1}}>

//                     {props =>(
//                     <div style={props}> */}

//                         {/* <div style="c2Style">
//                             <h1>component 2 - WHERE IS MY NEXT MEAL PARKED?</h1>
//                             <p>Real time GPS locator with ton of Food Trucks in your Area. Book and Find Your favorite Food Truck; Our top rated vendors are ready for your next event.</p>
                
//                         </div> */}
//                         {props =>(
//                         <div style={props}>
//                             <h1>Book Events</h1>
//                             <div className="city"></div>
//                             <div className="highway"></div>
                            
//                             <div style={{backgroundImage: 'url(' + city + ')' 
//                             }}className="city"></div>
//                                 <div style={{backgroundImage: 'url(' + road + ')' 
//                             }}className="highway"></div>

//                                 <div style={{backgroundImage: 'url(' + car + ')' 
//                             }}className="car"></div>
//                                 <div style={{backgroundImage: 'url(' + wheel + ')' 
//                             }}className="wheel"></div>
//                         </div>
                    

     
            
//         )}
//         </MyComponent3>
//         )
// };

// export default Component3;






// export class Component3 extends Component {
//     render() {
// return (
//     <Spring
//         from={{opacity:0}}
//         to={{opacity:1}}>

//             {props =>(
//             <div style={props}>

//                 {/* <div style="c2Style">
//                     <h1>component 2 - WHERE IS MY NEXT MEAL PARKED?</h1>
//                     <p>Real time GPS locator with ton of Food Trucks in your Area. Book and Find Your favorite Food Truck; Our top rated vendors are ready for your next event.</p>
        
//                 </div> */}
//                 <div style={c3Style}>
//                     <h1>Book Events</h1>
//                     <div className="city"></div>
//                     <div className="highway"></div>

                    
//                     {/* <div className="wheel"></div> */}
//                     {/* <div style={{backgroundImage: 'url(' + car + ')' 
//                     }} className="car">Top Rated Vendors</div> */}
                        
//                         <div style={{backgroundImage: 'url(' + car + ')' 
//                     }}className="city"></div>




//                     <div className="car"></div>



//                         <div style={{backgroundImage: 'url(' + car + ')' 
//                     }}className="city"></div>
                
                      
                       

//                 </div>
                
//             </div>
//             )}
//     </Spring> 
// )
// }
// }

// const c3Style={
// background:'lightblue',
// color:'white',
// padding:'2rem',
// margin:'4rem'
// }

// export default Component3;
