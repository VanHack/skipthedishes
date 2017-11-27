import { dailySales, hourlySales, recommends, bestsellers } from "../data";

export const SET_BESTSELLERS = "SET_BESTSELLERS";
export const SET_DAILY_SALES = "SET_DAILY_SALES";
export const SET_HOURLY_SALES = "SET_HOURLY_SALES";
export const SET_RECOMMENDS = "SET_RECOMMENDS";

const randomWait = () => Math.floor(Math.random() * 2000) + 1000;

export const loadDailySales = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: SET_DAILY_SALES,
        payload: dailySales
      });
    }, randomWait());
  };
};

export const loadHourlySales = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: SET_HOURLY_SALES,
        payload: hourlySales
      });
    }, randomWait());
  };
};

export const loadRecommends = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: SET_RECOMMENDS,
        payload: recommends
      });
    }, randomWait());
  };
};

export const loadBestsellers = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: SET_BESTSELLERS,
        payload: bestsellers
      });
    }, randomWait());
  };
};
