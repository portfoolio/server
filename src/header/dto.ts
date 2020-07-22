import { ApiProperty } from '@nestjs/swagger';

export class HeaderDTO {
  @ApiProperty()
  readonly id!: string;

  @ApiProperty()
  readonly title!: string;

  @ApiProperty()
  readonly subtitle?: string;

  @ApiProperty()
  readonly description?: string;

  @ApiProperty()
  readonly links?: object;
}
