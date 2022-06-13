import { Injectable } from '@nestjs/common'
import fetch from 'cross-fetch'

const COUNTRIES_URL = 'https://restcountries.com/v3.1/name/'

@Injectable()
export class CountryService {
  async getByName(name: string): Promise<any> {
    return fetch(`${COUNTRIES_URL}/${name}`)
  }
}
