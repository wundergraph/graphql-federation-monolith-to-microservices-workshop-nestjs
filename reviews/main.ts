import { NestFactory } from '@nestjs/core';
import { ReviewsModule } from './reviews.module';

async function bootstrap() {
  const app = await NestFactory.create(ReviewsModule);
  await app.listen(4043);
}
bootstrap();