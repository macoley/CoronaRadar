import { combineEpics } from 'redux-observable';
import * as epics from '.';

export const rootEpic = combineEpics(...Object.values(epics));
