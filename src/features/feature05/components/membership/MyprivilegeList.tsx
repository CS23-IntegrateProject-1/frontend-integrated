import { Stack } from "@chakra-ui/react";
import IMyprivilege from "../../../../interfaces/Redeem/IMyprivilege";
import { Axios } from "../../../../AxiosInstance";
import { useEffect, useState } from "react";
import { ShortMyPrivilegeCard } from "../../components/membership/ShortMyPrivilegeCard";

const MyprivilegeList = () => {
  const [redeemList, setRedeemList] = useState<IMyprivilege[]>([]);
  const fetchMyprivilegeList = async () => {
    try {
      const result = await Axios.get(`/feature5/GetRedeem/`);
      setRedeemList(result?.data);
      console.log(redeemList[1]);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMyprivilegeList();
  }, []);

  return (
    <Stack mt="-15px" padding="10px">
      {redeemList?.map((image_url: IMyprivilege) => (
        <ShortMyPrivilegeCard {...image_url} />
      ))}
    </Stack>
  );
};

export default MyprivilegeList;
