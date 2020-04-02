import { filter, pluck, map, catchError, mergeMap } from 'rxjs/operators';
import { isOfType, action } from 'typesafe-actions';

import * as actions from '../actions';
import { ActionTypes } from '../actions/Constants';
import { of, combineLatest, from } from 'rxjs';
import { getSummary, getLiveCountry, getCountries } from '../../services/ApiService';
import { Summary } from '../../models/Summary';
import NavigationService from '../../services/NavigationService';
import { Country } from '../../models/Country';

const getLiveCountryHelper = (country: string) =>
  combineLatest([
    getLiveCountry(country, 'confirmed'),
    getLiveCountry(country, 'recovered'),
    getLiveCountry(country, 'deaths'),
  ]);

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
    mergeMap((payload: { countrySlug: string }) =>
      getLiveCountryHelper(payload.countrySlug).pipe(
        map(([confirmed, recovered, deaths]) =>
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
        map(([confirmed, recovered, deaths]) => {
          NavigationService.navigate(NavigationService.RouteNames.DashboardScreen);
          return actions.getLiveCountrySuccess({
            liveRaport: new Summary(
              confirmed.country,
              payload.countrySlug,
              confirmed.cases,
              deaths.cases,
              recovered.cases,
            ),
          });
        }),
        catchError(_error => of(actions.moveToChangeLocationScreen())),
      );
    }),
  );

export const moveToChangeLocationScreenEpic = (action$: any) =>
  action$.pipe(
    filter(isOfType(ActionTypes.ChangeLocationScreen)),
    pluck('payload'),
    mergeMap(() => {
      NavigationService.navigate(NavigationService.RouteNames.LoadingScreen);

      // Todo determined
      return getCountries().pipe(
        map(countries => {
          NavigationService.navigate(NavigationService.RouteNames.ChangeLocationScreen);

          return actions.getCountriesSuccess({ countries });
        }),
        catchError(error => of(actions.getCountriesFail(error))),
      );
    }),
  );

export const moveToDashboardEpic = (action$: any) =>
  action$.pipe(
    filter(isOfType(ActionTypes.DashboardScreen)),
    pluck('payload'),
    mergeMap((payload: { summaryLastFetchDate?: Date; liveCountry?: Country }) => {
      // If first time
      if (!payload.summaryLastFetchDate) {
        NavigationService.navigate(NavigationService.RouteNames.WelcomeScreen);
        return of(actions.getSummaryStart());
      }

      // If doesn't have choosen location
      if (!payload.liveCountry) {
        return of(actions.moveToChangeLocationScreen());
      }

      NavigationService.navigate(NavigationService.RouteNames.DashboardScreen);

      const lastDate = new Date(payload.summaryLastFetchDate).setHours(0, 0, 0, 0);
      const today = new Date().setHours(0, 0, 0, 0);

      // If summary needs to be updated
      if (today - lastDate >= 86400000) {
        return of(actions.getSummaryStart());
      }

      return of();
    }),
  );
