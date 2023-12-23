import { Axios } from "../../AxiosInstance";
import RedeemProps from "../../interfaces/Redeem/RedeemProps";

export const fetchRedeem = async (redeemId: string): Promise<RedeemProps> => {
  try {
    const redeem = await Axios.get(`/feature5/GetRedeembyId/${redeemId}`);
    return redeem.data;
  } catch (error) {
    console.error("Error fetching article:", error);
    throw new Error("Failed to fetch article");
  }
};
