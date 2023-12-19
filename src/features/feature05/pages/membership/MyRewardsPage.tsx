/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Stack, Tab, TabList, Tabs, VStack } from "@chakra-ui/react";
import { MyRewardsCard } from "../../components/membership/MyRewardsCard";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { GetMyrewards } from "../../../../api/Voucher/GetMyrewards";
import IReward from "../../../../interfaces/Voucher/IReward";

export const MyRewardsPage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [data, setData] = useState<IReward[]>([]);
  const [selector, setSelector] = useState<"Active Rewards" | "Past Rewards">(
    "Active Rewards"
  );
  // const navigate = useNavigate();

  const handleTabChange = (index: number) => {
    setCurrentTab(index);
  };

  const fetchMyrewardsStatusPage = async () => {
    const res = await GetMyrewards();

    setData(res);
  };

  useEffect(() => {
    fetchMyrewardsStatusPage();
    console.log(data);
  }, []);

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
        <VStack>
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
                onClick={() => setSelector("Active Rewards")}
              >
                Active Rewards
              </Tab>
              <Tab
                border="1px solid white"
                color="#FFFFFF"
                _selected={{
                  color: "#FFFFFF",
                  borderColor: "#A533C8",
                  bgColor: "#A533C8",
                }}
                onClick={() => setSelector("Past Rewards")}
              >
                Past Rewards
              </Tab>
            </Stack>
          </TabList>

          {data?.map((data: IReward, index: number) => {
            if (selector === "Active Rewards") {
              console.log(data.User_voucher[0].isUsed);
              return (
                !data.User_voucher[0].isUsed && (
                  <MyRewardsCard key={index} data={data} />
                )
              );
            } else
              return (
                data.User_voucher[0].isUsed && (
                  <MyRewardsCard key={index} data={data} />
                )
              );
          })}
        </VStack>
      </Tabs>
    </Box>
  );
};
