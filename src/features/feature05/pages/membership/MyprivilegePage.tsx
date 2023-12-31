import { Box, Text } from '@chakra-ui/react';
import Tags from '../../components/membership/Tags';
import { MyprivilegeCard } from '../../components/membership/MyprivilegeCard';
import MyprivilegeList from "../../components/membership/MyprivilegeList";
import { useEffect, useState } from 'react';
import { GetMyprivilege } from '../../../../api/Membership/GetMyprivilege';

export const MyprivilegePage = () => {
  
  const [data, setData] = useState<string>();

  const fetchDatas = async () => {
    try {
      // Call the function to get the data
      const result = await GetMyprivilege();

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
    <Box display="flex" flexDirection="column" padding="0px" rowGap="40px" marginRight="200px" marginLeft="200px">
      <MyprivilegeCard />
      <Tags tag_text="Detail" />
      <Text> {data || ""}</Text>
      <Tags tag_text="Recommend" />
      <MyprivilegeList />
    </Box>
  );
}

