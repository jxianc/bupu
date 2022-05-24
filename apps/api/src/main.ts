import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT)
  console.log(
    `[Bupu]: GraphQL API server is currently running at http://localhost:${process.env.PORT}/graphql`,
  )
}
bootstrap()
