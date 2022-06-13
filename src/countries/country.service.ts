import { Injectable } from '@nestjs/common'
import fetch from 'cross-fetch'

const COUNTRIES_URL = 'https://restcountries.com/v3.1/alpha/pe'

@Injectable()
export class CountryService {
  async getByName(name: string): Promise<any> {
    const response = await fetch(`${COUNTRIES_URL}/${name}`)
    return response.json()
  }
}
