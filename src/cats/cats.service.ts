import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {CreateUserDto, UpdateUserDto, UpdateUserDtoDb} from './dto/update-user.dto';
import { Cat } from './interfaces/cat.interface';
import * as mongoose from "mongoose";

@Injectable()
export class CatsService {
  constructor(@Inject('CAT_MODEL') private readonly catModel: Model<Cat>) {}

  async update(_id: string, createCatDto: UpdateUserDtoDb): Promise<Cat> {

    const post = await this.catModel
        .findByIdAndUpdate(new mongoose.Types.ObjectId(_id), createCatDto)
        .setOptions({ overwrite: true, new: true })
    return post;
  }

  async create(createCatDto: CreateUserDto): Promise<Cat> {
    return await this.catModel.create(createCatDto)
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findById(_id: string): Promise<Cat> {
    return this.catModel.findOne().exec();
  }
}
