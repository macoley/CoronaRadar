import { filter, pluck, map, catchError, mergeMap } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import * as actions from '../actions';
import { ActionTypes } from '../actions/Constants';
import { of, combineLatest } from 'rxjs';
import { getSummary, getLiveCountry, getCountries } from '../../services/ApiService';
import { Summary } from '../../models/Summary';
import NavigationService from '../../services/NavigationService';

const getLiveCountryHelper = (country: string) =>
  combineLatest([
    getLiveCountry(country, 'confirmed'),
    getLiveCountry(country, 'recovered'),
    getLiveCountry(country, 'deaths'),
  ]).pipe(map(([confirmed, recovered, deaths]) => ({ confirmed, recovered, deaths })));

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
      getLiveCountryHelper('poland').pipe(
        map(({ confirmed, recovered, deaths }) =>
          actions.getLiveCountrySuccess({
            liveRaport: new Summary(confirmed.country, '', confirmed.cases, deaths.cases, recovered.cases),
          }),
        ),
        catchError(error => of(actions.getLiveCountryFail(error))),
      ),
    ),
  );

export const countriesEpic = (action$: any) =>
  action$.pipe(
    filter(isOfType(ActionTypes.CountriesStart)),
    pluck('payload'),
    mergeMap((_payload: {}) =>
      getCountries().pipe(
        map(countries => actions.getCountriesSuccess({ countries })),
        catchError(error => of(actions.getCountriesFail(error))),
      ),
    ),
  );

export const chooseCountryEpic = (action$: any) =>
  action$.pipe(
    filter(isOfType(ActionTypes.ChooseCountry)),
    pluck('payload'),
    mergeMap((payload: { countrySlug: string }) => {
      NavigationService.navigate(NavigationService.RouteNames.LoadingScreen);

      return getLiveCountryHelper(payload.countrySlug).pipe(
        map(({ confirmed, recovered, deaths }) => {
          NavigationService.navigate(NavigationService.RouteNames.DashboardScreen);

          return actions.getLiveCountrySuccess({
            liveRaport: new Summary(confirmed.country, '', confirmed.cases, deaths.cases, recovered.cases),
          });
        }),
        catchError(error => of(actions.getLiveCountryFail(error))),
      );
    }),
  );
