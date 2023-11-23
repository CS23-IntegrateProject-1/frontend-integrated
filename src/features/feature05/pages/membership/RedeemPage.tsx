import React from 'react';
import theme from '../../../../theme/theme';
import { RedeemCard } from '../../components/membership/RedeemCard';
import { Box } from '@chakra-ui/react';
import Tags from '../../components/membership/Tags';
import RedeemList from '../../components/membership/RedeemList';

export const RedeemPage = () => {
  return (
    <Box display="flex" flexDirection="column" padding="0px" rowGap="40px">

      <RedeemCard />
      <Tags tag_text='recommend'/>
      <RedeemList />
    </Box>
  )
}

