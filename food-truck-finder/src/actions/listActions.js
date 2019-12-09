/*global google*/
import axios from 'axios'

export const getFoodTruckData = () => async dispatch => {
  try {
    const { data } = await axios.get('https://data.sfgov.org/resource/6a9r-agq8.json')
    const payload = data.filter(truck => (truck.latitude !== '0' && truck.longitude !== '0')).map(truck => {
      return {
        id: truck.objectid,
        address: truck.address,
        name: truck.applicant,
        foodItems: truck.fooditems,
        location: {
          lat: Number(truck.latitude),
          lng: Number(truck.longitude)
        },
        hours: truck.dayshours,
        isOpen: false,
        distance: 0
      }
    })
    dispatch({ type: 'FETCH_DATA', payload })
  }
  catch(err) {
    console.log(err)
  }
}

export const filterList = (trucks, currentLocation, radius) => dispatch => {
  const truckList = trucks.filter(truck => {
    let currentPoint = new google.maps.LatLng(currentLocation.lat, currentLocation.lng)
    let currentTruck = new google.maps.LatLng(truck.location.lat, truck.location.lng)
    // takes in latitude and longitude of two location and returns the distance between them
    let result = google.maps.geometry.spherical.computeDistanceBetween(currentPoint, currentTruck)

    truck.distance = (result  * 0.000621371192).toFixed(1);
    truck.foodItems = truck.foodItems && truck.foodItems.replace(/:/g, ', ')

    // get the trucks around the current location
    return result <= radius
  })

  dispatch({ type: 'GET_LIST', truckList})
}

export const filterRadius = (radius) => dispatch => {
  dispatch({ type: 'UPDATE_RADIUS', radius })
}
