import { ApiProperty } from '@nestjs/swagger';

export class ServiceDTO {
  @ApiProperty()
  readonly id!: string;

  @ApiProperty()
  readonly title!: string;

  @ApiProperty()
  readonly description!: string;
}
