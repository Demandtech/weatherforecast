import { createContext, useReducer, useEffect, useState } from "react";

import { ReduceActions } from "./types/reducer";

import reducer from "@/reducer";
import { State, AppProviderType } from "@/types/context";

const initialState: State = {
  isLoading: false,
  error: { show: false, msg: "" },
  days: [],
  current: {
    humidity: 0,
    temp_f: 0,
    wind_kph: 0,
    uv: 0,
    cloud: 0,
    pressure_mb: 0,
    last_updated: "",
    condition: {
      text: "",
      icon: "",
    },
  },
  userLocation: {
    name: "",
    region: "",
  },
  getData: () => Promise.resolve(),
  closeModal: () => Function,
};

export const AppContext = createContext<State>(initialState);

const apiKey = import.meta.env.VITE_APP_API_KEY;
const baseUrl = import.meta.env.VITE_APP_API_URL;
const method = "forecast.json";

export const AppProvider = ({ children }: AppProviderType) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [locationPermision, setLocationPermision] = useState<string>("prompt");

  const requestLocationPermision = () => {
    if (window.navigator.permissions) {
      window.navigator.permissions
        .query({ name: "geolocation" })
        .then((result) => {
          setLocationPermision(result.state);
          result.onchange = () => setLocationPermision(result.state);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const closeModal = () => {
    dispatch({ type: ReduceActions.CLOSE_MODAL });
  };

  const fetchDataApi = (url: string) => {
    dispatch({ type: ReduceActions.START_LOADING });
    const data = fetch(url)
      .then((request) => request.json())
      .then((response) => {
        if (response.error) {
          dispatch({
            type: ReduceActions.SET_ERROR,
            payload: {
              show: true,
              msg: response.error.message,
            },
          });
        } else {
          dispatch({ type: ReduceActions.GET_DATA, payload: response });
        }
        dispatch({ type: ReduceActions.STOP_LOADING });
      })
      .catch(() => {
        dispatch({
          type: ReduceActions.SET_ERROR,
          payload: {
            show: true,
            msg: "Can't fetch data, check your internet connection",
          },
        });
        dispatch({ type: ReduceActions.STOP_LOADING });
      });

    return data;
  };

  useEffect(() => {
    const modalTimeoutId = setTimeout(() => {
      closeModal();
    }, 5000);

    return () => clearTimeout(modalTimeoutId);
  }, [state.error]);

  const getData = (querystr: string) => {
    if (querystr) {
      const url = `${baseUrl}${method}?key=${apiKey}&q=${querystr}&aqi=yes&days=6`;

      fetchDataApi(url);
    } else {
      if (navigator.geolocation && locationPermision === "granted") {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          const lati_long = latitude + "," + longitude;

          if (lati_long) {
            const url = `${baseUrl}${method}?key=${apiKey}&q=${lati_long}&aqi=yes&days=6`;

            fetchDataApi(url);
          }
        });
      } else {
        const url = `${baseUrl}${method}?key=${apiKey}&q=london&aqi=yes&days=6`;

        fetchDataApi(url);
      }
    }
  };

  useEffect(() => {
    getData("");
    requestLocationPermision();
  }, [locationPermision]);

  return (
    <AppContext.Provider value={{ ...state, getData, closeModal }}>
      {children}
    </AppContext.Provider>
  );
};
