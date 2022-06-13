import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { CompaniesService } from './companies/companies.service'
import * as initialData from './examples/companies.json'

declare const module: any
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
  const comapaniesService = app.get<CompaniesService>(CompaniesService)
  const companies = await comapaniesService.findAll()
  if (!companies.length) comapaniesService.createMany(initialData)
  console.log(`Application is running on: ${await app.getUrl()}`)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}
bootstrap()
