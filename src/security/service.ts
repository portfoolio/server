import * as jwt from 'jsonwebtoken';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from 'src/core/config/service';
import { JwtInterface } from 'src/security/interface';
import { AdminInterface } from 'src/admin/interface';
import { AdminService } from 'src/admin/service';

@Injectable()
export class AuthService {
  constructor(
    private readonly service: AdminService,
    private readonly config: ConfigService,
  ) {}

  async login(email) {
    const admin = await this.service.findByEmail(email);
    if (!admin) {
      throw new NotFoundException('Admin not found.');
    }

    return this.createToken(admin);
  }

  createToken(admin: AdminInterface) {
    const expiresIn = '1d';
    const { email, firstName, lastName } = admin;
    const accessToken = jwt.sign(
      { email, firstName, lastName },
      this.config.get('JWT_STRATEGY_SECRET'),
      { expiresIn },
    );

    return {
      user: admin,
      expiresIn,
      accessToken,
    };
  }

  async validateAdminToken(payload: JwtInterface): Promise<any> {
    return await this.service.findByEmail(payload.email);
  }

  async validateAdmin(email: string, pass: string): Promise<any> {
    const admin = await this.service.findByEmail(email);
    if (admin && await admin.comparePassword(pass)) {
      const { password, ...result } = admin;
      return result;
    }

    return null;
  }
}
