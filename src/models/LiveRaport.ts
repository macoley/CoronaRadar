import { Expose } from 'class-transformer';

export enum LiveRaportStatus {
  confirmed = 'confirmed',
  recovered = 'recovered',
  deaths = 'deaths',
}

export class LiveRaport {
  // Country is not necessary here
  @Expose({ name: 'Country' })
  public readonly country!: string;

  @Expose({ name: 'Date' })
  public readonly date!: Date;

  @Expose({ name: 'Cases' })
  public readonly cases!: number;

  @Expose({ name: 'Status' })
  public readonly status!: LiveRaportStatus;
}
