export default interface IAdvertisementCardProp {
  name: string;
  description: string;
  advertisementId: number;
  isApprove: approve;
}

enum approve {
  Rejected = "Rejected",
  In_progress = "In_progress",
  Completed = "Completed",
  Awaiting_payment = "Awaiting_payment"
}