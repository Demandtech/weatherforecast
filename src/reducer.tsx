import { State } from "@/types/context";
import { Action, ReduceActions } from "@/types/reducer";

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ReduceActions.GET_DATA: {
      const temptDays = action.payload?.forecast?.forecastday;
      const temptLocationName = action?.payload.location?.name;
      const temptLocationRegion = action?.payload.location?.region;
      const temptCurrent = action.payload?.current;

      return {
        ...state,
        days: temptDays,
        current: temptCurrent,
        userLocation: {
          ...state.userLocation,
          name: temptLocationName,
          region: temptLocationRegion,
        },
        error: {
          show: false,
          msg: "",
        },
      };
    }
    case ReduceActions.START_LOADING:
      return { ...state, isLoading: true };
    case ReduceActions.STOP_LOADING:
      return { ...state, isLoading: false };
    case ReduceActions.SET_ERROR:
      return { ...state, error: action.payload };
    case ReduceActions.CLOSE_MODAL:
      return { ...state, error: { show: false, msg: "" } };
    default:
      return { ...state };
  }
};

export default reducer;
