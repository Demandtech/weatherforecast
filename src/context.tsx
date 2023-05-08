import { createContext, useReducer, useEffect, useState } from 'react'
import reducer from './reducer'
import { State, AppProviderType, Action } from './typings'


const initialState: State = {
  isLoading: false,
  error: {show:false, msg: ''},
  days: [],
  current: {
    humidity: 0,
    temp_f: 0,
    wind_kph: 0,
    uv: 0,
    cloud: 0,
    pressure_mb: 0,
    last_updated: '',
    condition: {
      text: '',
      icon: '',
    },
  },
  userLocation: {
    name: '',
    region: '',
  },
  getData: () => Promise.resolve(),
}

export const AppContext = createContext<State>(initialState)

const apiKey = import.meta.env.VITE_APP_API_KEY
const baseUrl = import.meta.env.VITE_APP_API_URL
const method = 'forecast.json'

type ReducerHook = (state: State, action: Action) => State

export const AppProvider = ({ children }: AppProviderType) => {
  const [state, dispatch] = useReducer<ReducerHook>(reducer, initialState)
  const [locationPermision, setLocationPermision] = useState<string>('prompt')

  const requestLocationPermision = () => {
    if (window.navigator.permissions) {
      window.navigator.permissions
        .query({ name: 'geolocation' })
        .then((result) => {
          setLocationPermision(result.state)
          result.onchange = () => setLocationPermision(result.state)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }

  const fetchDataApi = (url: string) => {
    dispatch({ type: 'START_LOADING'})
    const data = fetch(url)
      .then((request) => request.json())
      .then((response) => {
        dispatch({ type: 'GET_DATA', payload: response })
        dispatch({ type: 'STOP_LOADING' })
      })
      .catch((err) => {
        console.log(err)
        dispatch({type: 'SET_ERROR', payload: {show:true, msg: 'Can\'t fetch data, check your internet connection'}})
        dispatch({ type: 'STOP_LOADING' })
      })

    return data
  }

  const getData = (querystr: string) => {
    if (querystr) {
      console.log(querystr)

      const url = `${baseUrl}${method}?key=${apiKey}&q=${querystr}&aqi=yes&days=6`
      fetchDataApi(url)
    } else {
      if (navigator.geolocation && locationPermision === 'granted') {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            const lati_long = latitude + ',' + longitude
            if (lati_long) {
              const url = `${baseUrl}${method}?key=${apiKey}&q=${lati_long}&aqi=yes&days=6`
              console.log(url)
              fetchDataApi(url)
            }
          },
          (err) => {
            console.log(err)
          }
        )
      } else {
        const url = `${baseUrl}${method}?key=${apiKey}&q=london&aqi=yes&days=6`
        fetchDataApi(url)
      }
    }
  }

  useEffect(() => {
    getData('')
    requestLocationPermision()
    // eslint-disable-next-line
  }, [locationPermision])

  return (
    <AppContext.Provider value={{ ...state, getData }}>
      {children}
    </AppContext.Provider>
  )
}
