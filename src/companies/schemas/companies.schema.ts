import * as mongoose from 'mongoose'
import { Employee } from '../models/companies.model'

export const CompaniesSchema = new mongoose.Schema({
  name: String,
  country: String,
  website: String,
  phone: String,
  employees: new Array<Employee>()
})
