import React from 'react';
import { connect } from 'react-redux';

const InfoMarker = ({ thisTruck, currentLocation }) => {

  // link to rendering direction in google maps
  const url = `https://www.google.com/maps/dir/${currentLocation.lat}, ${currentLocation.lng}/${thisTruck.location.lat},${thisTruck.location.lng}/data=!3m1!4b1!4m4!4m3!1m0!1m1!4e1`

  return (
    <div className="marker-window">
      <h3 className="marker-window--heading">{thisTruck.name}</h3>
      <p className="marker-window--food">{thisTruck.foodItems}</p>
      <p className="marker-window--bold">Distance: {thisTruck.distance} miles</p>
      <p className="marker-window--bold">{thisTruck.hours ? thisTruck.hours : ''}</p>
      <a href={`${url},12z`} target="_blank" rel="noopener noreferrer">Direction in Google Maps</a>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { thisTruck, currentLocation } = state.map
  return { thisTruck, currentLocation }
};

export default connect( mapStateToProps )(InfoMarker);
