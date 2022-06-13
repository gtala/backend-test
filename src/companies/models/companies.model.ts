import { Document } from 'mongoose'

export interface Company extends Document {
  readonly name: string
  readonly country: string
  readonly website: string
  readonly phone: string
  readonly employees: Employee[]
}

export interface Employee {
  readonly name: string
  readonly email: string
  readonly phone: string
  readonly birthDate: string
  readonly country: Country
}

export interface Country {
  readonly name: string
  readonly region: string
  readonly capital: string
  readonly timezones: string[]
}
