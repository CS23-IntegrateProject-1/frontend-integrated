import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabList,
  Tab,
  Box,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { AdvertisementStatusCard } from "../../components/businessAdvertisementCom/AdvertisementStatusCard";
import { AdvertisementStatusCardIPG } from "../../components/businessAdvertisementCom/AdvertisementStatusCardIPG";
import { AdvertisementStatusCardCom } from "../../components/businessAdvertisementCom/AdvertisementStatusCardCom";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// const fetchData = async (status: string): Promise<string[]> => {
//   // Assume this is your backend API endpoint to fetch data based on the status
//   const response = await fetch(/api/data?status=${status});
//   const data = await response.json();
//   return data;
// };

export const AdvertisementStatusPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [data, setData] = useState<string[]>([]);
  const navigate = useNavigate();
  const handleClickCreate = () => {
    navigate("/business/advertisement/request");
  };

  useEffect(() => {
    const fetchTabData = async () => {
      const statusOptions = ["pending", "complete"];
      const selectedStatus = statusOptions[currentTab];

      // const result = await fetchData(selectedStatus);
      // setData(result);
    };

    fetchTabData();
  }, [currentTab]);

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
            >
              Complete
            </Tab>
          </Stack>
        </TabList>

        {/* <TabPanels>
          {data.map((item, index) => (
            <TabPanel key={index}>
              <p>{item}</p>
            </TabPanel>
          ))}
        </TabPanels> */}
      </Tabs>
      <AdvertisementStatusCard />
      <AdvertisementStatusCardIPG />
      <AdvertisementStatusCardCom />

      <Box pos={"absolute"} top={680} bottom={10} right={5}>
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
