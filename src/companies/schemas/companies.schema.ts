import * as mongoose from 'mongoose'
import { CountryDetails } from '../dto/create-company.dto'

export const CompaniesSchema = new mongoose.Schema({
  name: String,
  country: String,
  website: String,
  phone: String,
  employees: new Array<CountryDetails>()
})
