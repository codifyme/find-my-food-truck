const initialState = {
    trucks: null,
    currentLocation: {
      lat: 37.769067,
      lng: -122.432898
    },
    thisTruck: null,
    isOpen: false,
    truckList: [],
    radius: 804.672
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'GET_LOCATION':
        return { ...state, currentLocation: action.location }
      case 'FETCH_DATA':
        return { ...state, trucks: action.payload }
      case 'GET_MARKER':
        return { ...state,
          thisTruck: action.truck,
          isOpen: action.truck.isOpen
        }
      case 'GET_LIST':
        return { ...state, truckList: action.truckList }
      case 'UPDATE_RADIUS':
        return { ...state, radius: action.radius }
      default:
        return state
    }
  }