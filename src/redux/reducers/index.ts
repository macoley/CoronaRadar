import { combineReducers, Reducer } from 'redux';
import { StoreState } from '../branches/StoreState';

import { ExampleReducer } from './ExampleReducer';

const AppReducer: Reducer<StoreState> = combineReducers<StoreState>({
  exampleBranch: ExampleReducer,
});

export { AppReducer };
