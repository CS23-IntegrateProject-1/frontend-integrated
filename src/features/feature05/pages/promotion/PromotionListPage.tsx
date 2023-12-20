import { Box } from "@chakra-ui/react";

import { GetAllPromotion } from "../../../../api/Promotion/GetAllPromotion";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PromotionListCard } from "../../components/PromotionComponent/PromotionListCard";
import IPromotionCardListProp from "../../../../interfaces/Promotion/IPromotionCardListProp.interface";
// import DashboardTopStatus from "../../../feature13/components/DashboardComponents/DashboardTopStatus";

export const PromotionListPage = () => {

  const [datas, setDatas] = useState<IPromotionCardListProp[]>([]);

  const fetchPromotion = async () => {
    const res = await GetAllPromotion();

    setDatas(res);
  };

  useEffect(() => {
    fetchPromotion();
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      {datas &&
        datas.map((data: IPromotionCardListProp) => (
          <PromotionListCard
            key={data?.promotionId}
            promotionId={data.promotionId}
            image_url={data?.image_url}
          />
        ))}
    </Box>
  );
};
