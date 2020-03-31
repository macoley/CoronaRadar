import { filter, pluck, map, catchError, mergeMap } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import * as actions from '../actions';
import { ActionTypes } from '../actions/Constants';
import { of, combineLatest } from 'rxjs';
import { getSummary, getLiveCountry } from '../../services/ApiService';
import { Summary } from '../../models/Summary';

export const summaryEpic = (action$: any) =>
  action$.pipe(
    filter(isOfType(ActionTypes.SummaryStart)),
    pluck('payload'),
    mergeMap((_payload: {}) =>
      getSummary().pipe(
        map(summaries => actions.getSummarySuccess({ summaries })),
        catchError(error => of(actions.getSummaryFail(error))),
      ),
    ),
  );

export const liveRaportEpic = (action$: any) =>
  action$.pipe(
    filter(isOfType(ActionTypes.LiveCountryStart)),
    pluck('payload'),
    mergeMap((_payload: {}) =>
      combineLatest([
        getLiveCountry('poland', 'confirmed'),
        getLiveCountry('poland', 'recovered'),
        getLiveCountry('poland', 'deaths'),
      ]).pipe(
        map(([confirmed, recovered, deaths]) =>
          actions.getLiveCountrySuccess({
            liveRaport: new Summary(confirmed.country, '', confirmed.cases, deaths.cases, recovered.cases),
          }),
        ),
        catchError(error => of(actions.getLiveCountryFail(error))),
      ),
    ),
  );
