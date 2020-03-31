import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { StoreState } from '../../../redux/branches/StoreState';
import ChangeLocationScreen from '../screens/ChangeLocationScreen';
import { chooseCountry } from '../../../redux/actions';

function mapState({ dataBranch }: StoreState) {
  return {
    countries: dataBranch.countries,
    determined: dataBranch.determinedCountry,
  };
}

function mapDispatch(dispatch: Dispatch) {
  return {
    chooseCountry: (countrySlug: string) => {
      dispatch(chooseCountry({ countrySlug }));
    },
  };
}

export default connect(mapState, mapDispatch)(ChangeLocationScreen);
