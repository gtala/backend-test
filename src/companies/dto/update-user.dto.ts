export class UpdateUserDto {
  readonly name: string
  readonly nationalities: string[]
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
