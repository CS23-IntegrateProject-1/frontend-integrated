import {
  Box,
  Tab,
  Tabs,
  TabList,
  Stack,
} from "@chakra-ui/react";
import { PromotionDetailCard } from "../../components/PromotionCom/PromotionDetailCard";
import { PromotionCard } from "../../components/PromotionCom/PromotionCard";
import { useEffect, useState, FC } from "react";
import IPromotionApprove  from "../../../../interfaces/Promotion/IPromotionApprove"
import { GetAllPromotion } from "../../../../api/Promotion/GetAllPromotion";

export const PromotionListPage: FC = () => {
  const [datas, setDatas] = useState<IPromotionApprove[]>([]);
  const [selector, setSelector] = useState<
    "In_progress" | "Completed" | "Rejected"
  >("In_progress");
  const [currentTab, setCurrentTab] = useState(0);
  const fetchPromotion = async () => {
    const res = await GetAllPromotion();
    setDatas(res);
    console.log(res);
  };

  useEffect(() => {
    fetchPromotion();
  }, []);

  const handleTabChange = (index: number) => {
    setCurrentTab(index);
    console.log(currentTab);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Tabs
        variant={"soft-rounded"}
        colorScheme={"brand"}
        index={currentTab}
        onChange={handleTabChange}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        mb="1em"
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
              onClick={() => setSelector("In_progress")}
            >
              In Progress
            </Tab>
            <Tab
              border="1px solid white"
              color="#FFFFFF"
              whiteSpace={"nowrap"}
              _selected={{
                color: "#FFFFFF",
                borderColor: "#A533C8",
                bgColor: "#A533C8",
              }}
              onClick={() => setSelector("Completed")}
            >
              Completed
            </Tab>

            <Tab
              border="1px solid white"
              color="#FFFFFF"
              whiteSpace={"nowrap"}
              _selected={{
                color: "#FFFFFF",
                borderColor: "#A533C8",
                bgColor: "#A533C8",
              }}
              onClick={() => setSelector("Rejected")}
            >
              Rejected
            </Tab>
          </Stack>
        </TabList>
      </Tabs>
      {datas
        ?.filter((data) => data.isApprove === selector)
        .map((data: IPromotionApprove) => {
          if (selector === "In_progress") {
            return (
              data.isApprove === "In_progress" && (
                <PromotionCard
                  name={data.name}
                  promotionId={data.promotionId}
                  isApprove={data.isApprove}
                  description={data.description}
                  key={data.promotionId}  
                    
                />
              )
            );
          } else if (selector === "Completed") {
            return (
              data.isApprove === "Completed" && (
                <PromotionDetailCard
                  name={data.name}
                  promotionId={data.promotionId}
                  isApprove={data.isApprove}
                  description={data.description}
                  key={data.promotionId}
                />
              )
            );
          } else if (selector === "Rejected") {
            return (
              data.isApprove === "Rejected" && (
                <PromotionDetailCard
                  name={data.name}
                  promotionId={data.promotionId}
                  isApprove={data.isApprove}
                  description={data.description}
                  key={data.promotionId}
                />
              )
            );
          }
        })}
    </Box>
  );
};
