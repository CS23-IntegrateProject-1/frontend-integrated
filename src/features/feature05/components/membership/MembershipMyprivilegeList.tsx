
/* eslint-disable react-hooks/exhaustive-deps */
import { HStack } from "@chakra-ui/react";
import IMyprivilege from "../../../../interfaces/Redeem/IMyprivilege";
import { Axios } from "../../../../AxiosInstance";
import { useEffect, useState } from "react";
import { ShortMembershipMyPrivilegeCard } from "./ShortMembershipMyPrivilegeCard";

const MembershipMyprivilegeList = () => {
  const [redeemList, setRedeemList] = useState<IMyprivilege[]>([]);
  const fetchMyprivilegeList = async () => {
    try {
      const result = await Axios.get(`/feature5/GetRedeem/`);
      // setRedeemList(result?.data);
      // console.log(redeemList[1]);
      setRedeemList(result.data);
      console.log(redeemList);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMyprivilegeList();
  }, []);

  return (
    // <HStack mt="-15px" padding="10px">
    //   {redeemList?.map((myprivilege: IMyprivilege) => (
    //     <ShortMembershipMyPrivilegeCard
    //       key={myprivilege.redeemId}
    //       image_url={myprivilege.image_url}
    //     />
    //   ))}
    // </HStack>
    <HStack
      mt="-15px"
      padding="10px"
      spacing="20px"
      w={"100%"}
      overflowX="scroll"
    >
      {redeemList &&
        redeemList?.map((image_url: IMyprivilege) => (
          <ShortMembershipMyPrivilegeCard {...image_url} />
        ))}
    </HStack>
  );
};

export default MembershipMyprivilegeList;
