import { Module } from '@nestjs/common';
import { SocketModule } from './sockets/socket.module';

@Module({
  imports: [SocketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
