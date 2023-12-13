import { NestFactory } from '@nestjs/core';
import { MonolithModule } from './monolith.module';

async function bootstrap() {
  const app = await NestFactory.create(MonolithModule);
  await app.listen(4040);
}
bootstrap();