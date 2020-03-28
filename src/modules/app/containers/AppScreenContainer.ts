import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { StoreState } from '../../../redux/branches/StoreState';
import AppScreen from '../screens/AppScreen';

function mapState({}: StoreState) {
  return {};
}

function mapDispatch(_dispatch: Dispatch) {
  return {};
}

export default connect(mapState, mapDispatch)(AppScreen);
