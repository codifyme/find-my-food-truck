export const showInfo = (truck) => dispatch => {
    truck.isOpen = !truck.isOpen
    dispatch({ type: 'GET_MARKER', truck  })
  }
  
  export const showLocation = (e) => dispatch => {
    let location = { lat: e.latLng.lat(), lng: e.latLng.lng() }
    dispatch({ type: 'GET_LOCATION', location })
  }
  
  export const geoLocation = () => dispatch => {
    if(navigator.geolocation){
        return navigator.geolocation.getCurrentPosition(position => {
          const location = { lat: position.coords.latitude, lng: position.coords.longitude }
          dispatch({ type: 'GET_LOCATION', location})
        });
     } else{
        alert("Sorry, browser does not support geolocation!");
     }
  }
  
  export const backSFLocation = () => dispatch => {
    const location = { lat: 37.769067, lng: -122.432898}
    dispatch({ type: 'GET_LOCATION', location})
  }