import { Mongoose } from 'mongoose'
import { CompaniesSchema } from './schemas/companies.schema'

export const companiesProviders = [
  {
    provide: 'COMPANY_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Companies', CompaniesSchema),
    inject: ['DATABASE_CONNECTION']
  }
]
