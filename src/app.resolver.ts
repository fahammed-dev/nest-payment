import { Field, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';

@ObjectType()
export class HealthDto {
  @Field()
  status: string;

  @Field()
  message: string;

  @Field()
  timestamp: string;

  @Field()
  uptime: number;

  @Field()
  version: string;
}

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => HealthDto)
  getHealth(): HealthDto {
    return this.appService.getHealth();
  }
}
