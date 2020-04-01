import { action } from 'typesafe-actions';
import { ActionTypes } from './Constants';
import { Summary } from '../../models/Summary';
import { Country } from '../../models/Country';
import { store } from '../store/Store';

// Countries
export const getCountriesStart = () => action(ActionTypes.CountriesStart);
export const getCountriesSuccess = (payload: { countries: Country[] }) => action(ActionTypes.CountriesSuccess, payload);
export const getCountriesFail = (payload: {}) => action(ActionTypes.CountriesFail, payload);

// Summary
export const getSummaryStart = () => action(ActionTypes.SummaryStart);
export const getSummarySuccess = (payload: { summaries: Summary[] }) => action(ActionTypes.SummarySuccess, payload);
export const getSummaryFail = (payload: {}) => action(ActionTypes.SummaryFail, payload);

// Live
export const getLiveCountryStart = () => action(ActionTypes.LiveCountryStart);
export const getLiveCountrySuccess = (payload: { liveRaport?: Summary }) =>
  action(ActionTypes.LiveCountrySuccess, payload);
export const getLiveCountryFail = (payload: {}) => action(ActionTypes.LiveCountryFail, payload);

// Moving
export const moveToChangeLocationScreen = () => action(ActionTypes.ChangeLocationScreen);
export const moveToDashboardScreen = () =>
  action(ActionTypes.DashboardScreen, {
    summaryLastFetchDate: store.getState().dataBranch.summaryLastFetchDate,
    liveCountry: store.getState().dataBranch.liveCountry,
  });

// Chosing country
export const chooseCountry = (payload: { countrySlug: string }) => action(ActionTypes.ChooseCountry, payload);
