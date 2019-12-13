import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import TruckMapContainer from '../truckmap/TruckMapContainer'
import TruckListContainer from '../trucklist/TruckListContainer'
import Map from './map.styles.scss'


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