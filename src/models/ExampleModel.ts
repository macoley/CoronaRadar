import { Expose } from 'class-transformer';

export class ExampleModel {
  public readonly id!: string;

  @Expose({ name: 'some_property' })
  public readonly someProperty!: string;

  //   @Type(() => OtherModel)
  //   public readonly other?: OtherModel;
}
