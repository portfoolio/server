import { ApiProperty } from '@nestjs/swagger';

export class AboutDTO {
  @ApiProperty()
  readonly id!: string;

  @ApiProperty()
  readonly title!: string;

  @ApiProperty()
  readonly description!: string;
}
