import { Inject, Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { Company } from './models/companies.model'
import * as mongoose from 'mongoose'
import { CreateCompanyDto } from './dto/create-company.dto'

@Injectable()
export class CompaniesService {
  constructor(@Inject('COMPANY_MODEL') private readonly companyModel: Model<Company>) {}

  async update(id: string, createCompanyDto: CreateCompanyDto) {
    return this.companyModel.updateOne({ _id: id }, {}).exec()
  }

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return await this.companyModel.create(createCompanyDto)
  }

  async findAll(): Promise<Company[]> {
    return this.companyModel.find().exec()
  }

  async findById(_id: string): Promise<Company> {
    return this.companyModel.findOne({ _id: _id }).exec()
  }
}
