import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { catsProviders } from './cats.providers';
import { DatabaseModule } from '../database/database.module';
import {CountryService} from "./country.service";

@Module({
  imports: [DatabaseModule ],
  controllers: [CatsController],
  providers: [CatsService, CountryService, ...catsProviders],
})
export class CatsModule {}
