
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import TruckMapContainer from '../TruckMap/TruckMapContainer'
import TruckListContainer from '../TruckList/TruckListContainer'



const App = ({ getFoodTruckData }) => {

  useEffect(() => {
    getFoodTruckData()
  },[])

  return (
    <div className="container">
      <TruckListContainer />
      <TruckMapContainer />
    </div>
  )
}


export default connect( null, actions )(App);
