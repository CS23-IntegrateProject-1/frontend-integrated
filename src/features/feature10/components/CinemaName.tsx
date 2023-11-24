// CinemaName.tsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface CinemaNameProps {
  name: string;
}

const CinemaName: React.FC<CinemaNameProps> = ({ name }) => (
  <Box backgroundColor={"brand.200"} alignItems="center" padding={"7px"} justifyContent={"center"} bgColor={'#5F0DBB'}>
    <Text fontSize="14px" fontWeight="bold" color={'white'}>
      {name}
    </Text>
  </Box>
);

export default CinemaName;
