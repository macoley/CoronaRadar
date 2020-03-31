import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { StoreState } from '../../../redux/branches/StoreState';
import AppScreen from '../screens/AppScreen';
import { getSummaryStart, getLiveCountryStart, getCountriesStart } from '../../../redux/actions';

function mapState({}: StoreState) {
  return {};
}

function mapDispatch(dispatch: Dispatch) {
  return {
    getSummary: () => {
      dispatch(getSummaryStart());
    },
    getLiveCountry: () => {
      dispatch(getLiveCountryStart());
    },
    getCountries: () => {
      dispatch(getCountriesStart());
    },
  };
}

export default connect(mapState, mapDispatch)(AppScreen);
