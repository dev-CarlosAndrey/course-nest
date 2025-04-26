import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosManualService {
  solveHome(): string {
    return 'Home do conceitos manual solucionada';
  }
}
