import { Expose } from 'class-transformer';

export class Country {
  @Expose({ name: 'Country' })
  public readonly country!: string;

  @Expose({ name: 'Slug' })
  public readonly countrySlug!: string;

  @Expose({ name: 'Provinces' })
  public readonly provinces!: string[];
}
