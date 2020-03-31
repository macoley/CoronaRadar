import { combineReducers, Reducer } from 'redux';
import { StoreState } from '../branches/StoreState';

import { DataReducer } from './DataReducer';

const AppReducer: Reducer<StoreState> = combineReducers<StoreState>({
  dataBranch: DataReducer,
});

export { AppReducer };
