import { Controller, Get } from '@nestjs/common';
import { FireblocksService } from './fireblocks.service';

@Controller('fireblocks')
export class FireblocksController {
  constructor(private readonly fireblocksService: FireblocksService) {}

  @Get()
  getFireblocksInfo(): string {
    return this.fireblocksService.getFireblocksInfo();
  }
}