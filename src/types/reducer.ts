import { Location, Current } from "./context";

export enum ReduceActions {
  GET_DATA = "GET_DATA",
  START_LOADING = "START_LOADING",
  STOP_LOADING = "STOP_LOADING",
  SET_ERROR = "SET_ERROR",
  CLOSE_MODAL = "CLOSE_MODAL",
}

interface GET_DATA {
  type: ReduceActions.GET_DATA;
  payload: {
    current: Current;
    forecast: {
      forecastday: [];
    };
    location: Location;
  };
}

interface START_LOADING {
  type: ReduceActions.START_LOADING;
}

interface STOP_LOADING {
  type: ReduceActions.STOP_LOADING;
}

interface SET_ERROR {
  type: ReduceActions.SET_ERROR;
  payload: {
    show: boolean;
    msg: string;
  };
}

interface CLOSE_MODAL {
  type: ReduceActions.CLOSE_MODAL;
}

export type Action =
  | GET_DATA
  | START_LOADING
  | STOP_LOADING
  | SET_ERROR
  | CLOSE_MODAL;
