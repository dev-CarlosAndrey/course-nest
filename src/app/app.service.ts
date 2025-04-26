import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  solveExample() {
    return 'Exemplo usa o service';
  }
}
