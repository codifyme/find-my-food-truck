import React from 'react';
import { connect } from 'react-redux';
import TruckList from './TruckList';
import FilterRadius from './FilterRadius';
import SearchTruck from './SearchTruck';

const TruckListContainer = ({ truckList }) => {

  // sort distance from the current location
  const renderList = truckList.sort((a,b) => a.distance - b.distance).map(truck => <TruckList truck={truck} key={truck.id} /> )

  return (
    <div className="truck-container">
      <SearchTruck />
      <FilterRadius />
      <div className="list">
        { truckList.length === 0 ? <p>No Food Truck Here</p> : renderList }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { truckList: state.map.truckList }
};

export default connect(mapStateToProps)(TruckListContainer);
