import { Injectable } from '@nestjs/common'
import fetch from 'cross-fetch'

const URL = 'https://restcountries.com/v3.1/alpha/pe'

@Injectable()
export class CountryService {
  async findAll(): Promise<any> {
    const response = await fetch(URL)
    return response.json()
  }
}
