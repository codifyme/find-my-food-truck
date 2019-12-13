import React from 'react';
import Navbar from'./components/navigation/Navbar'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
//import Navlinks from './components/navigation/Navlinks';
import Bookevents from './components/bookevents/vendor.container'
import Recipes from './components/recipes/recipes.container';
import Home from './components/home/home.container';
//import Vendor from './components/vendors/vendor.container';
// import Map from './components/map/map.container'

function App(){
    return(
      <Router>
        <div>
        <Navbar/>
        <Switch>
        
          <Route exact path="/map" component={Map}/>

          <Route exact path="/recipes" component={Recipes}/>
          <Route exact path="/bookevents" component={Bookevents}/>
          {/* <Route exact path="/vendors" component={Vendor}/> */}
          <Route exact path="/" component={Home}/>

        </Switch>
      {/* <Navlinks/> */}

      </div>
      </Router>
    );
  }

export default App;
