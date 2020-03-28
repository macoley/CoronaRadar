import { action } from 'typesafe-actions';
import { ActionTypes } from './Constants';

export const exampleStart = (payload: {}) => action(ActionTypes.ExampleStart, payload);

export const exampleSuccess = () => action(ActionTypes.ExampleSuccess);

export const exampleFail = (payload: {}) => action(ActionTypes.ExampleFail, payload);
