import { Box, Center, Image } from "@chakra-ui/react";
import Tags from "../../components/membership/Tags";
import { useParams } from "react-router-dom";
import { BranchCard } from "../../components/PromotionComponent/BranchCard";
import { Axios } from "../../../../AxiosInstance";
import { useEffect, useState } from "react";
import { IBranchCardListProp } from "../../../../interfaces/Promotion/IBranchCardLiistProp.interface";

export const PromotionDetail = () => {
  const { promotionId } = useParams();
  const [image, setImage] = useState<string>("");
  const [branchList, setBranchList] = useState<IBranchCardListProp[]>([]);

  const fetchPromotionBranch = async () => {
    try {
      const result = await Axios.get(
        `/feature5/GetDetailPromotion/${promotionId}`
      );
      console.log(result);
      setBranchList(result.data.getVeuneList);
      console.log(result);
      setImage(result.data.getDetail.image_url);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPromotionBranch();
  }, );

  return (
    <Box marginRight={"150px"} marginLeft={"150px"}>
      <Center mb={"15px"} overflow={"hidden"} borderRadius={"5px"}>
        <Image
          w={"100%"}
          height={"auto"}
          objectFit={"cover"}
          src={`${import.meta.env.VITE_BACKEND_URL}${image}` || ""}
        ></Image>
      </Center>
      <Tags tag_text={"Branches"}></Tags>
      <Box mt={"10px"}>
        {branchList.map((branchInfo: IBranchCardListProp) => (
          <BranchCard {...branchInfo} />
        ))}
      </Box>
    </Box>
  );
};
