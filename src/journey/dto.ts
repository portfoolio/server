import { ApiProperty } from '@nestjs/swagger';

export class JourneyDTO {
  @ApiProperty()
  readonly id!: string;

  @ApiProperty()
  readonly title!: string;

  @ApiProperty()
  readonly items: [];
}

export class JourneyHeaderDTO {
  @ApiProperty()
  readonly id!: string;

  @ApiProperty()
  readonly title!: string;

  @ApiProperty()
  readonly description!: string;
}

export class JourneyItemDTO {
  @ApiProperty()
  readonly id!: string;

  @ApiProperty()
  readonly title!: string;

  @ApiProperty()
  readonly subtitle!: string;

  @ApiProperty()
  readonly description!: string;
}
