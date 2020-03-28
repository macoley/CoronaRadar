import { ActionTypes } from '../actions/Constants';
import { Action } from '../store/Store';
import { ExampleBranch } from '../branches';

const INITIAL_STATE: ExampleBranch = {};

export const ExampleReducer = (state: ExampleBranch = INITIAL_STATE, action: Action): ExampleBranch => {
  switch (action.type) {
    case ActionTypes.ExampleStart:
      return { ...state };
    case ActionTypes.ExampleSuccess:
      return { ...state };
    case ActionTypes.ExampleFail:
      return { ...state };
    default:
      return state;
  }
};
