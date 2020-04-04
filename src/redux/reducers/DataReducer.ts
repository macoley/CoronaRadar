import { ActionTypes } from '../actions/Constants';
import { Action } from '../store/Store';
import { DataBranch } from '../branches';
import { Summary } from '../../models/Summary';
import { sortBy } from 'lodash';

const INITIAL_STATE: DataBranch = {
  countries: [],
  summary: [],
  summarySorted: [],
};

export const DataReducer = (state: DataBranch = INITIAL_STATE, action: Action): DataBranch => {
  switch (action.type) {
    case ActionTypes.CountriesSuccess:
      const sortedCountries = sortBy(action.payload.countries, [country => country.country]);
      return { ...state, countries: sortedCountries, countriesLastFetchDate: new Date() };
    case ActionTypes.SummarySuccess:
      const nonEmpty: Summary[] = action.payload.summaries.filter(summary => summary.country);
      const sorted: Summary[] = nonEmpty.sort((a, b) => b.confirmed - a.confirmed);

      let totalConfirmed = 0;
      let totalDeaths = 0;
      let totalRecovered = 0;

      nonEmpty.forEach(country => {
        totalConfirmed += country.confirmed;
        totalDeaths += country.deaths;
        totalRecovered += country.recovered;
      });

      return {
        ...state,
        summary: nonEmpty,
        summarySorted: sorted,
        summaryLastFetchDate: new Date(),
        total: new Summary('total', 'total', totalConfirmed, totalDeaths, totalRecovered),
      };
    case ActionTypes.LiveCountrySuccess:
      return { ...state, liveCountry: action.payload.liveRaport, liveCountryLastFetchDate: new Date() };
    default:
      return state;
  }
};
