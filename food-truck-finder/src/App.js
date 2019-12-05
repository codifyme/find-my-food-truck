import React from 'react';
import Navbar from'./components/navigation/Navbar'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
//import Navlinks from './components/navigation/Navlinks';
import Bookevents from './components/bookevents/vendor.container'
import Recipes from './components/recipes/recipes.container';
import Home from './components/home/home.container';


function App(){
    return(
      <Router>
        <div>
        <Navbar/>
        <Switch>
        
          {/*<Route exact path="/home" components={Home}/>*/}
          <Route exact path="/recipes" component={Recipes}/>
          <Route exact path="/bookevents" component={Bookevents}/>
          <Route exact path="/home" component={Home}/>

        </Switch>
      {/* <Navlinks/> */}

      </div>
      </Router>
    );
  }

export default App;
