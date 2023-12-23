import React, { useState } from "react";
import { Tabs, TabList, Tab, Box, Stack, Icon} from "@chakra-ui/react";
import { PromotionStatusCard } from "../../components/PromotionComponent/PromotionCardStatus";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GetAllPromotion } from "../../../../api/Promotion/GetAllPromotion";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";
import { useQuery } from "@tanstack/react-query";

interface PromotionStatusCardProps {
  promotionId: number;
  isApprove: string;
  image_url: string;
}

interface PromotionStatusPageProps {}

export const PromotionStatusPage: React.FC<PromotionStatusPageProps> = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [selector, setSelector] = useState<"ongoing" | "complete">("ongoing");

  const navigate = useNavigate();
  const handleClickCreate = () => {
    navigate("/business/promotion/create");
  };

  const fetchBusinessPromotion = async () => {
    try {
      const res = await GetAllPromotion();
      // setData(res);
      return res
    } catch (error) {
      console.error("Failed to fetch promotions", error);
    }
  };
  const promotionStatus = useQuery({
    queryKey: ["promotionStatus"],
    queryFn: () => fetchBusinessPromotion(),
  });
  if (promotionStatus.status === "loading") {
    return <FullPageLoader />;
  }

  if (promotionStatus.error instanceof Error) {
    return <div>An error occurred: {promotionStatus.error.message}</div>;
  }
  
  const handleTabChange = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      <Tabs
        variant={"soft-rounded"}
        colorScheme={"brand"}
        index={currentTab}
        onChange={handleTabChange}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <TabList>
          <Stack spacing={10} flexDirection={"row"}>
            <Tab
              border="1px solid white"
              color="#FFFFFF"
              whiteSpace={"nowrap"}
              _selected={{
                color: "#FFFFFF",
                borderColor: "#A533C8",
                bgColor: "#A533C8",
              }}
              onClick={() => setSelector("ongoing")}
            >
              On going
            </Tab>
            <Tab
              border="1px solid white"
              color="#FFFFFF"
              _selected={{
                color: "#FFFFFF",
                borderColor: "#A533C8",
                bgColor: "#A533C8",
              }}
              onClick={() => setSelector("complete")}
            >
              Complete
            </Tab>
          </Stack>
        </TabList>
      </Tabs>

      {promotionStatus.data?.map((data: PromotionStatusCardProps, index: number) => {
        if (selector === "ongoing") {
          return (
            (data.isApprove === "Rejected" ||
              data.isApprove === "In_progress") && (
              <PromotionStatusCard key={index} data={data} />
            )
          );
        } else
          return (
            data.isApprove === "Completed" && (
              <PromotionStatusCard key={index} data={data} />
            )
          );
      })}

      <Box pos={"fixed"} bottom={10} right={10} zIndex={999}>
        <Icon
          as={FaPlusCircle}
          w={"50px"}
          h={"50px"}
          color={"#5F0DBB"}
          onClick={handleClickCreate}
        ></Icon>
      </Box>
    </Box>
  );
};
