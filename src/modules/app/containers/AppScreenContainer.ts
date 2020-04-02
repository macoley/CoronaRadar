import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { StoreState } from '../../../redux/branches/StoreState';
import AppScreen from '../screens/AppScreen';
import { getSummaryStart, getLiveCountryStart, getCountriesStart } from '../../../redux/actions';

function mapState({ dataBranch }: StoreState) {
  return {
    liveCountryLastFetchDate: dataBranch.liveCountryLastFetchDate,
    liveCountry: dataBranch.liveCountry,
  };
}

function mapDispatch(dispatch: Dispatch) {
  return {
    getSummary: () => {
      dispatch(getSummaryStart());
    },
    getLiveCountry: (countrySlug: string) => {
      dispatch(getLiveCountryStart({ countrySlug }));
    },
    getCountries: () => {
      dispatch(getCountriesStart());
    },
  };
}

export default connect(mapState, mapDispatch)(AppScreen);
