export default interface IVoucherApprove {
  voucher_name: string;
  description: string;
  voucherId: number;
  isApprove: approve;
}

enum approve {
  Rejected = "Rejected",
  In_progress = "In_progress",
  Completed = "Completed"
}
