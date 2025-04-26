import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ConceitosAutomaticoModule } from 'src/conceitos-automatico/conceitos-automatico.module';
import { ConceitosManualModule } from 'src/conceitos-manual/conceitos-manual.module';
import { RecadosModule } from 'src/recados/recados.module';

@Module({
  imports: [ConceitosAutomaticoModule, ConceitosManualModule, RecadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
