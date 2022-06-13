import * as mongoose from 'mongoose'
import { CountryDetails } from '../dto/update-user.dto'

export const CompaniesSchema = new mongoose.Schema({
  name: String,
  surname: String,
  countries: new Array<CountryDetails>()
})
