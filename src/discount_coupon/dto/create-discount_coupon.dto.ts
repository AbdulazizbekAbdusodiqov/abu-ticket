export class CreateDiscountCouponDto {
  ticketId: number;
  discount_code: string;
  discount_percentage: number;
  valid_from: string;
  valid_to: string;
  status: string;
}
