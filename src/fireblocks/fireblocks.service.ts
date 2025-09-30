import { Injectable } from '@nestjs/common';

@Injectable()
export class FireblocksService {
  getFireblocksInfo(): string {
    return 'Fireblocks SDK Service is running!';
  }
}