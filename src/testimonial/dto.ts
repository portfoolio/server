import { ApiProperty } from '@nestjs/swagger';

export class ProjectDTO {
  @ApiProperty()
  readonly id!: string;

  @ApiProperty()
  readonly title!: string;

  @ApiProperty()
  readonly subtitle!: string;

  @ApiProperty()
  readonly image!: string;
}

export class ProjectHeaderDTO {
  @ApiProperty()
  readonly id!: string;

  @ApiProperty()
  readonly title!: string;

  @ApiProperty()
  readonly description!: string;
}
