import { Stack } from "@chakra-ui/react";
import { ShortVoucherCard } from "./ShortVoucherCard";
import { useEffect, useState } from "react";
import IRedeemList from "../../../../interfaces/Redeem/IRedeemList";
import { Axios } from "../../../../AxiosInstance";

export const VoucherList = () => {
  const [voucherList, setVoucherList] = useState<IRedeemList[]>([]);
  const fetchRedeemList = async () => {
    try {
      const result = await Axios.get(`/feature5/GetVoucherForUser/`);
      setVoucherList(result.data);
      // console.log(voucherList);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchRedeemList();
  });
  return (
    <Stack mt="-15px" padding="10px">
      {voucherList?.map((voucher_image: IRedeemList) => (
        <ShortVoucherCard {...voucher_image} />
      ))}
    </Stack>
  );
};


