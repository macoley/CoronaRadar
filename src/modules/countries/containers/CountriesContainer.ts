import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { StoreState } from '../../../redux/branches/StoreState';
import CountriesScreen from '../screens/CountriesScreen';

function mapState({ dataBranch }: StoreState) {
  return {
    summary: dataBranch.summarySorted,
  };
}

function mapDispatch(dispatch: Dispatch) {
  return {};
}

export default connect(mapState, mapDispatch)(CountriesScreen);
