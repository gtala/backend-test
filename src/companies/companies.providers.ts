import { Mongoose } from 'mongoose'
import { CompaniesSchema } from './schemas/companies.schema'

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Cat', CompaniesSchema),
    inject: ['DATABASE_CONNECTION']
  }
]
