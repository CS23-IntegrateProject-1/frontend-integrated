/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, FC } from "react";
import { Tab, Tabs, TabList, Stack, Box, Icon } from "@chakra-ui/react";
import { RedeemStatusCard } from "../../components/BusinessRedeemComponent/RedeemStatusCard";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { GetAllAdsBusiness } from "../../../../api/Advertisement/GetAllAdsBusiness";
import { GetRedeem } from "../../../../api/Redeem/GetRedeem";
import { GetRedeembyBusinessId } from "../../../../api/Redeem/GetRedeembyBusinessId";

// const fetchData = async (status: string): Promise<string[]> => {
//   // Assume this is your backend API endpoint to fetch data based on the status
//   const response = await fetch(/api/data?status=${status});
//   const data = await response.json();
//   return data;
// };

interface IRedeemCard {
  redeemId: number;
  image_url: string;
  memberTier: number;
}

//interface RedeemStatusPageProps {}

export const RedeemPageStatus: FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [selector, setSelector] = useState<"Regular" | "Silver" | "Gold" | "Platinum">("Regular");
  const [data, setData] = useState<IRedeemCard[]>([]);
  const navigate = useNavigate();
  const handleClickCreate = () => {
    navigate("/business/redeem/create");
  };

  const fetchRedeem = async () => {
    const res = await GetRedeembyBusinessId();
    setData(res);
  };

  useEffect(() => {
    fetchRedeem();
    console.log(data);
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
            onClick={() => setSelector("Regular")}
          >
            Regular
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
            onClick={() => setSelector("Silver")}
          >
            Silver
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
            onClick={() => setSelector("Gold")}
          >
            Gold
          </Tab>
          <Tab
            border="1px solid white"
            color="#FFFFFF"
            _selected={{
              color: "#FFFFFF",
              borderColor: "#A533C8",
              bgColor: "#A533C8",
            }}
            onClick={() => setSelector("Platinum")}
          >
            Platinum
          </Tab>
        </Stack>
      </TabList>
    </Tabs>

    {data?.map((data: IRedeemCard, index: number) => {
      if (selector === "Regular") {
        return (
          (data.memberTier === 1) && (
            <RedeemStatusCard
              key={index}
              data={data}
            />
          )
        );
      } else if (selector === "Silver") {
        return (
          (data.memberTier === 2) && (
            <RedeemStatusCard
              key={index}
              data={data}
            />
          )
        );
      } else if (selector === "Gold") {
        return (
          (data.memberTier === 3) && (
            <RedeemStatusCard
              key={index}
              data={data}
            />
          )
        );
      } 
      else
        return (
          data.memberTier === 4 && (
            <RedeemStatusCard key={index} data={data} />
          )
        );
    })}

    <Box pos={"fixed"} bottom={10} right={6}>
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

