import React from 'react';
import Navbar from'./components/navigation/Navbar'
import {BrowserRouter} from 'react-router-dom'
//import Navlinks from './components/navigation/Navlinks';
//
//import recipe from './components/recipe/recipe'

function App(){

//   const sayHello=()=>{
//     console.log("hello");
//   };

  return(
    <BrowserRouter>
      <Navbar/>
    {/* <Navlinks/> */}
    {/*<recipe/>*/}
    </BrowserRouter>
    
  );
}


export default App;
