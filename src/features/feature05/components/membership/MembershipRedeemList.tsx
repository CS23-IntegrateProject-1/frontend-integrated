import { HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import IRedeemList from "../../../../interfaces/Redeem/IRedeemList";
import { Axios } from "../../../../AxiosInstance";
import { ShortMembershipRedeemCard } from "./ShortMembershipRedeemCard";

const MembershipRedeemList = () => {
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
  }, []);

  return (
    <HStack
      mt="-15px"
      padding="10px"
      spacing="20px"
      w={"100%"}
      overflowX="scroll"
    >
      {voucherList &&
        voucherList?.map((voucher_image: IRedeemList) => (
          <ShortMembershipRedeemCard {...voucher_image} />
        ))}
    </HStack>
  );
};

export default MembershipRedeemList;
