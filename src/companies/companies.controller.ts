import { Controller, Get, Post, Body, Put, Param, Logger } from '@nestjs/common'
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
  async update(@Param() id: string, @Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    const httpRequests = createCompanyDto.employees.map((employee) =>
      this.countryService.getByName(employee.country)
    )
    const httpResponses = await Promise.all(httpRequests)
    const countries = await Promise.all(httpResponses.map((r) => r.json()))

    const allCountriesResult: any = {}
    for (let index = 0; index < createCompanyDto.employees.length; index++) {
      allCountriesResult[createCompanyDto.employees[index].country] = countries[index][0]
    }

    const { name, country, phone, website, employees } = createCompanyDto

    const updateCompanyDto: UpdateCompanyDto = {
      name,
      country,
      phone,
      website,
      employees: employees.map((emp) => ({
        email: emp.email,
        name: emp.name,
        phone: emp.phone,
        birthDate: emp.birthDate,
        country: {
          name: emp.country,
          capital: allCountriesResult[emp.country].capital,
          region: allCountriesResult[emp.country].region,
          timezones: allCountriesResult[emp.country].timezones
        }
      }))
    }

    return this.companiesService.update(id, updateCompanyDto)
  }
}
