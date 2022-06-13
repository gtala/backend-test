import * as mongoose from 'mongoose'
import { hostname } from 'os'

console.log(hostname().split('.').join(''))

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(`${process.env['DB_CONN']}-${hostname().split('.').join('')}`)
  }
]
