import { Dispatch, SetStateAction } from "react";

export interface Current {
  humidity: number;
  temp_f: number;
  wind_kph: number;
  uv: number;
  cloud: number;
  pressure_mb: number;
  last_updated: string;
  condition: {
    text: string;
    icon: string;
  };
}

export interface AppProviderType {
  children: React.ReactNode;
}

export interface Location {
  name: string;
  region: string;
}

export interface Day {
  avgtemp_f: number;
  avghumidity: number;
  maxwind_kph: number;
  mintemp_f: number;
  maxtemp_f: number;
  uv: number;
  date: string;
  condition: {
    text: string;
    icon: string;
  };
  air_quality: {
    co: number;
    no2: number;
    o3: number;
    "gb-defra-index": number;
    pm2_5: number;
    pm10: number;
    so2: number;
    "us-epa-index": number;
  };
}

export interface DayForecast {
  date: string;
  day: Day;

  astro: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
  };

  hour: Hr[];
}

export type Hr = {
  time: string;
  temp_f: number;
};

export interface State {
  isLoading: boolean;
  error: { show: boolean; msg: string };
  days: DayForecast[] | [];
  userLocation: Location;
  current: Current;
  getData: (query: string) => void;
  closeModal: () => void;
}

export type DisplayIndexProps = {
  displayIndex: number;
  setDisplayIndex?: Dispatch<SetStateAction<number>>;
};
