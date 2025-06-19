import { Injectable } from '@nestjs/common';
import { HealthDto } from './app.resolver';

@Injectable()
export class AppService {
  getHealth(): HealthDto {
    return {
      status: 'OK',
      message: 'Payment service is running smoothly! 💳✨',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: '1.0.0',
    };
  }
}
