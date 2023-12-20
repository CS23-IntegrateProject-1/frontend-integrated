import React, { useState, useEffect } from "react";
import { Tabs, TabList, Tab, Box, Stack, Icon } from "@chakra-ui/react";
import { RedeemStatusCard } from "../../components/BusinessRedeemComponent/RedeemStatusCard";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { GetAllAdsBusiness } from "../../../../api/Advertisement/GetAllAdsBusiness";

// const fetchData = async (status: string): Promise<string[]> => {
//   // Assume this is your backend API endpoint to fetch data based on the status
//   const response = await fetch(/api/data?status=${status});
//   const data = await response.json();
//   return data;
// };

interface IRedeemCard {
  isApprove: "Rejected" | "In_progress" | "Completed";
  image_url: string;
}

interface RedeemStatusPageProps {}

export const RedeemPageStatus: React.FC<RedeemStatusPageProps> = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [data] = useState<IRedeemCard[]>([]);
  const [selector, setSelector] = useState<"ongoing" | "complete">("ongoing");
  const navigate = useNavigate();
  const handleClickCreate = () => {
    navigate("/business/redeem/create");
  };
  // const businessId = 2;

  const fetchBusinessAds = async () => {
    //const res = await GetAllRedeem();
    //setData(res);
  };

  useEffect(() => {
    fetchBusinessAds();
    // console.log(data);
  }, []);

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

      {data?.map((data: IRedeemCard, index: number) => {
        if (selector === "ongoing") {
          return (
            (data.isApprove === "Rejected" ||
              data.isApprove === "In_progress") && (
              <RedeemStatusCard key={index} data={data} />
            )
          );
        } else
          return (
            data.isApprove === "Completed" && (
              <RedeemStatusCard key={index} data={data} />
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
