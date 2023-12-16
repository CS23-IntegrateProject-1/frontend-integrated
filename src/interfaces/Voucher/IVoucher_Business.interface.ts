export default interface IVoucher_Business {
  voucher_name: string;
  voucher_image: string;
  start_date: string;
  end_date: string;
  description: string;
  point_use: number;
  venueId: number;
  isApprove: string;
  voucherId: number;
  target?: string;
}
