
import React from 'react';
import { Slide } from 'react-slideshow-image';
import './vendor.styles.css';

// const slideImages = [
//   'https://www.google.com/search?q=food+trucks+in+sf+financial+district&sxsrf=ACYBGNSnXhO97kQd2ujJd_C_QZ75I-V4Tw:1576112097736&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjJuNiN867mAhUzNX0KHc4VDKQQ_AUoAnoECA4QBA&biw=1051&bih=687#imgrc=GK4ykYnfbHrOmM:',
//   '.././images/borsch.png',
//   './../images/borsch.png'
// ];

const properties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition finished from ${oldIndex} to ${newIndex}`);
  }
}

const Vendor = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(./images/borsch.png)`}}>
              <span>Slide </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(./images/borsch.png)`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(./images/borsch.png)`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default Vendor;






// import React, { Component } from 'react';
// import Zoom from './lib/components/slideshow/zoom';
// //import Fade from './lib/components/slideshow/fade';
// //import  Slide from './lib/components/slideshow/slide';
// import './vendors.styles.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       zoomOutImages: [
//         './images/borsch.png',
//         './images/hongrykong.png',
//         './images/indiansoulfood.png'
//       ]
//     };
//   }

//   render() {
//     // const properties = {
//     //   duration: 5000,
//     //   transitionDuration: 500,
//     //   infinite: true,
//     //   indicators: true,
//     //   onChange: (oldIndex, newIndex) => {
//     //     console.log(
//     //       `Slide transition finished from ${oldIndex} to ${newIndex}`
//     //     );
//     //   }
//     // };

//     // const fadeProperties = {
//     //   duration: 5000,
//     //   transitionDuration: 500,
//     //   indicators: true,
//     //   infinite: false,
//     //   onChange: (oldIndex, newIndex) => {
//     //     console.log(`Fade transition finished from ${oldIndex} to ${newIndex}`);
//     //   }
//     // };

//     const zoomOutProperties = {
//       duration: 5000,
//       transitionDuration: 500,
//       indicators: true,
//       scale: 0.4,
//       onChange: (oldIndex, newIndex) => {
//         console.log(`zoom transition finished from ${oldIndex} to ${newIndex}`);
//       }
//     };

//     const zoomInProperties = {
//       duration: 5000,
//       transitionDuration: 500,
//       indicators: true,
//       scale: 1.4
//     };
//     const {zoomOutImages, fadeImages } = this.state;
//     return (
//       <div>
//         <h3>Slide Effect</h3>
//         {/* <div className="slide-container">
//           <Slide {...properties}>
//             {slideImages.map((each, index) => (
//               <div key={index} className="each-slide">
//                 <div style={{ backgroundImage: `url(${each})` }}>
//                   <span>Slide {index + 1}</span>
//                 </div>
//               </div>
//             ))}
//           </Slide>
//         </div> */}
//         <br />

//         <h3>Fade Effect</h3>
//         {/* <div className="slide-container">
//           <Fade {...fadeProperties}>
//             <div className="each-fade">
//               <div className="image-container">
//                 <img src={fadeImages[0]} />
//               </div>
//               <h2>First Slide</h2>
//             </div>
//             <div className="each-fade">
//               <h2>Second Slide</h2>
//               <div className="image-container">
//                 <img src={fadeImages[1]} />
//               </div>
//             </div>
//             <div className="each-fade">
//               <div className="image-container">
//                 <img src={fadeImages[2]} />
//               </div>
//               <h2>Third Slide</h2>
//             </div>
//           </Fade>
//         </div> */}

//         <br />
//         <h3>Zoom out Effect</h3>
//         <div className="slide-container">
//           <Zoom {...zoomOutProperties}>
//           {images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
//   }</Zoom>
//         </div>
//         <br />
//         <h3>Zoom in Effect</h3>
//         <div className="slide-container">
//           <Zoom {...zoomInProperties}>
//           {images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
//   }
//           </Zoom>
//         </div>
//         <br />
//       </div>
//     );
//   }
// }

// export default App;






// import { render } from 'react-dom'
// import React, { useState, useEffect } from 'react'
// import { useTransition, a } from 'react-spring'
// import shuffle from 'lodash/shuffle'
// import useMeasure from './useMeasure'
// import useMedia from './useMedia'
// import data from './data'
// import './vendors.styles.css'

// function App() {
//   // Hook1: Tie media queries to the number of columns
//   const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2)
//   // Hook2: Measure the width of the container element
//   const [bind, { width }] = useMeasure()
//   // Hook3: Hold items
//   const [items, set] = useState(data)
//   // Hook4: shuffle data every 2 seconds
//   useEffect(() => void setInterval(() => set(shuffle), 2000), [])
//   // Form a grid of stacked items using width & columns we got from hooks 1 & 2
//   let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
//   let gridItems = items.map((child, i) => {
//     const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
//     const xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2] // X = container width / number of columns * column index, Y = it's just the height of the current column
//     return { ...child, xy, width: width / columns, height: child.height / 2 }
//   })
//   // Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
//   const transitions = useTransition(gridItems, item => item.css, {
//     from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
//     enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
//     update: ({ xy, width, height }) => ({ xy, width, height }),
//     leave: { height: 0, opacity: 0 },
//     config: { mass: 5, tension: 500, friction: 100 },
//     trail: 25
//   })
//   // Render the grid
//   return (
//     <div {...bind} class="list" style={{ height: Math.max(...heights) }}>
//       {transitions.map(({ item, props: { xy, ...rest }, key }) => (
//         <a.div key={key} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>
//           <div style={{ backgroundImage: item.css }} />
//         </a.div>
//       ))}
//     </div>
//   )
// }

// render(<App />, document.getElementById('root'))
// export default App;