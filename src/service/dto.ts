import { ApiProperty } from '@nestjs/swagger';

export class ServiceDTO {
  @ApiProperty()
  readonly id!: string;

  @ApiProperty()
  readonly title!: string;

  @ApiProperty()
  readonly description!: string;

  @ApiProperty()
  readonly icon!: string;
}

export class ServiceHeaderDTO {
  @ApiProperty()
  readonly id!: string;

  @ApiProperty()
  readonly title!: string;

  @ApiProperty()
  readonly description!: string;
}
