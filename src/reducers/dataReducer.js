import {
  SET_RECOMMENDS,
  SET_DAILY_SALES,
  SET_HOURLY_SALES,
  SET_BESTSELLERS
} from "../actions/index";

const INITIAL_STATE = {
  recommends: [],
  dailySales: [],
  hourlySales: {},
  bestsellers: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_RECOMMENDS:
      return { ...state, recommends: action.payload };
    case SET_BESTSELLERS:
      return { ...state, bestsellers: action.payload };
    case SET_DAILY_SALES:
      return { ...state, dailySales: action.payload };
    case SET_HOURLY_SALES:
      return { ...state, hourlySales: action.payload };

    default:
      return state;
  }
}
