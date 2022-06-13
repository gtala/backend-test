import { Module } from '@nestjs/common'
import { CompaniesModule } from './companies/companies.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot(), CompaniesModule]
})
export class AppModule {}
