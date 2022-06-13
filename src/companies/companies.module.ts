import { Module } from '@nestjs/common'
import { CompaniesController } from './companies.controller'
import { CompaniesService } from './companies.service'
import { companiesProviders } from './companies.providers'
import { DatabaseModule } from '../database/database.module'
import { CountryService } from '../countries/country.service'

@Module({
  imports: [DatabaseModule],
  controllers: [CompaniesController],
  providers: [CompaniesService, CountryService, ...companiesProviders]
})
export class CompaniesModule {}
