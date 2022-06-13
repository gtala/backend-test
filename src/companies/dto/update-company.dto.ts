export class UpdateCompanyDto {
  readonly name: string
  readonly country: string
  readonly website: string
  readonly phone: string
  readonly employees: UpdateEmployeeDto[]
}

export class UpdateEmployeeDto {
  readonly name: string
  readonly email: string
  readonly phone: string
  readonly birthDate: string
  readonly country: UpdateCountryDto
}

export class UpdateCountryDto {
  readonly name: string
  readonly capital: string
  readonly region: string
  readonly timezones: string[]
}
