import { Expose } from 'class-transformer';

export class Location {
  @Expose({ name: 'country_name' })
  public readonly country!: string;
}
