export default interface IReportApprove {
    topic: string;
    complaint: string;
    ComplainTicketId: number;
    status: approve;
  }
  
  enum approve {
    Peinding = "Pending",
    Fixed = "Completed"
  }
  