import { Stack } from "@chakra-ui/react";
import { ShortRedeemCard } from "../../components/membership/ShortRedeemCard";
import { useEffect, useState } from "react";
import IRedeemList from "../../../../interfaces/Redeem/IRedeemList";
import { Axios } from "../../../../AxiosInstance";

const RedeemList = () => {
  const [voucherList, setVoucherList] = useState<IRedeemList[]>([]);
  const fetchRedeemList = async () => {
    try {
      const result = await Axios.get(`/feature5/AllVoucherForUser/`);
      setVoucherList(result.data);
      console.log(voucherList);
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
        <ShortRedeemCard {...voucher_image} />
      ))}
    </Stack>
  );
};

export default RedeemList;
