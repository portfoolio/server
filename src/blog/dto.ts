import { ApiProperty } from '@nestjs/swagger';

export class TestimonialDTO {
  @ApiProperty()
  readonly id!: string;

  @ApiProperty()
  readonly comment!: string;

  @ApiProperty()
  readonly author!: string;
}

export class TestimonialHeaderDTO {
  @ApiProperty()
  readonly id!: string;

  @ApiProperty()
  readonly title!: string;
}
