import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const port = 3500; //个人体系中，以3500开始后端服务
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log('[listen]', port);
}
bootstrap();
