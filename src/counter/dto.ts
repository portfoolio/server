import { ApiProperty } from '@nestjs/swagger';

export class CounterDTO {
  @ApiProperty()
  readonly id!: string;

  @ApiProperty()
  readonly title!: string;

  @ApiProperty()
  readonly number!: string;
}
