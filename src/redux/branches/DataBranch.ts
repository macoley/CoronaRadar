import { Summary } from '../../models/Summary';
import { Location } from '../../models/Location';
import { Country } from '../../models/Country';

export class DataBranch {
  public readonly countriesLastFetchDate?: Date;
  public readonly countries: Country[];

  public readonly summaryLastFetchDate?: Date;
  public readonly summary: Summary[];
  public readonly summarySorted: Summary[];

  public readonly liveCountryLastFetchDate?: Date;
  public readonly liveCountry?: Summary;

  public readonly determinedCountry?: Location;

  constructor(
    countriesLastFetchDate: Date,
    countries: Country[],
    summaryLastFetchDate: Date,
    summary: Summary[],
    summarySorted: Summary[],
    liveCountryLastFetchDate: Date,
    liveCountry: Summary,
    determinedCountry: Location,
  ) {
    this.countriesLastFetchDate = countriesLastFetchDate;
    this.countries = countries;
    this.summaryLastFetchDate = summaryLastFetchDate;
    this.summary = summary;
    this.summarySorted = summarySorted;
    this.liveCountryLastFetchDate = liveCountryLastFetchDate;
    this.liveCountry = liveCountry;
    this.determinedCountry = determinedCountry;
  }
}
