import { filter, pluck, map, catchError, mergeMap } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import * as actions from '../actions';
import { ActionTypes } from '../actions/Constants';
import { ExampleBranch } from '../branches/ExampleBranch';
import { from, of } from 'rxjs';

export const exampleEpic = (action$: any) =>
  action$.pipe(
    filter(isOfType(ActionTypes.ExampleStart)),
    pluck('payload'),
    mergeMap((_payload: ExampleBranch) =>
      from('test').pipe(
        map(actions.exampleSuccess),
        catchError(error => of(actions.exampleFail(error))),
      ),
    ),
  );
