import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common'
import { CreateCompanyDto } from './dto/create-company.dto'
import { CompaniesService } from './companies.service'
import { Company } from './models/companies.model'
import { CountryService } from '../countries/country.service'

@Controller('companies')
export class CompaniesController {
  constructor(
    private readonly companiesService: CompaniesService,
    private readonly countryService: CountryService
  ) {}

  @Put(':id')
  async updatePost(@Param() id: string, @Body() createCompanyDto: CreateCompanyDto) {
    return this.companiesService.update(id, createCompanyDto)
  }

  @Post()
  async create(@Body() companyDto: CreateCompanyDto) {
    const requests = []
    for (const employee of companyDto.employees) {
      console.log('country to find', employee.country)
      requests.push(this.countryService.findAll())
    }
    const responses = await Promise.all(requests)

    /* const dataDto: UpdateUserDtoDb = {
      name: companyDto.name,
      surname: '',
      countries: responses.map((c: any) => ({
        name: c[0].name,
        flag: c[0].flag,
        timezones: c[0].timezones
      }))
    }*/

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
}
