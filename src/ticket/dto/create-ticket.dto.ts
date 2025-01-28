export class CreateTicketDto {
  eventId: number;
  seatId: number;
  price: number;
  service_fee: number;
  statusId: number;
  ticket_type: string;
}
