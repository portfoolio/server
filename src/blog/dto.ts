import { ApiProperty } from '@nestjs/swagger';

export class BlogDTO {
  @ApiProperty()
  readonly id!: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  thumbnail: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  content: string;
}

export class BlogHeaderDTO {
  @ApiProperty()
  readonly id!: string;

  @ApiProperty()
  readonly title!: string;

  @ApiProperty()
  readonly description!: string;
}
