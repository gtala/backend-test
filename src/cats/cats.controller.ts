import {Controller, Get, Post, Body, Put, Param} from '@nestjs/common';
import {CountryDetails, CreateUserDto, UpdateUserDto, UpdateUserDtoDb} from './dto/update-user.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import {CountryService} from "./country.service";

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
    const countryDto : UpdateUserDtoDb =  {
      name : createCatDto.name,
      surname: 'tala',
     countries : responses.map( (c : any )=> ({name : c[0].name, flag : c[0].flag, timezones : c[0].timezones}))
    }

    return this.catsService.update(id, countryDto);
  }

  @Post()
  async create( @Body() createCatDto: UpdateUserDto) {

    const requests = []
    for (const nationality of createCatDto.nationalities) {
      requests.push(this.countryService.findAll())
    }
    const responses = await Promise.all(requests)
    const dataDto : UpdateUserDtoDb =  {
      name : createCatDto.name,
      surname: '',
      countries : responses.map( (c : any )=> ({name : c[0].name, flag : c[0].flag, timezones : c[0].timezones}))
    }

    return this.catsService.create( dataDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
