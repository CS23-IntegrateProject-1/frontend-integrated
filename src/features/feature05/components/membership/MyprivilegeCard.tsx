import { Box, Heading } from '@chakra-ui/react'
import { Card, CardBody } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { GetTierNameByTierId } from '../../../../api/Membership/GetTierNameByTierId';
// import { BsBookmarkStarFill } from "react-icons/bs";

export const MyprivilegeCard = () => {
  const [data, setData] = useState<string>();

  const fetchDatas = async () => {
    try {
      // Call the function to get the data
      const result = await GetTierNameByTierId();
      
      // Access the data property from the AxiosResponse
      setData(result?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []); // Add an empty dependency array to run the effect only once

  
  return (
    <Box>
      <Card
        direction={{ base: "column", sm: "row" }}
        variant="filled"
        h="216px"
        borderRadius="10px"
        rowGap="0px"
        display="flex"
        flexDirection="column"
        boxShadow="-30px 50px 100px 20px rgba(101, 23, 188, 0.7) inset , 100px -60px 120px 20px rgba(222, 190, 246, 0.2) inset"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          padding="55px 0px 0px 15px"
        >
          <CardBody>
            {/* <Heading size='3xl' textShadow="-2px 0px 3px grey">Regular</Heading> */}
            <Heading size="3xl" textShadow="-2px 0px 3px grey">
              {data || ""}
            </Heading>
            {/* <Text py='2' fontWeight="bold">
                          500/1000 points
                      </Text> */}
          </CardBody>

          <Box
            marginTop="8px"
            backgroundColor="brand.400"
            padding="36px 19px"
            borderTopLeftRadius="125px"
            borderBottomLeftRadius="125px"
            borderTopRightRadius="10px"
            borderBottom="0px"
          ></Box>
        </Box>
      </Card>
    </Box>
  );
}
