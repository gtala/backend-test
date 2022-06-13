export class CreateCompanyDto {
  readonly name: string
  readonly country: string
  readonly website: string
  readonly phone: string
  readonly employees: Employee[]
}

export class Employee {
  readonly name: string
  readonly email: string
  readonly phone: string
  readonly birthDate: string
  readonly country: string
}

export class UpdateUserDtoDb {
  readonly name: string
  readonly surname: string
  readonly countries: CountryDetails[]
}

export class CountryDetails {
  readonly name: {
    common: string
  }
  readonly flag: string
  readonly timezones: string[]
}
