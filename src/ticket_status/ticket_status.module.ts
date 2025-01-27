import { Module } from '@nestjs/common';
import { TicketStatusService } from './ticket_status.service';
import { TicketStatusController } from './ticket_status.controller';

@Module({
  controllers: [TicketStatusController],
  providers: [TicketStatusService],
})
export class TicketStatusModule {}
