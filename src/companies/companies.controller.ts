import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common'
import { CreateCompanyDto } from './dto/create-company.dto'
import { CompaniesService } from './companies.service'
import { Company } from './models/companies.model'
import { CountryService } from '../countries/country.service'
import { UpdateCompanyDto } from './dto/update-company.dto'

@Controller('companies')
export class CompaniesController {
  constructor(
    private readonly companiesService: CompaniesService,
    private readonly countryService: CountryService
  ) {}

  @Post()
  async create(@Body() companyDto: CreateCompanyDto) {
    return this.companiesService.create(companyDto)
  }

  @Get()
  async findAll(): Promise<Company[]> {
    return this.companiesService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Company> {
    return this.companiesService.findById(id)
  }

  @Put(':id')
  async update(@Param() id: string, @Body() createCompanyDto: CreateCompanyDto) {
    const promises = createCompanyDto.employees.map((employee) =>
      this.countryService.getByName(employee.country)
    )
    const responses = await Promise.all(promises)
    const cache: any = {}
    for (let index = 0; index < createCompanyDto.employees.length; index++) {
      cache[createCompanyDto.employees[index].country] = responses[index][0]
    }

    console.log(cache)

    const { name, country, phone, website, employees } = createCompanyDto
    const update: UpdateCompanyDto = {
      name,
      country,
      phone,
      website,
      employees: employees.map((e) => ({
        email: e.email,
        name: e.name,
        phone: e.phone,
        birthDate: e.birthDate,
        country: {
          name: e.country,
          capital: cache[e.country].capital,
          region: cache[e.country].region,
          timezones: cache[e.country].timezones
        }
      }))
    }

    return this.companiesService.update(id, update)
  }
}
