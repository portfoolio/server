import { ApiProperty } from '@nestjs/swagger';

export class SettingDTO {
  @ApiProperty()
  readonly id!: string;

  @ApiProperty()
  readonly siteTitle!: string;

  @ApiProperty()
  readonly siteDescription!: string;

  @ApiProperty()
  readonly favicon!: string;

  @ApiProperty()
  showCounter: boolean

  @ApiProperty()
  showAbout: boolean;

  @ApiProperty()
  showService: boolean;

  @ApiProperty()
  showJourney: boolean;

  @ApiProperty()
  showProject: boolean;

  @ApiProperty()
  showTestimonial: boolean;

  @ApiProperty()
  showTechnology: boolean;

  @ApiProperty()
  showBlog: boolean;

  @ApiProperty()
  showContact: boolean;

  @ApiProperty()
  appearance: object;
}
