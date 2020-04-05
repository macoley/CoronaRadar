import { Expose } from 'class-transformer';

export class LiveRaport {
  // Country is not necessary here
  @Expose({ name: 'Country' })
  public readonly country!: string;

  @Expose({ name: 'Province' })
  public readonly province!: string;

  @Expose({ name: 'City' })
  public readonly city!: string;

  @Expose({ name: 'Date' })
  public readonly date!: Date;

  @Expose({ name: 'Confirmed' })
  public readonly confirmed!: number;

  @Expose({ name: 'Deaths' })
  public readonly deaths!: number;

  @Expose({ name: 'Recovered' })
  public readonly recovered!: number;

  @Expose({ name: 'Active' })
  public readonly active!: number;

  constructor(country: string, date: Date, confirmed: number, deaths: number, recovered: number, active: number) {
    this.country = country;
    this.date = date;
    this.confirmed = confirmed;
    this.deaths = deaths;
    this.recovered = recovered;
    this.active = active;
  }
}
