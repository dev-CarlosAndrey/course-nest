import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';

import { RecadosModule } from 'src/recados/recados.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    database: 'postgres',
    password: '123456',
    autoLoadEntities: true,
    synchronize: true,
  }), RecadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
