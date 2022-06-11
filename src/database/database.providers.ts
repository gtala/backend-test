import * as mongoose from 'mongoose';

const URL = 'mongodb://127.0.0.1:27017'
//const URL = `mongodb+srv://admin:admin@cluster0.e6bvc.mongodb.net/sandbox-backend`

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(URL),
  },
];
