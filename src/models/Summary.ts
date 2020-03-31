import { Expose } from 'class-transformer';

export class Summary {
  @Expose({ name: 'Country' })
  public readonly country!: string;

  @Expose({ name: 'Slug' })
  public readonly countrySlug!: string;

  @Expose({ name: 'TotalConfirmed' })
  public readonly confirmed!: number;

  @Expose({ name: 'TotalDeaths' })
  public readonly deaths!: number;

  @Expose({ name: 'TotalRecovered' })
  public readonly recovered!: number;

  // active = confirmed - (recovered + deaths)
  public get active() {
    return this.confirmed - this.deaths - this.recovered;
  }

  constructor(country: string, countrySlug: string, confirmed: number, deaths: number, recovered: number) {
    this.country = country;
    this.countrySlug = countrySlug;
    this.confirmed = confirmed;
    this.deaths = deaths;
    this.recovered = recovered;
  }
}
