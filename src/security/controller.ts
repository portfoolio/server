import { Body, Controller, Post, UseGuards, Response, HttpStatus, NotFoundException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { LoginDTO } from 'src/security/dto';
import { AuthService } from 'src/security/service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  public async login(@Body() loginDTO: LoginDTO, @Response() res) {
    try {
      const response = await this.authService.login(loginDTO.email);
      res.status(HttpStatus.OK).json(response);
    } catch (e) {
      if (e instanceof NotFoundException) {
        return res.status(HttpStatus.NOT_FOUND).json({
          message: 'Email or password are invalid.',
        });
      }

      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({});
    }
  }
}
