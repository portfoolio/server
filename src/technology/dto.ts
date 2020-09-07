import { ApiProperty } from '@nestjs/swagger';

export class TechnologyDTO {
  @ApiProperty()
  readonly id!: string;

  @ApiProperty()
  readonly image!: string;
}

export class TechnologyHeaderDTO {
  @ApiProperty()
  readonly id!: string;

  @ApiProperty()
  readonly title!: string;

  @ApiProperty()
  readonly description!: string;
}
