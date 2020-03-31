import { ActionTypes } from '../actions/Constants';
import { Action } from '../store/Store';
import { DataBranch } from '../branches';

const INITIAL_STATE: DataBranch = {
  countries: [],
  summary: [],
  summarySorted: [],
};

export const DataReducer = (state: DataBranch = INITIAL_STATE, action: Action): DataBranch => {
  switch (action.type) {
    case ActionTypes.CountriesSuccess:
      return { ...state, countries: action.payload.countries, countriesLastFetchDate: new Date() };
    case ActionTypes.SummarySuccess:
      const nonEmpty = action.payload.summaries.filter(summary => summary.country);
      const sorted = nonEmpty.sort((a, b) => b.confirmed - a.confirmed);

      return {
        ...state,
        summary: nonEmpty,
        summarySorted: sorted,
        summaryLastFetchDate: new Date(),
      };
    case ActionTypes.LiveCountrySuccess:
      return { ...state, liveCountry: action.payload.liveRaport, liveCountryLastFetchDate: new Date() };
    default:
      return state;
  }
};
