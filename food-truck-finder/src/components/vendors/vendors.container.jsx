// import { render } from 'react-dom'
// import React, { useState, useEffect } from 'react'
// import { useTransition, animated, config } from 'react-spring'
// import '../home.styles.css'

// const slides = [
//   { id: 0, url: 'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80' },
//   { id: 1, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80' },
//   { id: 2, url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80' },
//   { id: 3, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80' },
// ]

// const Vendor = () => {
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

// render(<Vendor />, document.getElementById('root'))
// export default Vendor;