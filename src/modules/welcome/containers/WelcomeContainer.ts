import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { StoreState } from '../../../redux/branches/StoreState';
import { moveToDashboardScreen } from '../../../redux/actions';
import WelcomeScreen from '../screens/WelcomeScreen';

function mapState({}: StoreState) {
  return {};
}

function mapDispatch(dispatch: Dispatch) {
  return {
    moveToDashboardScreen: () => {
      dispatch(moveToDashboardScreen());
    },
  };
}

export default connect(mapState, mapDispatch)(WelcomeScreen);
