export default interface IVoucherCardProp {
	voucher_name: string;
	voucherId: number;
	isApprove: approve;
}

enum approve {
  Rejected = "Rejected",
  In_progress = "In_progress",
  Completed = "Completed"
}
