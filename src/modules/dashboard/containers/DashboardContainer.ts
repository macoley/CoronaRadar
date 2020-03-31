import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { StoreState } from '../../../redux/branches/StoreState';
import DashboardScreen from '../screens/DashboardScreen';

function mapState({ dataBranch }: StoreState) {
  return {
    summary: dataBranch.summarySorted,
    liveCountry: dataBranch.liveCountry!,
  };
}

function mapDispatch(dispatch: Dispatch) {
  return {};
}

export default connect(mapState, mapDispatch)(DashboardScreen);
