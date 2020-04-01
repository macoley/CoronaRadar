import { plainToClass } from 'class-transformer';
import { from, of } from 'rxjs';
import { map, tap, last, first, flatMap } from 'rxjs/operators';
import axios from 'axios';
import { Summary } from '../models/Summary';
import { LiveRaport } from '../models/LiveRaport';
import { Country } from '../models/Country';

const API_URL = 'https://api.covid19api.com/';

export const getSummary = () => {
  const url = `${API_URL}summary`;
  return from(axios.get(url)).pipe(
    map(response => response.data.Countries),
    map(country => plainToClass(Summary, country)),
  );
};

export const getLiveCountry = (country: string, type: string, fromDate?: Date) => {
  const url = fromDate
    ? `${API_URL}live/country/${country}/status/${type}/date/${fromDate.toISOString()}`
    : `${API_URL}live/country/${country}/status/${type}`;

  const fallBackUrl = `${API_URL}country/${country}/status/${type}`;

  return from(axios.get(url)).pipe(
    flatMap(response => {
      if (!Array.isArray(response.data) || !response.data) {
        return from(axios.get(fallBackUrl));
      }
      return of(response);
    }),
    map(response => response.data as []),
    map(raport => plainToClass(LiveRaport, raport)),
    map(raports => raports[raports.length - 1]),
  );
};

export const getCountries = () => {
  const url = `${API_URL}countries`;

  return from(axios.get(url)).pipe(
    map(response => response.data as []),
    map(country => plainToClass(Country, country)),
  );
};
