import { Inject, Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { Company } from './models/companies.model'
import { CreateCompanyDto } from './dto/create-company.dto'
import { UpdateCompanyDto } from './dto/update-company.dto'
import * as mongoose from 'mongoose'

@Injectable()
export class CompaniesService {
  constructor(@Inject('COMPANY_MODEL') private readonly companyModel: Model<Company>) {}

  async update(id: string, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    const idDb = new mongoose.Types.ObjectId(id)
    await this.companyModel.updateOne({ _id: idDb }, updateCompanyDto)
    return this.companyModel.findOne({ _id: idDb }).exec()
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
