import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/security/controller';
import { AuthService } from 'src/security/service';
import { LocalStrategy } from 'src/security/strategy/local';
import { JwtStrategy } from 'src/security/strategy/jwt';

@Module({
  controllers: [AuthController],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'portfolio-secret-jwt',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, LocalStrategy, JwtStrategy],
})

export class SecurityModule {}
