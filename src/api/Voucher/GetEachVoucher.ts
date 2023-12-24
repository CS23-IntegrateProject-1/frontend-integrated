import { Axios } from "../../AxiosInstance";

interface VoucherType {
  voucher_name: string;
  start_date: string;
  end_date: string;
  description: string;
  point_use: null;
  venueId: number;
  isApprove: string;
  voucher_image: string;
  voucherType: string;
  Discount_voucher: DiscountVoucherType;
}
interface DiscountVoucherType {
  fix_discount: number;
  percent_discount: number;
  minimum_spend: number;
  limitation: number;
}
// "voucher_name": "test",
//     "voucher_image": "",
//     "start_date": "2023-12-01T00:00:00.000Z",
//     "end_date": "2023-12-13T00:00:00.000Z",
//     "description": "tttt",
//     "point_use": null,
//     "venueId": 1,
//     "isApprove": "Rejected",
//     "voucherId": 9

export const GetEachVoucher = async (
  voucherId: number
): Promise<VoucherType> => {
  try {
    const response = await Axios.get(`/feature5/AllVoucher/${voucherId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch vouchers");
  }
};
