/* global google */
import React, { useEffect, useRef } from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions'

const SearchLocation = ({ searchLocation }) => {

  const inputEl = useRef(null);

  let autocomplete;

  // set up autocomplete for google maps
  useEffect(() => {
    autocomplete = new google.maps.places.Autocomplete(
      inputEl.current,
      { types: ["geocode"] }
    );
    autocomplete.addListener("place_changed", () => {
      handlePlaceChanged()
    });
  },[])

   // Get the place details from the autocomplete object.
  const handlePlaceChanged = () => {
    const place = autocomplete.getPlace();
    searchLocation(place.geometry.location.lat(), place.geometry.location.lng())
  }

  const handleDone = () => {
    inputEl.current.value = ''
  }

  return (
    <div className="search-input">
      <input
      ref={inputEl}
      id="autocomplete"
      placeholder="Enter the location"
      type="text"
      />
      <button className="input-btn-clear location-clear" onClick={handleDone}>&#10006;</button>
    </div>
  )
}

export default connect( null, actions )(SearchLocation);
