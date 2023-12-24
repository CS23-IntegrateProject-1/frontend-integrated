export default interface IVoucherDetail {
  voucher_image: string;
  voucher_name: string;
  point_use?: number;
  description: string;
  voucherId: string;
  User_voucher: [
    {
      isUsed: false;
    }
  ];
}
