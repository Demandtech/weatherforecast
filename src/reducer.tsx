import { State,  Action } from './typings'

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'GET_DATA': {
      
      const temptDays = action.payload.forecast.forecastday
      const temptLocationName = action.payload.location.name
      const temptLocationRegion = action.payload.location.region
      const temptCurrent = action.payload.current

      return {
        ...state,
        days: temptDays,
        current: temptCurrent,
        userLocation: {
          ...state.userLocation,
          name: temptLocationName,
          region: temptLocationRegion,
        },
      }
    }
    case 'START_LOADING':
      return { ...state, isLoading:true }
    case 'STOP_LOADING':
      return { ...state, isLoading:false }
    case 'SET_ERROR':
       return {...state, error: action.payload}
    default:
      return {...state}
  }
}

export default reducer
