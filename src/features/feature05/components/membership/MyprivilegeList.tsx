import { Stack } from "@chakra-ui/react";
import IMyprivilege from "../../../../interfaces/Redeem/IMyprivilege";
import { Axios } from "../../../../AxiosInstance";
import { useEffect, useState } from "react";
import { ShortMyPrivilegeCard } from "../../components/membership/ShortMyPrivilegeCard";

// type redeem = {
//   image_url?: string;
// }

// const cards: voucher[] = [
//   {
//     key: 1,
//     name: "freefood",
//     description: "buy 1 free 1",
//   },
//   {
//     key: 2,
//     name: "discount 20%",
//     description: "maximum 200 bath",
//   },
//   {
//     key: 3,
//     name: "freefood",
//     description: "buy 6 free 4",
//   },
//   {
//     key: 4,
//     name: "discount 50%",
//     description: "maximum 20 bath",
//   },
// ];

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
  });

  return (
    // <Stack padding="20px">
    //     {cards.map((card) => (
    //       <ShortMyprivilegeCard key={card.key} voucher_name={card.name} description={card.description}/>
    //     ))}
    // </Stack>
    <Stack mt="-15px" padding="10px">
      {redeemList?.map((myprivilege: IMyprivilege) => (
        <ShortMyPrivilegeCard
          key={myprivilege.redeemId}
          image_url={myprivilege.image_url}
        />
      ))}
    </Stack>
  );
};

export default MyprivilegeList;
