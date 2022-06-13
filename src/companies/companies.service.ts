import { Inject, Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { Company } from './models/companies.model'
import * as mongoose from 'mongoose'
import { CreateCompanyDto } from './dto/create-company.dto'

@Injectable()
export class CompaniesService {
  constructor(@Inject('COMPANY_MODEL') private readonly companyModel: Model<Company>) {}

  async update(_id: string, createCompanyDto: CreateCompanyDto): Promise<Company> {
    const post = await this.companyModel
      .findByIdAndUpdate(new mongoose.Types.ObjectId(_id), createCompanyDto)
      .setOptions({ overwrite: true, new: true })

    return post
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
