import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { StoreState } from '../../../redux/branches/StoreState';
import DashboardScreen from '../screens/DashboardScreen';
import { moveToChangeLocationScreen } from '../../../redux/actions';

function mapState({ dataBranch }: StoreState) {
  return {
    summary: dataBranch.summarySorted,
    liveCountry: dataBranch.liveCountry!,
  };
}

function mapDispatch(dispatch: Dispatch) {
  return {
    moveToChangeLocationScreen: () => {
      dispatch(moveToChangeLocationScreen());
    },
  };
}

export default connect(mapState, mapDispatch)(DashboardScreen);
