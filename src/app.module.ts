import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FireblocksModule } from './fireblocks/fireblocks.module';

@Module({
  imports: [FireblocksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
