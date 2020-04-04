import { plainToClass } from 'class-transformer';
import { from, of } from 'rxjs';
import { map, tap, last, first, flatMap } from 'rxjs/operators';
import axios from 'axios';
import { Summary } from '../models/Summary';
import { LiveRaport } from '../models/LiveRaport';
import { Country } from '../models/Country';
import { uniqWith, sumBy } from 'lodash';

const API_URL = 'https://api.covid19api.com/';

export const getSummary = () => {
  const url = `${API_URL}summary`;
  return from(axios.get(url)).pipe(
    map(response => response.data.Countries),
    map(country => plainToClass(Summary, country)),
  );
};

export const getLiveCountry = (country: string, fromDate?: Date) => {
  const url = fromDate
    ? `${API_URL}live/country/${country}/status/confirmed/date/${fromDate.toISOString()}`
    : `${API_URL}live/country/${country}/status/confirmed`;

  return from(axios.get(url)).pipe(
    map(response => response.data as []),
    map(raport => plainToClass(LiveRaport, raport)),
    map(raports => {
      const firstRaport = raports[0];

      let active = 0;
      let confirmed = 0;
      let deaths = 0;
      let recovered = 0;

      raports.forEach(raport => {
        active += raport.active;
        confirmed += raport.confirmed;
        deaths += raport.deaths;
        recovered += raport.recovered;
      });

      return new LiveRaport(firstRaport.country, firstRaport.date, confirmed, deaths, recovered, active);
    }),
  );
};

export const getCountries = () => {
  const url = `${API_URL}countries`;

  return from(axios.get(url)).pipe(
    map(response => response.data as []),
    map(country => plainToClass(Country, country)),
  );
};
