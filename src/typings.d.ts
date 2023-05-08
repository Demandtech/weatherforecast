
export interface State {
  isLoading: boolean
  error: { show: boolean; msg: string }
  days: DayForecast[] | []
  userLocation: Location
  current: Current
  getData: (query: string) => void
}

interface Current {
  humidity: number
  temp_f: number
  wind_kph: number
  uv: number
  cloud: number
  pressure_mb: number
  last_updated: string
  condition: {
    text: string
    icon: string
  }
}

export interface AppProviderType {
  children: React.ReactNode
}

export interface Location {
  name: string
  region: string
}



export interface Day {
  avgtemp_f: number
  avghumidity: number
  maxwind_kph: number
  mintemp_f: number
  maxtemp_f: number
  uv: number
  date: string
  condition: {
    text: string
    icon: string
  }
  air_quality: {
    co: number
    no2: number
    o3: number
    'gb-defra-index': number
    pm2_5: number
    pm10: number
    so2: number
    'us-epa-index': number
  }
}

export interface DayForecast {
  date: string
  day: Day

  astro: {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    moon_phase: string
  }

  hour: Hr[] = []
}

type Hr = {
  time: string
  temp_f: number
}

export type DisplayIndexProps = {
  displayIndex: number
  setDisplayIndex?: React.Dispatch
}




// Reducer 

interface Get_data {
  type: 'GET_DATA'
  payload: {
    current: Current
    forecast: {
      forecastday: []
    }
    location: Location
  }
}

interface Start_Loading {
  type: 'START_LOADING'
}

interface Stop_Loading {
  type: 'STOP_LOADING'
}

interface Set_Error {
  type: 'SET_ERROR'
  payload: {
    show: boolean
    msg: string
  }
}

export type Action = Get_data | Start_Loading | Stop_Loading | Set_Error

