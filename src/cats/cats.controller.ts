import {Controller, Get, Post, Body, Put, Param} from '@nestjs/common';
import {CountryDetails, UpdateUserDto, UpdateUserDtoDb} from './dto/update-user.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import {CountryService} from "./country.service";
import {response} from "express";

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService, private readonly countryService: CountryService) {}

  @Put(':id')
  async updatePost(@Param() id : string, @Body() createCatDto: UpdateUserDto) {

    const requests = []
    for (const nationality of createCatDto.nationalities) {
      requests.push(this.countryService.findAll())
    }

    const responses = await Promise.all(requests)
    console.log(responses)

    const countries : CountryDetails[] = responses.map( (c : CountryDetails)=> ({name : '', breed : ''}))
    const countryDto:  UpdateUserDtoDb =  {
      name : createCatDto.name,
       nationalities : countries
    }
    return this.catsService.update(id, countryDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
