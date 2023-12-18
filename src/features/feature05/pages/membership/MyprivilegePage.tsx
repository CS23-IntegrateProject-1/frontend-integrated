import { Box, Text } from '@chakra-ui/react';
import Tags from '../../components/membership/Tags';
import { MyprivilegeCard } from '../../components/membership/MyprivilegeCard';
import MyprivilegeList from "../../components/membership/MyprivilegeList";

export const MyprivilegePage = () => {
  return (
    <Box display="flex" flexDirection="column" padding="0px" rowGap="40px">
      <MyprivilegeCard />
      <Tags tag_text='Detail'/>
      <Text>eqsdfsdfsfsefw</Text>
      <Tags tag_text='Recommend'/>
      <MyprivilegeList />
    </Box>
  )
}

