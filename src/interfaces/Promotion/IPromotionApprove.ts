export default interface IPromotionApprove {
    name: string;
    description: string;
    promotionId: number;
    isApprove: approve;
  }
  
  enum approve {
    Rejected = "Rejected",
    In_progress = "In_progress",
    Completed = "Completed"
  }
  