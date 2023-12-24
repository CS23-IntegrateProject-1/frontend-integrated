export default interface IReward {
  User_voucher: [
    {
      isUsed: boolean;
    }
  ];
  userId: number;
  voucherId: number;
  voucher_image: string;
}
