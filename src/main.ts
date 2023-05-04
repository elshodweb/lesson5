import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT.toString();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  await app.listen(PORT, () => void console.log(`listen to ${PORT}`));
}
bootstrap();
