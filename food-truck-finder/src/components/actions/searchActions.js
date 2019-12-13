export const searchTruck = (trucks, term, radius) => dispatch => {
    let truckList = trucks.filter(truck => {
      if ((truck.distance * 1609.34) <= radius) {
        return (truck.foodItems && truck.foodItems.toLowerCase().includes(term)) || truck.name.toLowerCase().includes(term)
      }
    })
    dispatch({ type: 'GET_LIST', truckList })
  }
  
  export const searchLocation = (lat, lng) => dispatch => {
    let location = { lat, lng }
    dispatch({ type: 'GET_LOCATION', location })
  }