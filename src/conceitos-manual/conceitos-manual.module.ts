import { Module } from '@nestjs/common';
import { ConceitosManualController } from './conceito-manual.controller';
import { ConceitosManualService } from './conceitos-manual.service';

@Module({
  controllers: [ConceitosManualController],
  providers: [ConceitosManualService],
})
export class ConceitosManualModule {}
