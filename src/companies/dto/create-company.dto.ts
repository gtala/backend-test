export class CreateCompanyDto {
  readonly name: string
  readonly country: string
  readonly website: string
  readonly phone: string
  readonly employees: EmployeeDto[]
}

export class EmployeeDto {
  readonly name: string
  readonly email: string
  readonly phone: string
  readonly birthDate: string
  readonly country: string
}
