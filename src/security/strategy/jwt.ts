import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from 'src/core/config/service';
import { AuthService } from 'src/security/service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'admin') {
  constructor(
    private readonly authService: AuthService,
    private readonly config: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_STRATEGY_SECRET'),
    });
  }

  async validate(payload: any, done: (err, input) => void) {
    const admin = await this.authService.validateAdminToken(payload);
    if (!admin) {
      return done(new UnauthorizedException(), false);
    }

    done(null, admin);
  }
}
