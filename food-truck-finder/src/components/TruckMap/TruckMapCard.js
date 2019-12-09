import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { connect } from 'react-redux';
import TruckMapMarker from "./TruckMapMarker";
import SearchLocation from './SearchLocation'
import * as actions from '../../actions'
import { style } from '../../actions/styleMap.js'


const TruckMapCard = withScriptjs(withGoogleMap(({ trucks, currentLocation, showLocation, geoLocation, backSFLocation }) => {
  return (
    <GoogleMap
      defaultOptions={{ styles: style }}
      defaultZoom={13}
      center={ currentLocation }
      onClick={showLocation}
      >
      <TruckMapMarker />
      <div className="search-location">
        <button className="btn btn-geo" onClick={geoLocation}>Locate Me!</button>
        <button className="btn btn-back" onClick={backSFLocation}>Back to SF</button>
        <SearchLocation />
      </div>
    </GoogleMap>
    );
  }
))

const mapStateToProps = (state) => {
  const { trucks, currentLocation } = state.map
  return { trucks,currentLocation };
};

export default connect( mapStateToProps, actions )(TruckMapCard);
