import React, { useState, useEffect } from 'react';
import { ChakraProvider, Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';

// const fetchData = async (status: string): Promise<string[]> => {
//   // Assume this is your backend API endpoint to fetch data based on the status
//   const response = await fetch(/api/data?status=${status});
//   const data = await response.json();
//   return data;
// };

export const AdvertisementStatus: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const fetchTabData = async () => {
      const statusOptions = ['pending', 'success', 'canceled'];
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
    <Tabs variant={"soft-rounded"} colorScheme={"brand"} index={currentTab} onChange={handleTabChange}>
      <TabList>
        <Tab>Pending</Tab>
        <Tab mx={"16px"}>Success</Tab>
        <Tab>Canceled</Tab>
      </TabList>

      <TabPanels>
        {data.map((item, index) => (
          <TabPanel key={index}>
            {/* Render your data here */}
            <p>{item}</p>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
    </Box>
  );
};