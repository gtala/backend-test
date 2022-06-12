export class UpdateUserDto {
  readonly name: string;
  readonly nationalities : string[]
}

export class CreateUserDto {
  readonly name: string;
  readonly nationalities : string[]
}

export class UpdateUserDtoDb {
  readonly name: string;
  readonly nationalities : CountryDetails[]
}


export class CountryDetails {
  readonly name: string;
  readonly breed: string;
}
